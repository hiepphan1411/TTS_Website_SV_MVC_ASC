var KhoiKienThuc = (function () {
    "use strict";

    var rawCurriculumData = null;
    var groupedBySemester = null;
    var groupedByKnowledgeBlock = null;
    var currentView = "semester";
    var currentFilter = "all";

    var tooltipElement = null;
    var tooltipTimeout = null;

    function loadCurriculumData() {
        var urls = ChuongTrinhKhung._dataUrls || {};

        if (!urls.ctk) {
            return $.Deferred().reject();
        }

        return $.getJSON(urls.ctk)
            .then(function (data) {
                rawCurriculumData = data;
                processData();
                return data;
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("=== ERROR LOADING DATA ===");
                console.error("URL:", urls.ctk);
                console.error("Status:", textStatus);
                console.error("Error:", errorThrown);
                console.error("Status Code:", jqXHR.status);
                console.error("Response:", jqXHR.responseText);
                console.error("========================");
            });
    }

    function processData() {
        if (!rawCurriculumData || rawCurriculumData.length === 0) {
            console.warn("processData: No data to process!");
            return;
        }
        console.log("processData: Processing", rawCurriculumData.length, "courses");

        // Group by semester (HocKy)
        var semesterMap = {};
        for (var i = 0; i < rawCurriculumData.length; i++) {
            var course = rawCurriculumData[i];
            var hocKy = course.HocKy;

            if (!semesterMap[hocKy]) {
                semesterMap[hocKy] = {
                    HocKy: hocKy,
                    SoTCBatBuoc: course.SoTCBatBuoc || 0,
                    SoTCTuChon: course.SoTCTuChon || 0,
                    mandatory: [],
                    elective: [],
                };
            }

            var courseData = $.extend({}, course, { stt: 0 });
            if (course.IsBatBuoc === true) {
                semesterMap[hocKy].mandatory.push(courseData);
            } else {
                semesterMap[hocKy].elective.push(courseData);
            }
        }

        // Convert to array and sort by semester
        groupedBySemester = [];
        for (var key in semesterMap) {
            if (semesterMap.hasOwnProperty(key)) {
                // Update STT
                for (var j = 0; j < semesterMap[key].mandatory.length; j++) {
                    semesterMap[key].mandatory[j].stt = j + 1;
                }
                for (var k = 0; k < semesterMap[key].elective.length; k++) {
                    semesterMap[key].elective[k].stt = k + 1;
                }
                groupedBySemester.push(semesterMap[key]);
            }
        }
        groupedBySemester.sort(function (a, b) {
            return a.HocKy - b.HocKy;
        });

        // Group by knowledge block (IDKhoiKienThuc)
        var kbMap = {};
        for (var i = 0; i < rawCurriculumData.length; i++) {
            var course = rawCurriculumData[i];
            var kbId = course.IDKhoiKienThuc;

            if (!kbMap[kbId]) {
                kbMap[kbId] = {
                    IDKhoiKienThuc: kbId,
                    TenKhoiKienThuc: course.TenKhoiKienThuc,
                    mandatory: [],
                    electiveGroups: {},
                };
            }

            var courseData = $.extend({}, course, { stt: 0 });
            if (course.IsBatBuoc === true) {
                kbMap[kbId].mandatory.push(courseData);
            } else {
                // Group electives by SoNhomTuChon
                var groupNum = course.SoNhomTuChon || 0;
                if (!kbMap[kbId].electiveGroups[groupNum]) {
                    kbMap[kbId].electiveGroups[groupNum] = [];
                }
                kbMap[kbId].electiveGroups[groupNum].push(courseData);
            }
        }

        // Convert to array and organize elective groups
        groupedByKnowledgeBlock = [];
        for (var key in kbMap) {
            if (kbMap.hasOwnProperty(key)) {
                var kb = kbMap[key];

                // Update STT for mandatory courses
                for (var j = 0; j < kb.mandatory.length; j++) {
                    kb.mandatory[j].stt = j + 1;
                }

                // Update STT for each elective group
                var electiveGroupsArray = [];
                for (var groupKey in kb.electiveGroups) {
                    if (kb.electiveGroups.hasOwnProperty(groupKey)) {
                        var group = kb.electiveGroups[groupKey];
                        for (var k = 0; k < group.length; k++) {
                            group[k].stt = k + 1;
                        }
                        electiveGroupsArray.push({
                            SoNhomTuChon: parseInt(groupKey),
                            courses: group,
                        });
                    }
                }

                // Sort elective groups by group number
                electiveGroupsArray.sort(function (a, b) {
                    return a.SoNhomTuChon - b.SoNhomTuChon;
                });

                kb.electiveGroupsArray = electiveGroupsArray;
                groupedByKnowledgeBlock.push(kb);
            }
        }
    }

    function getAllCourses() {
        return rawCurriculumData || [];
    }

    function isPrerequisiteCompleted(HocPhanTienQuyet) {
        if (
            !HocPhanTienQuyet ||
            HocPhanTienQuyet === "-" ||
            HocPhanTienQuyet === null
        )
            return true;

        var matches = HocPhanTienQuyet.match(/\d{4}\w{3}\d{5}/g);

        if (!matches || matches.length === 0) return true;

        var allCourses = getAllCourses();
        for (var i = 0; i < matches.length; i++) {
            var prereqCode = matches[i];
            var found = false;
            for (var j = 0; j < allCourses.length; j++) {
                if (allCourses[j].MaHocPhan === prereqCode) {
                    found = true;
                    if (!allCourses[j].IsDat) return false;
                    break;
                }
            }
        }
        return true;
    }

    function getPrerequisiteTooltip(HocPhanTienQuyet) {
        if (
            !HocPhanTienQuyet ||
            HocPhanTienQuyet === "-" ||
            HocPhanTienQuyet === null
        )
            return null;

        var matches = HocPhanTienQuyet.match(/\w{3}\d{5}/g);
        if (!matches || matches.length === 0) return null;

        var allCourses = getAllCourses();
        var prerequisites = [];

        for (var i = 0; i < matches.length; i++) {
            var prereqCode = matches[i];
            for (var j = 0; j < allCourses.length; j++) {
                if (allCourses[j].MaMonHoc === prereqCode) {
                    prerequisites.push({
                        TenMonHoc: allCourses[j].TenMonHoc,
                        MaMonHoc: prereqCode,
                        IsDat: allCourses[j].IsDat,
                    });
                    break;
                }
            }
        }

        return prerequisites.length > 0 ? prerequisites : null;
    }

    function createTableRow(course, viewMode) {
        viewMode = viewMode || "knowledgeBlock";

        // Học phần tiên quyết chưa hoàn thành sẽ bị làm mờ
        var isLocked = !isPrerequisiteCompleted(course.HocPhanTienQuyet);
        var lockedClass = isLocked ? ' class="row-locked"' : "";

        var bgStyle = course.IsDat
            ? ' style="background-color: #F4FFF5 !important;"'
            : "";

        var tooltipData = getPrerequisiteTooltip(course.HocPhanTienQuyet);
        var dataTooltip = tooltipData
            ? ' data-tooltip="' +
            encodeURIComponent(JSON.stringify(tooltipData)) +
            '"'
            : "";

        var completedIcon = course.IsDat
            ? '<span class="checkmark">✓</span>'
            : '<span class="dash">-</span>';

        var secondColumn =
            viewMode === "semester"
                ? '<td class="column-center">' +
                (course.TenKhoiKienThuc || "-") +
                "</td>"
                : '<td class="column-center">' + (course.HocKy || "-") + "</td>";

        return `
      <tr ${lockedClass} ${bgStyle} ${dataTooltip} data-completed="${course.IsDat ? "true" : "false"}" data-mandatory="${course.IsBatBuoc ? "true" : "false"}">
        <td class="column-center">${course.stt || ""}</td>
        <td class="column-center">${viewMode === "semester" ? course.TenKhoiKienThuc || "-" : course.HocKy || "-"}</td>
        <td>${course.TenMonHoc || ""}</td>
        <td class="column-center">${course.MaMonHoc || ""}</td>
        <td class="column-center">${course.HocPhanTienQuyet || "-"}</td>
        <td class="column-center">${course.MaHocPhanTuongDuong || "-"}</td>
        <td class="column-center">${course.HocPhanSongHanh || "-"}</td>
        <td class="column-center">${course.SoTinChi || ""}</td>
        <td class="column-center">${course.SoTietLyThuyet || 0}</td>
        <td class="column-center">${course.SoTietThucHanh || 0}</td>
        <td class="column-center">${completedIcon}</td>
        <td class="column-center">
          <button class="btn btn-sm btn-outline-primary" ${isLocked ? "disabled" : ""}>
            <i class="fa-solid fa-file-invoice"></i>
          </button>
        </td>
      </tr>
      `;
    }

    function buildTableHeader(viewMode) {
        viewMode = viewMode || "knowledgeBlock";
        var secondColTitle = viewMode === "semester" ? "KHỐI KIẾN THỨC" : "HỌC KỲ";
        return (
            "<thead><tr>" +
            '<th class="column-center">STT</th>' +
            '<th class="column-center">' +
            secondColTitle +
            "</th>" +
            "<th>TÊN MÔN HỌC HỌC PHẦN</th>" +
            '<th class="column-center">MÃ HP</th>' +
            '<th class="column-center">HỌC PHẦN</th>' +
            '<th class="column-center">HP TƯƠNG ĐƯƠNG</th>' +
            '<th class="column-center">HP THAY THẾ</th>' +
            '<th class="column-center">SỐ TC</th>' +
            '<th class="column-center">SỐ TIẾT LÝ THUYẾT</th>' +
            '<th class="column-center">SỐ TIẾT THỰC HÀNH</th>' +
            '<th class="column-center">ĐẠT</th>' +
            '<th class="column-center">ĐỀ CƯƠNG</th>' +
            "</tr></thead>"
        );
    }

    function renderKnowledgeBlockView() {
        if (!groupedByKnowledgeBlock || groupedByKnowledgeBlock.length === 0)
            return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(
            ".content-wrapper",
        );

        console.log("BB: ", groupedByKnowledgeBlock);

        if (timelineSection.length) timelineSection.css("display", "none");
        if (knowledgeSection.length) knowledgeSection.css("display", "block");

        var tableHeader = buildTableHeader("knowledgeBlock");
        var sectionsHTML = "";

        $.each(groupedByKnowledgeBlock, function (index, kbData) {
            var isExpanded = index === 0;
            var expandedClass = isExpanded ? "expanded" : "";
            var rotatedClass = isExpanded ? "rotated" : "";
            var activeClass = isExpanded ? "active" : "";

            var totalMandatoryCredits = 0;
            var totalElectiveCredits = 0;
            $.each(kbData.mandatory, function (_, c) {
                var credits = parseInt(c.DVHT) || 0;
                totalMandatoryCredits += credits;
            });

            if (kbData.electiveGroupsArray) {
                $.each(kbData.electiveGroupsArray, function (_, group) {
                    $.each(group.courses, function (_, c) {
                        var credits = parseInt(c.DVHT) || 0;
                        totalElectiveCredits += credits;
                    });
                });
            }

            // Render Bắt buộc
            var mandatoryHTML = "";
            if (kbData.mandatory.length > 0) {
                var mandatoryRows = "";
                $.each(kbData.mandatory, function (idx, c) {
                    mandatoryRows += createTableRow(c, "knowledgeBlock");
                });
                mandatoryHTML = `
          <div class="subtitle-header">Học phần bắt buộc</div>
          <div class="table-frame">
            <table class="table table-sm mandatory-courses-table">
              ${tableHeader}
              <tbody>${mandatoryRows}</tbody>
            </table>
          </div>
        `;
            }

            // Render Tự chọn
            var electiveHTML = "";
            if (kbData.electiveGroupsArray && kbData.electiveGroupsArray.length > 0) {
                electiveHTML = `<div class="subtitle-header">Học phần tự chọn</div>
            <div class="elective-course">`;

                console.log("Rendering block:", kbData.electiveGroupsArray);

                $.each(kbData.electiveGroupsArray, function (_, group) {
                    var electiveRows = "";
                    $.each(group.courses, function (idx, c) {
                        electiveRows += createTableRow(c, "knowledgeBlock");
                    });

                    var groupTitle =
                        group.SoNhomTuChon > 0
                            ? "TỰ CHỌN KHỐI KIẾN THỨC " +
                            kbData.TenKhoiKienThuc.toUpperCase() +
                            " " +
                            group.SoNhomTuChon
                            : "TỰ CHỌN KHỐI KIẾN THỨC " +
                            kbData.TenKhoiKienThuc.toUpperCase();

                    electiveHTML += `
            <div style="width: max-content; min-width: 100%">
              <div class="block-type">
                ${groupTitle}
              </div>
              <table class="table table-sm elective-table">
                ${tableHeader}
                <tbody>
                  ${electiveRows}
                </tbody>
              </table>
            </div>
          `;
                });

                electiveHTML += "</div>";
            }

            sectionsHTML += `
        <div class="expandable-section">
          <div class="section-header ${expandedClass}" onclick="KhoiKienThuc.toggleSection(this)">
            <div class="semester-title">
              <div class="semester-head-icon"></div>
              <div>
                <div class="section-header-text">Khối kiến thức ${kbData.TenKhoiKienThuc}</div>
                <div class="section-meta">
                  Bắt buộc: <span class="bold-text">${totalMandatoryCredits} tín chỉ</span>
                  • Tự chọn: <span class="bold-text">${totalElectiveCredits} tín chỉ</span>
                </div>
              </div>
            </div>
            <div class="section-icon ${rotatedClass}"><i class="fas fa-chevron-up"></i></div>
          </div>
          <div class="section-contents ${activeClass}">
            ${mandatoryHTML}
            ${electiveHTML}
          </div>
        </div>
      `;
        });

        container.innerHTML = sectionsHTML;
    }

    function renderSemesterView() {
        if (!groupedBySemester || groupedBySemester.length === 0) return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(
            ".content-wrapper",
        );

        if (timelineSection.length) timelineSection.css("display", "block");
        if (knowledgeSection.length) knowledgeSection.css("display", "none");

        var tableHeader = buildTableHeader("semester");
        var semestersHTML = "";

        $.each(groupedBySemester, function (index, semData) {
            var isExpanded = index === 0;
            var expandedClass = isExpanded ? "expanded" : "";
            var rotatedClass = isExpanded ? "rotated" : "";
            var activeClass = isExpanded ? "active" : "";

            var mandatoryHTML = "";
            if (semData.mandatory.length > 0) {
                var mandatoryRows = "";
                $.each(semData.mandatory, function (idx, c) {
                    mandatoryRows += createTableRow(c, "semester");
                });
                mandatoryHTML = `
        <div class="subtitle-header">Học phần bắt buộc</div>
        <div class="table-frame">
          <table class="table table-sm mandatory-courses-table">
            ${tableHeader}
            <tbody>${mandatoryRows}</tbody>
          </table>
        </div>
        `;
            }

            var electiveHTML = "";
            if (semData.elective.length > 0) {
                var electiveRows = "";
                $.each(semData.elective, function (idx, c) {
                    electiveRows += createTableRow(c, "semester");
                });
                electiveHTML = `
        <div class="subtitle-header">Học phần tự chọn</div>
          <div class="table-frame">
            <table class="table table-sm">
              ${tableHeader}
              <tbody>
                ${electiveRows}
              </tbody>
            </table>
          </div>
        `;
            }

            semestersHTML += `
        <div class="expandable-section">
          <div class="section-header ${expandedClass}" onclick="KhoiKienThuc.toggleSection(this)">
            <div class="semester-title">
              <div class="semester-head-icon"></div>
              <div>
                <div class="section-header-text">Học kỳ ${semData.HocKy}</div>
                <div class="section-meta">
                  Bắt buộc: <span class="bold-text">${semData.SoTCBatBuoc} tín chỉ</span>
                  • Tự chọn: <span class="bold-text">${semData.SoTCTuChon} tín chỉ</span>
                </div>
              </div>
            </div>
            <div class="section-icon ${rotatedClass}"><i class="fas fa-chevron-up"></i></div>
          </div>
          <div class="section-contents ${activeClass}">
            ${mandatoryHTML}
            ${electiveHTML}
          </div>
        </div>
      `;
        });

        container.innerHTML = semestersHTML;
    }

    function switchView(view) {
        currentView = view;
        $(".tab-btn").removeClass("active");

        if (view === "semester") {
            $(".tab-btn:first-child").addClass("active");
            renderSemesterView();
        } else {
            $(".tab-btn:last-child").addClass("active");
            renderKnowledgeBlockView();
        }

        setTimeout(function () {
            attachTooltipListeners();
            applyFilter(currentFilter);
        }, 100);
    }
    /* Tooltip */

    function createTooltipElement() {
        if (!tooltipElement) {
            tooltipElement = document.createElement("div");
            tooltipElement.className = "custom-tooltip";
            document.body.appendChild(tooltipElement);
        }
        return tooltipElement;
    }

    function showTooltip(event, tooltipData) {
        if (tooltipTimeout) {
            clearTimeout(tooltipTimeout);
            tooltipTimeout = null;
        }

        var tooltip = createTooltipElement();
        var prerequisites = Array.isArray(tooltipData)
            ? tooltipData
            : [tooltipData];

        var allCompleted = true;
        var uncompletedCourses = [];
        for (var i = 0; i < prerequisites.length; i++) {
            if (!prerequisites[i].IsDat) {
                allCompleted = false;
                uncompletedCourses.push(prerequisites[i].TenMonHoc);
            }
        }

        var tooltipFrames = "";
        for (var k = 0; k < prerequisites.length; k++) {
            var prereq = prerequisites[k];
            var statusClass = prereq.IsDat ? "completed" : "not-completed";
            var statusText = prereq.IsDat ? "Đã học" : "Chưa học";
            var statusIcon = prereq.IsDat
                ? '<i class="fa-solid fa-circle-check" style="color: #22C55E"></i>'
                : '<i class="fa-solid fa-circle-xmark" style="color: #EA5455"></i>';
            var requiredText = prereq.IsDat
                ? "Đã hoàn thành chương trình"
                : "Môn phải học tiên quyết";

            tooltipFrames += `
      <div class="tooltip-frame">
        <div>${statusIcon}</div>
        <div class="tooltip-body">
          <div class="tooltip-content">
            ${prereq.TenMonHoc}
          </div>
          <div class="tooltip-require">
            Yêu cầu: <i>${requiredText}</i>
          </div>
        </div>
        <div class="tooltip-status ${statusClass}">${statusText}</div>
      </div>
      `;
        }

        var remindText = allCompleted
            ? "Môn học đã đủ điều kiện đăng ký."
            : '<span class="remind-text">Bạn <span class="text-danger">CHƯA THỂ ĐĂNG KÝ</span> môn này do chưa hoàn thành học phần tiên quyết: <b>' +
            uncompletedCourses.join(", ") +
            "</b>.</span>";

        tooltip.innerHTML = `
      <div class="tooltip-title">MÔN HỌC TIÊN QUYẾT ${prerequisites.length > 1 ? " (" + prerequisites.length + " môn)" : ""}</div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${tooltipFrames}
      </div>
      <div class="tooltip-remind">
        ${remindText}
      </div>
    `;

        var tooltipLeft = event.clientX - 22;
        tooltip.style.left = tooltipLeft + "px";
        tooltip.style.visibility = "hidden";
        tooltip.style.display = "block";

        var tooltipHeight = tooltip.offsetHeight;
        tooltip.style.top = event.clientY - tooltipHeight - 8 + "px";
        tooltip.style.visibility = "visible";

        var arrowLeft = event.clientX - tooltipLeft - 8;
        tooltip.style.setProperty("--arrow-left", arrowLeft + "px");

        tooltipTimeout = setTimeout(function () {
            tooltip.classList.add("show");
        }, 50);
    }

    function hideTooltip() {
        if (tooltipTimeout) {
            clearTimeout(tooltipTimeout);
            tooltipTimeout = null;
        }
        if (tooltipElement) tooltipElement.classList.remove("show");
    }

    function attachTooltipListeners() {
        $("tr[data-tooltip]").each(function () {
            var $row = $(this);
            $row.off("mouseenter.tooltip mousemove.tooltip mouseleave.tooltip");

            $row.on("mouseenter.tooltip", function (e) {
                var encodedData = $(this).attr("data-tooltip");
                if (encodedData) {
                    showTooltip(e, JSON.parse(decodeURIComponent(encodedData)));
                }
            });

            $row.on("mousemove.tooltip", function (e) {
                if (tooltipElement && tooltipElement.classList.contains("show")) {
                    var tLeft = e.clientX - 22;
                    tooltipElement.style.left = tLeft + "px";
                    tooltipElement.style.top =
                        e.clientY - tooltipElement.offsetHeight - 8 + "px";
                    tooltipElement.style.setProperty(
                        "--arrow-left",
                        e.clientX - tLeft - 8 + "px",
                    );
                }
            });

            $row.on("mouseleave.tooltip", hideTooltip);
        });
    }

    function toggleSection(header) {
        var $header = $(header);
        var icon = $header.find(".section-icon");
        var content = $header.next(".section-contents");

        $(".section-header")
            .not(header)
            .each(function () {
                $(this).removeClass("expanded");
                $(this).find(".section-icon").removeClass("rotated");
                $(this).next(".section-contents").removeClass("active");
            });

        $header.toggleClass("expanded");
        icon.toggleClass("rotated");
        content.toggleClass("active");
    }

    /* Knowledge Blocks Overview */
    function renderKnowledgeBlocksOverview() {
        var knowledgeBlocksData = ChuongTrinhKhung.getKnowledgeBlocksData();
        if (!knowledgeBlocksData) return;

        var container = document.getElementById("knowledgeBlocksContainer");
        if (!container) return;

        var circumference = Math.round(2 * Math.PI * 50);
        var blocksHTML = "";

        $.each(knowledgeBlocksData, function (_, block) {
            var sem = {
                completedCredits: block.completedCredits || 0,
                currentCredits: block.currentCredits || 0,
                totalCredits: block.totalCredits || 0,
                status: block.status || "",
                progress:
                    block.totalCredits > 0
                        ? Math.round(
                            ((block.completedCredits + (block.currentCredits || 0)) /
                                block.totalCredits) *
                            100,
                        )
                        : 0,
            };

            var styles = ChuongTrinhKhung.getCircleStyles(sem);
            var progressBar = ChuongTrinhKhung.buildProgressBarHTML(
                styles.completedPercent,
                styles.currentPercent,
                styles.totalPercent,
            );
            var displayPercent = Math.round(styles.totalPercent);

            var completedDash = Math.round(
                (styles.completedPercent / 100) * circumference,
            );
            var currentDash = Math.round(
                (styles.currentPercent / 100) * circumference,
            );

            var strokeCompleted = "transparent";
            var strokeCurrent = "transparent";

            if (styles.circleClass === "completed") {
                strokeCompleted = "#28a745";
            } else if (
                styles.circleClass === "active" ||
                styles.circleClass === "partial-yellow"
            ) {
                strokeCurrent = "#ffb800";
            } else if (styles.circleClass === "partial-mixed") {
                strokeCompleted = "#28a745";
                strokeCurrent = "#ffb800";
            } else if (styles.circleClass === "partial-green") {
                strokeCompleted = "#28a745";
            }

            var displayCredits =
                sem.completedCredits + sem.currentCredits + "/" + sem.totalCredits;

            var svgCircles =
                '<circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>';
            if (strokeCompleted !== "transparent") {
                svgCircles +=
                    '<circle cx="60" cy="60" r="50" fill="none" stroke="' +
                    strokeCompleted +
                    '" stroke-width="8" stroke-dasharray="' +
                    completedDash +
                    " " +
                    circumference +
                    '" stroke-dashoffset="0"/>';
            }
            if (strokeCurrent !== "transparent") {
                svgCircles +=
                    '<circle cx="60" cy="60" r="50" fill="none" stroke="' +
                    strokeCurrent +
                    '" stroke-width="8" stroke-dasharray="' +
                    currentDash +
                    " " +
                    circumference +
                    '" stroke-dashoffset="-' +
                    completedDash +
                    '"/>';
            }

            blocksHTML +=
                '<div class="timeline-item" style="cursor:pointer;" onclick="KhoiKienThuc.scrollToBlock(\'' +
                block.name.replace(/'/g, "\\'").trim() + '\')">' +
                '  <div class="circle-progress">' +
                '    <svg viewBox="0 0 120 120">' +
                svgCircles +
                "</svg>" +
                '    <div class="circle-text ' +
                styles.circleClass +
                '">' +
                getAbbreviation(block.name) +
                "</div>" +
                "  </div>" +
                '  <div class="block-title">' +
                block.name +
                "</div>" +
                '  <div class="block-code">' +
                displayCredits +
                " tín chỉ</div>" +
                '  <div class="timeline-progress">' +
                '    <div class="timeline-progress-bar">' +
                progressBar.html +
                '      <div class="timeline-progress-text ' +
                progressBar.textClass +
                '">' +
                displayPercent +
                "%</div>" +
                "    </div>" +
                "  </div>" +
                "</div>";
        });

        container.innerHTML = blocksHTML;
    }

    function getAbbreviation(text) {
        text = removeVietnameseTones(text);

        return text
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    }

    function removeVietnameseTones(str) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
    }

    function applyFilter(filter) {
        currentFilter = filter;

        $(".btn-custom[data-filter]").removeClass("primary");
        $(".btn-custom[data-filter='" + filter + "']").addClass("primary");

        $("#expandableSections tbody tr").each(function () {
            var $row = $(this);
            var completed = $row.attr("data-completed") === "true";
            var mandatory = $row.attr("data-mandatory") === "true";

            var visible = true;
            if (filter === "notStudied") visible = !completed;
            else if (filter === "mandatory") visible = mandatory;

            $row.toggle(visible);
        });
    }

    function scrollToBlock(block) {
        var knowledgeTab = document.querySelector(".tab-btn:last-child");
        if (knowledgeTab && !knowledgeTab.classList.contains("active")) {
            knowledgeTab.click();
        }

        setTimeout(function () {
            var sections = document.querySelectorAll(".expandable-section");
            var targetSection = null;

            sections.forEach(function (section) {
                var headerText = section.querySelector(".section-header-text");
                console.log("Tên khối kiến thức debug: " + block + " , Khối kiến thức: " + headerText.textContent)
                if (headerText && headerText.textContent.trim().indexOf("Khối kiến thức " + block) >= 0) {
                    targetSection = section;
                }
            });

            if (targetSection) {
                var header = targetSection.querySelector(".section-header");
                if (!header.classList.contains("expanded")) {
                    header.click();
                }

                setTimeout(function () {
                    var headerHeight = 70;
                    var headerEl = document.querySelector(".header-container");
                    if (headerEl) headerHeight = headerEl.offsetHeight;
                    var y =
                        targetSection.getBoundingClientRect().top +
                        window.pageYOffset -
                        headerHeight -
                        20;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 100);
            }
        }, 200);
    }
    function init(dataUrls) {
        ChuongTrinhKhung._dataUrls = dataUrls;

        return loadCurriculumData().then(function () {
            switchView(currentView);
            attachTooltipListeners();

            var tabBtns = $(".tab-btn");
            if (tabBtns.length >= 2) {
                tabBtns.eq(0).on("click", function () {
                    switchView("semester");
                });
                tabBtns.eq(1).on("click", function () {
                    switchView("knowledgeBlock");
                });
            }
            $(".btn-custom[data-filter]")
                .off("click.filter")
                .on("click.filter", function () {
                    applyFilter($(this).attr("data-filter"));
                });
        });
    }

    // Public API
    return {
        init: init,
        toggleSection: toggleSection,
        renderKnowledgeBlocksOverview: renderKnowledgeBlocksOverview,
        switchView: switchView,
        applyFilter: applyFilter,
        scrollToBlock: scrollToBlock,
    };
})();

window.scrollToSemester = function (block) {
    KhoiKienThuc.scrollToSemester(block);
};
