var KhoiKienThuc = (function () {
    "use strict";

    var curriculumData = null;
    var semesterCurriculumData = null;
    var currentView = "semester";
    var currentFilter = "all";

    var tooltipElement = null;
    var tooltipTimeout = null;

    function loadCurriculumData() {
        var urls = ChuongTrinhKhung._dataUrls || {};
        return $.getJSON(urls.khoiKienThuc || "")
            .then(function (data) {
                curriculumData = data;
                return data;
            })
            .fail(function () {
                console.error("Loi khi tai du lieu chuong trinh dao tao.");
            });
    }

    function loadSemesterCurriculumData() {
        var urls = ChuongTrinhKhung._dataUrls || {};
        return $.getJSON(urls.hocKy || "")
            .then(function (data) {
                semesterCurriculumData = data;
                return data;
            })
            .fail(function () {
                console.error("Loi khi tai du lieu hoc ky.");
            });
    }

    function getAllCourses() {
        if (!curriculumData) return [];
        var all = [];
        $.each(curriculumData.blocks || [], function (_, block) {
            all = all.concat(block.mandatory || []);
            $.each(block.electiveGroups || [], function (_, eg) {
                all = all.concat(eg.courses || []);
            });
        });
        return all;
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
        console.log(allCourses);
        for (var i = 0; i < matches.length; i++) {
            var prereqCode = matches[i];
            var found = false;
            var found = false;
            for (var j = 0; j < allCourses.length; j++) {
                if (allCourses[j].courseCode === prereqCode) {
                    found = true;
                    if (!allCourses[j].isDat) return false;
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
                if (allCourses[j].maMonHoc === prereqCode) {
                    prerequisites.push({
                        courseName: allCourses[j].courseName,
                        maMonHoc: prereqCode,
                        isDat: allCourses[j].isDat,
                    });
                    break;
                }
            }
        }

        return prerequisites.length > 0 ? prerequisites : null;
    }


    function safeValue(value) {
        return value ?? "-";
    }

    function createTableRow(course, viewMode) {
        viewMode = viewMode || "knowledgeBlock";

        var isLocked = !isPrerequisiteCompleted(course.prerequisite);
        var lockedClass = isLocked ? "row-locked" : "";
        var bgStyle = course.completed ? "background-color: #F4FFF5 !important;" : "";

        var tooltipData = getPrerequisiteTooltip(course.prerequisite);
        var dataTooltip = tooltipData ? encodeURIComponent(JSON.stringify(tooltipData)) : "";

        var completedIcon = course.completed
            ? `<span class="checkmark">✓</span>`
            : `<span class="dash">-</span>`;

        var secondColumn = viewMode === "semester"
            ? `<td class="column-center">${safeValue(course.knowledgeBlock)}</td>`
            : `<td class="column-center">${safeValue(course.semester)}</td>`;

        return `
        <tr class="${lockedClass}"
            style="${bgStyle}"
            data-tooltip="${dataTooltip}"
            data-completed="${course.completed ? 'true' : 'false'}"
            data-mandatory="${course.isBatBuoc ? 'true' : 'false'}">
            <td class="column-center">${safeValue(course.stt)}</td>
            ${secondColumn}
            <td>${safeValue(course.courseName)}</td>
            <td class="column-center">${safeValue(course.courseCode)}</td>
            <td class="column-center">${safeValue(course.prerequisite)}</td>
            <td class="column-center">${safeValue(course.equivalent)}</td>
            <td class="column-center">${safeValue(course.replacement)}</td>
            <td class="column-center">${safeValue(course.credits)}</td>
            <td class="column-center">${safeValue(course.theoryHours)}</td>
            <td class="column-center">${safeValue(course.practiceHours)}</td>
            <td class="column-center">${completedIcon}</td>
            <td class="column-center">
                <button class="btn btn-sm btn-outline-primary">
                    <i class="fa-solid fa-file-invoice"></i>
                </button>
            </td>
        </tr>`;
    }

    function buildTableHeader(viewMode) {
        viewMode = viewMode || "knowledgeBlock";
        var secondColTitle = viewMode === "semester"
            ? "KHỐI KIẾN THỨC"
            : "HỌC KỲ";
        return `<thead><tr>
            <th class="column-center">STT</th>
            <th class="column-center">${secondColTitle}</th>
            <th>TÊN MÔN HỌC/HỌC PHẦN</th>
            <th class="column-center">MÃ HP</th>
            <th class="column-center">HỌC PHẦN</th>
            <th class="column-center">HP TƯƠNG ĐƯƠNG</th>
            <th class="column-center">HP THAY THẾ</th>
            <th class="column-center">SỐ TC</th>
            <th class="column-center">SỐ TIẾT LÝ</th>
            <th class="column-center">SỐ TIẾT THI</th>
            <th class="column-center">ĐẠT</th>
            <th class="column-center">ĐỀ CƯƠNG</th>
        </tr></thead>`;
    }

    function renderKnowledgeBlockView() {
        if (!curriculumData) return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(".content-wrapper");

        if (timelineSection.length) timelineSection.css("display", "none");
        if (knowledgeSection.length) knowledgeSection.css("display", "block");

        var tableHeader = buildTableHeader("knowledgeBlock");
        var sectionsHTML = "";

        $.each(curriculumData.blocks || [], function (blockIndex, block) {
            var isExpanded = blockIndex === 0;
            var expandedClass = isExpanded ? "expanded" : "";
            var rotatedClass = isExpanded ? "rotated" : "";
            var activeClass = isExpanded ? "active" : "";

            var mandatoryHTML = "";
            if (block.mandatory && block.mandatory.length > 0) {
                var mandatoryRows = "";
                $.each(block.mandatory, function (idx, c) {
                    mandatoryRows += createTableRow($.extend({}, c, { stt: idx + 1 }), "knowledgeBlock");
                });
                mandatoryHTML = `
                    <div class="subtitle-header">Học phần bắt buộc</div>
                    <div class="table-frame">
                        <table class="table table-sm mandatory-courses-table">
                            ${tableHeader}
                            <tbody>${mandatoryRows}</tbody>
                        </table>
                    </div>`;
            }

            var electiveHTML = "";
            if (block.electiveGroups && block.electiveGroups.length > 0) {
                var groupsHTML = "";
                $.each(block.electiveGroups, function (_, eg) {
                    var electiveRows = "";
                    $.each(eg.courses, function (idx, c) {
                        electiveRows += createTableRow($.extend({}, c, { stt: idx + 1 }), "knowledgeBlock");
                    });
                    groupsHTML += `
                        <div style="width: max-content; min-width: 100%">
                            <div class="block-type">TỰ CHỌN KHỐI KIẾN THỨC ${block.name.toUpperCase()}</div>
                            <table class="table table-sm elective-table">
                                ${tableHeader}
                                <tbody>${electiveRows}</tbody>
                            </table>
                        </div>`;
                });
                electiveHTML = `
                    <div class="subtitle-header">Học phần tự chọn</div>
                    <div class="elective-course">${groupsHTML}</div>`;
            }

            sectionsHTML += `
                <div class="expandable-section">
                    <div class="section-header ${expandedClass}" onclick="KhoiKienThuc.toggleSection(this)">
                        <div class="semester-title">
                            <div class="semester-head-icon"></div>
                            <div>
                                <div class="section-header-text">${safeValue(block.name)}</div>
                                <div class="section-meta">
                                    Bắt buộc: <span class="bold-text">${safeValue(block.mandatoryCredits)} tín chỉ</span>
                                    • Tự chọn: <span class="bold-text">${safeValue(block.electiveCredits)} tín chỉ</span>
                                </div>
                            </div>
                        </div>
                        <div class="section-icon ${rotatedClass}"><i class="fas fa-chevron-up"></i></div>
                    </div>
                    <div class="section-contents ${activeClass}">
                        ${mandatoryHTML}
                        ${electiveHTML}
                    </div>
                </div>`;
        });

        container.innerHTML = sectionsHTML;
    }

    function renderSemesterView() {
        if (!semesterCurriculumData) return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(".content-wrapper");

        if (timelineSection.length) timelineSection.css("display", "block");
        if (knowledgeSection.length) knowledgeSection.css("display", "none");

        var tableHeader = buildTableHeader("semester");
        var semestersHTML = "";

        $.each(semesterCurriculumData.semesters, function (index, semData) {
            var isExpanded = index === 0;
            var expandedClass = isExpanded ? "expanded" : "";
            var rotatedClass = isExpanded ? "rotated" : "";
            var activeClass = isExpanded ? "active" : "";

            var mandatoryHTML = "";
            if (semData.mandatory.length > 0) {
                var mandatoryRows = "";
                $.each(semData.mandatory, function (idx, c) {
                    mandatoryRows += createTableRow($.extend({}, c, { stt: idx + 1 }), "semester");
                });
                mandatoryHTML = `
                    <div class="subtitle-header">Học phần bắt buộc</div>
                    <div class="table-frame">
                        <table class="table table-sm mandatory-courses-table">
                            ${tableHeader}
                            <tbody>${mandatoryRows}</tbody>
                        </table>
                    </div>`;
            }

            var electiveHTML = "";
            if (semData.elective.length > 0) {
                var electiveRows = "";
                $.each(semData.elective, function (idx, c) {
                    electiveRows += createTableRow($.extend({}, c, { stt: idx + 1 }), "semester");
                });
                electiveHTML = `
                    <div class="subtitle-header">Học phần tự chọn</div>
                    <div class="table-frame">
                        <table class="table table-sm">
                            ${tableHeader}
                            <tbody>${electiveRows}</tbody>
                        </table>
                    </div>`;
            }

            semestersHTML += `
                <div class="expandable-section">
                    <div class="section-header ${expandedClass}" onclick="KhoiKienThuc.toggleSection(this)">
                        <div class="semester-title">
                            <div class="semester-head-icon"></div>
                            <div>
                                <div class="section-header-text">Học kỳ ${safeValue(semData.semester)}</div>
                                <div class="section-meta">
                                    Bắt buộc: <span class="bold-text">${safeValue(semData.mandatoryCredits)} tín chỉ</span>
                                    • Tự chọn: <span class="bold-text">${safeValue(semData.electiveCredits)} tín chỉ</span>
                                </div>
                            </div>
                        </div>
                        <div class="section-icon ${rotatedClass}"><i class="fas fa-chevron-up"></i></div>
                    </div>
                    <div class="section-contents ${activeClass}">
                        ${mandatoryHTML}
                        ${electiveHTML}
                    </div>
                </div>`;
        });

        container.innerHTML = semestersHTML;
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
            if (!prerequisites[i].isDat) {
                allCompleted = false;
                uncompletedCourses.push(prerequisites[i].courseName);
            }
        }

        var tooltipFrames = "";
        for (var k = 0; k < prerequisites.length; k++) {
            var prereq = prerequisites[k];
            var statusClass = prereq.isDat ? "completed" : "not-completed";
            var statusText = prereq.isDat ? "Đã học" : "Chưa học";
            var statusIcon = prereq.isDat
                ? '<i class="fa-solid fa-circle-check" style="color: #22C55E"></i>'
                : '<i class="fa-solid fa-circle-xmark" style="color: #EA5455"></i>';
            var requiredText = prereq.isDat
                ? "Đã hoàn thành chương trình"
                : "Môn phải học tiên quyết";

            tooltipFrames += `
      <div class="tooltip-frame">
        <div>${statusIcon}</div>
        <div class="tooltip-body">
          <div class="tooltip-content">
            ${prereq.courseName}
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
                    tooltipElement.style.top = e.clientY - tooltipElement.offsetHeight - 8 + "px";
                    tooltipElement.style.setProperty("--arrow-left", e.clientX - tLeft - 8 + "px");
                }
            });

            $row.on("mouseleave.tooltip", hideTooltip);
        });
    }

    function toggleSection(header) {
        var $header = $(header);
        var icon = $header.find(".section-icon");
        var content = $header.next(".section-contents");

        $(".section-header").not(header).each(function () {
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
                progress: block.totalCredits > 0
                    ? Math.round(((block.completedCredits + (block.currentCredits || 0)) / block.totalCredits) * 100)
                    : 0,
            };

            var styles = ChuongTrinhKhung.getCircleStyles(sem);
            var progressBar = ChuongTrinhKhung.buildProgressBarHTML(
                styles.completedPercent,
                styles.currentPercent,
                styles.totalPercent,
            );
            var displayPercent = Math.round(styles.totalPercent);
            var completedDash = Math.round((styles.completedPercent / 100) * circumference);
            var currentDash = Math.round((styles.currentPercent / 100) * circumference);

            var strokeCompleted = "transparent";
            var strokeCurrent = "transparent";

            if (styles.circleClass === "completed") {
                strokeCompleted = "#28a745";
            } else if (styles.circleClass === "active" || styles.circleClass === "partial-yellow") {
                strokeCurrent = "#ffb800";
            } else if (styles.circleClass === "partial-mixed") {
                strokeCompleted = "#28a745";
                strokeCurrent = "#ffb800";
            } else if (styles.circleClass === "partial-green") {
                strokeCompleted = "#28a745";
            }

            var displayCredits = `${sem.completedCredits + sem.currentCredits}/${sem.totalCredits}`;

            var svgCircles = `<circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>`;
            if (strokeCompleted !== "transparent") {
                svgCircles += `<circle cx="60" cy="60" r="50" fill="none" stroke="${strokeCompleted}" stroke-width="8" stroke-dasharray="${completedDash} ${circumference}" stroke-dashoffset="0"/>`;
            }
            if (strokeCurrent !== "transparent") {
                svgCircles += `<circle cx="60" cy="60" r="50" fill="none" stroke="${strokeCurrent}" stroke-width="8" stroke-dasharray="${currentDash} ${circumference}" stroke-dashoffset="-${completedDash}"/>`;
            }

            blocksHTML += `
                <div class="knowledge-block">
                    <div class="circle-progress">
                        <svg viewBox="0 0 120 120">${svgCircles}</svg>
                        <div class="circle-text ${styles.circleClass}">${safeValue(block.code)}</div>
                    </div>
                    <div class="block-title">${safeValue(block.name)}</div>
                    <div class="block-code">${displayCredits} tín chỉ</div>
                    <div class="timeline-progress">
                        <div class="timeline-progress-bar">
                            ${progressBar.html}
                            <div class="timeline-progress-text ${progressBar.textClass}">${displayPercent}%</div>
                        </div>
                    </div>
                </div>`;
        });

        container.innerHTML = blocksHTML;
    }

    function init(dataUrls) {
        ChuongTrinhKhung._dataUrls = dataUrls;

        return $.when(loadCurriculumData(), loadSemesterCurriculumData()).then(function () {
            switchView(currentView);
            attachTooltipListeners();

            var tabBtns = $(".tab-btn");
            if (tabBtns.length >= 2) {
                tabBtns.eq(0).on("click", function () { switchView("semester"); });
                tabBtns.eq(1).on("click", function () { switchView("knowledgeBlock"); });
            }

            $(".btn-custom[data-filter]").off("click.filter").on("click.filter", function () {
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
    };
})();