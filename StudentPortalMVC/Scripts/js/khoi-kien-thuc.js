var KhoiKienThuc = (function () {
    "use strict";

    var curriculumData = null;
    var semesterCurriculumData = null;
    var currentView = "semester";

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
        return [].concat(
            curriculumData.professionalEducation.mandatory,
            curriculumData.professionalEducation.elective.block1,
            curriculumData.professionalEducation.elective.block2,
        );
    }

    function isPrerequisiteCompleted(prerequisiteStr) {
        if (!prerequisiteStr || prerequisiteStr === "-") return true;

        var matches = prerequisiteStr.match(/\d{6}/g);
        if (!matches || matches.length === 0) return true;

        var allCourses = getAllCourses();
        for (var i = 0; i < matches.length; i++) {
            var prereqCode = matches[i];
            var found = false;
            for (var j = 0; j < allCourses.length; j++) {
                if (allCourses[j].courseCode === prereqCode) {
                    found = true;
                    if (!allCourses[j].completed) return false;
                    break;
                }
            }
        }
        return true;
    }

    function getPrerequisiteTooltip(prerequisiteStr) {
        if (!prerequisiteStr || prerequisiteStr === "-") return null;

        var matches = prerequisiteStr.match(/\d{6}/g);
        if (!matches || matches.length === 0) return null;

        var allCourses = getAllCourses();
        var prerequisites = [];

        for (var i = 0; i < matches.length; i++) {
            var prereqCode = matches[i];
            for (var j = 0; j < allCourses.length; j++) {
                if (allCourses[j].courseCode === prereqCode) {
                    prerequisites.push({
                        courseName: allCourses[j].courseName,
                        courseCode: prereqCode,
                        completed: allCourses[j].completed,
                    });
                    break;
                }
            }
        }

        return prerequisites.length > 0 ? prerequisites : null;
    }

    function createTableRow(course, viewMode) {
        viewMode = viewMode || "knowledgeBlock";
        var isLocked = !isPrerequisiteCompleted(course.prerequisite);
        var lockedClass = isLocked ? ' class="row-locked"' : "";

        var bgStyle = course.completed
            ? ' style="background-color: #F4FFF5 !important;"'
            : "";

        var tooltipData = getPrerequisiteTooltip(course.prerequisite);
        var dataTooltip = tooltipData
            ? ' data-tooltip="' +
            encodeURIComponent(JSON.stringify(tooltipData)) +
            '"'
            : "";

        var completedIcon = course.completed
            ? '<span class="checkmark">\u2713</span>'
            : '<span class="dash">-</span>';

        var secondColumn =
            viewMode === "semester"
                ? '<td class="column-center">' + course.knowledgeBlock + "</td>"
                : '<td class="column-center">' + course.semester + "</td>";

        return (
            "<tr" +
            lockedClass +
            bgStyle +
            dataTooltip +
            ">" +
            '<td class="column-center">' +
            course.stt +
            "</td>" +
            secondColumn +
            "<td>" +
            course.courseName +
            "</td>" +
            '<td class="column-center">' +
            course.courseCode +
            "</td>" +
            '<td class="column-center">' +
            course.prerequisite +
            "</td>" +
            '<td class="column-center">' +
            course.equivalent +
            "</td>" +
            '<td class="column-center">' +
            course.replacement +
            "</td>" +
            '<td class="column-center">' +
            course.credits +
            "</td>" +
            '<td class="column-center">' +
            course.theoryHours +
            "</td>" +
            '<td class="column-center">' +
            course.practiceHours +
            "</td>" +
            '<td class="column-center">' +
            completedIcon +
            "</td>" +
            '<td class="column-center">' +
            '  <button class="btn btn-sm btn-outline-primary"' +
            (isLocked ? " disabled" : "") +
            '><i class="fa-solid fa-file-invoice"></i></button>' +
            "</td>" +
            "</tr>"
        );
    }

    function buildTableHeader(viewMode) {
        viewMode = viewMode || "knowledgeBlock";
        var secondColTitle =
            viewMode === "semester"
                ? "KH\u1eccI KI\u1ebeN TH\u1ee8C"
                : "H\u1eccC K\u1ef2";
        return (
            "<thead><tr>" +
            '<th class="column-center">STT</th>' +
            '<th class="column-center">' +
            secondColTitle +
            "</th>" +
            "<th>T\u00caN M\u00d4N H\u1eccC/H\u1eccC PH\u1ea6N</th>" +
            '<th class="column-center">M\u00c3 HP</th>' +
            '<th class="column-center">H\u1eccC PH\u1ea6N</th>' +
            '<th class="column-center">HP T\u01af\u01a0NG \u0110\u01af\u01a0NG</th>' +
            '<th class="column-center">HP THAY TH\u1ebe</th>' +
            '<th class="column-center">S\u1ed0 TC</th>' +
            '<th class="column-center">S\u1ed0 TI\u1ebeT L\u00dd</th>' +
            '<th class="column-center">S\u1ed0 TI\u1ebeT THI</th>' +
            '<th class="column-center">\u0110\u1ea0T</th>' +
            '<th class="column-center">\u0110\u1ec0 C\u01af\u01a0NG</th>' +
            "</tr></thead>"
        );
    }

    function renderKnowledgeBlockView() {
        if (!curriculumData) return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(
            ".content-wrapper",
        );

        if (timelineSection.length) timelineSection.css("display", "none");
        if (knowledgeSection.length) knowledgeSection.css("display", "block");

        var data = curriculumData.professionalEducation;
        var tableHeader = buildTableHeader("knowledgeBlock");

        function buildElectiveBlock(title, courses) {
            var rows = "";
            for (var i = 0; i < courses.length; i++) {
                rows += createTableRow(courses[i], "knowledgeBlock");
            }
            return (
                '<div style="width: max-content; min-width: 100%">' +
                '<div class="block-type">' +
                title +
                "</div>" +
                '<table class="table table-sm elective-table">' +
                tableHeader +
                "<tbody>" +
                rows +
                "</tbody></table>" +
                "</div>"
            );
        }

        function buildSection(
            title,
            mandatoryCredits,
            electiveCredits,
            isExpanded,
            electiveBlocks,
        ) {
            var expandedClass = isExpanded ? "expanded" : "";
            var rotatedClass = isExpanded ? "rotated" : "";
            var activeClass = isExpanded ? "active" : "";

            var mandatoryRows = "";
            for (var i = 0; i < data.mandatory.length; i++) {
                mandatoryRows += createTableRow(data.mandatory[i], "knowledgeBlock");
            }

            return (
                '<div class="expandable-section">' +
                '<div class="section-header ' +
                expandedClass +
                '" onclick="KhoiKienThuc.toggleSection(this)">' +
                '  <div class="semester-title">' +
                '    <div class="semester-head-icon"></div>' +
                "    <div>" +
                '      <div class="section-header-text">' +
                title +
                "</div>" +
                '      <div class="section-meta">' +
                '        B\u1eaft bu\u1ed9c: <span class="bold-text">' +
                mandatoryCredits +
                " t\u00edn ch\u1ec9</span>" +
                '        \u2022 T\u1ef1 ch\u1ecdn: <span class="bold-text">' +
                electiveCredits +
                " t\u00edn ch\u1ec9</span>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                '  <div class="section-icon ' +
                rotatedClass +
                '"><i class="fas fa-chevron-up"></i></div>' +
                "</div>" +
                '<div class="section-contents ' +
                activeClass +
                '">' +
                '  <div class="subtitle-header">H\u1ecdc ph\u1ea7n b\u1eaft bu\u1ed9c</div>' + +
                '  <div class="table-frame">' +
                '    <table class="table table-sm mandatory-courses-table">' +
                tableHeader +
                "<tbody>" +
                mandatoryRows +
                "</tbody></table>" +
                "  </div>" +
                '  <div class="subtitle-header">H\u1ecdc ph\u1ea7n t\u1ef1 ch\u1ecdn</div>' +
                '  <div class="elective-course">' +
                electiveBlocks +
                "</div>" +
                "</div>" +
                "</div>"
            );
        }

        container.innerHTML =
            buildSection(
                "Kh\u1ed1i ki\u1ebfn th\u1ee9c gi\u00e1o d\u1ee5c \u0111\u1ea1i c\u01b0\u01a1ng",
                12,
                6,
                false,
                buildElectiveBlock(
                    "T\u1ef0 CH\u1eccN KH\u1ed0I KI\u1ebeN TH\u1ee8C GI\u00c1O D\u1ee4C \u0110\u1ea0I C\u01af\u01a0NG 1",
                    data.elective.block1,
                ) +
                buildElectiveBlock(
                    "T\u1ef0 CH\u1eccN KH\u1ed0I KI\u1ebeN TH\u1ee8C GI\u00c1O D\u1ee4C \u0110\u1ea0I C\u01af\u01a0NG 2",
                    data.elective.block2,
                ),
            ) +
            buildSection(
                "Kh\u1ed1i ki\u1ebfn th\u1ee9c gi\u00e1o d\u1ee5c chuy\u00ean nghi\u1ec7p",
                6,
                6,
                true,
                buildElectiveBlock(
                    "T\u1ef0 CH\u1eccN KH\u1ed0I KI\u1ebeN TH\u1ee8C GI\u00c1O D\u1ee4C CHUY\u00caN NGHI\u1ec6P 1",
                    data.elective.block1,
                ) +
                buildElectiveBlock(
                    "T\u1ef0 CH\u1eccN KH\u1ed0I KI\u1ebeN TH\u1ee8C GI\u00c1O D\u1ee4C CHUY\u00caN NGHI\u1ec6P 2",
                    data.elective.block2,
                ),
            ) +
            buildSection(
                "Kh\u1ed1i ki\u1ebfn th\u1ee9c ch\u01b0a x\u00e1c \u0111\u1ecbnh",
                6,
                6,
                false,
                buildElectiveBlock(
                    "T\u1ef0 CH\u1eccN KH\u1ed0I KI\u1ebeN TH\u1ee8C GI\u00c1O D\u1ee4C \u0110\u1ea0I C\u01af\u01a0NG",
                    data.elective.block1,
                ),
            );
    }

    function renderSemesterView() {
        if (!semesterCurriculumData) return;

        var container = document.getElementById("expandableSections");
        var timelineSection = $(".timeline-section").closest(".content-wrapper");
        var knowledgeSection = $(".knowledge-block-overview").closest(
            ".content-wrapper",
        );

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
                    mandatoryRows += createTableRow(
                        $.extend({}, c, { stt: idx + 1 }),
                        "semester",
                    );
                });
                mandatoryHTML =
                    '<div class="subtitle-header">H\u1ecdc ph\u1ea7n b\u1eaft bu\u1ed9c</div>' +
                    '<div class="table-frame"><table class="table table-sm mandatory-courses-table">' +
                    tableHeader +
                    "<tbody>" +
                    mandatoryRows +
                    "</tbody></table></div>";
            }

            var electiveHTML = "";
            if (semData.elective.length > 0) {
                var electiveRows = "";
                $.each(semData.elective, function (idx, c) {
                    electiveRows += createTableRow(
                        $.extend({}, c, { stt: idx + 1 }),
                        "semester",
                    );
                });
                electiveHTML =
                    '<div class="subtitle-header">H\u1ecdc ph\u1ea7n t\u1ef1 ch\u1ecdn</div>' +
                    '<div class="table-frame"><table class="table table-sm">' +
                    tableHeader +
                    "<tbody>" +
                    electiveRows +
                    "</tbody></table></div>";
            }

            semestersHTML +=
                '<div class="expandable-section">' +
                '<div class="section-header ' +
                expandedClass +
                '" onclick="KhoiKienThuc.toggleSection(this)">' +
                '  <div class="semester-title">' +
                '    <div class="semester-head-icon"></div>' +
                "    <div>" +
                '      <div class="section-header-text">H\u1ecdc k\u1ef3 ' +
                semData.semester +
                "</div>" +
                '      <div class="section-meta">' +
                '        B\u1eaft bu\u1ed9c: <span class="bold-text">' +
                semData.mandatoryCredits +
                " t\u00edn ch\u1ec9</span>" +
                '        \u2022 T\u1ef1 ch\u1ecdn: <span class="bold-text">' +
                semData.electiveCredits +
                " t\u00edn ch\u1ec9</span>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                '  <div class="section-icon ' +
                rotatedClass +
                '"><i class="fas fa-chevron-up"></i></div>' +
                "</div>" +
                '<div class="section-contents ' +
                activeClass +
                '">' +
                mandatoryHTML +
                electiveHTML +
                "</div></div>";
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

        setTimeout(attachTooltipListeners, 100);
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
            if (!prerequisites[i].completed) {
                allCompleted = false;
                uncompletedCourses.push(prerequisites[i].courseName);
            }
        }

        var tooltipFrames = "";
        for (var k = 0; k < prerequisites.length; k++) {
            var prereq = prerequisites[k];
            var statusClass = prereq.completed ? "completed" : "not-completed";
            var statusText = prereq.completed
                ? "\u0110\u00e3 h\u1ecdc"
                : "Ch\u01b0a h\u1ecdc";
            var statusIcon = prereq.completed
                ? '<i class="fa-solid fa-circle-check" style="color: #22C55E"></i>'
                : '<i class="fa-solid fa-circle-xmark" style="color: #EA5455"></i>';
            var requiredText = prereq.completed
                ? "\u0110\u00e3 ho\u00e0n th\u00e0nh ch\u01b0\u01a1ng tr\u00ecnh"
                : "M\u00f4n ph\u1ea3i h\u1ecdc ti\u00ean quy\u1ebft";

            tooltipFrames +=
                '<div class="tooltip-frame">' +
                "<div>" +
                statusIcon +
                "</div>" +
                '<div class="tooltip-body">' +
                '  <div class="tooltip-content">' +
                prereq.courseName +
                "</div>" +
                '  <div class="tooltip-require">Y\u00eau c\u1ea7u: <i>' +
                requiredText +
                "</i></div>" +
                "</div>" +
                '<div class="tooltip-status ' +
                statusClass +
                '">' +
                statusText +
                "</div>" +
                "</div>";
        }

        var remindText = allCompleted
            ? "M\u00f4n h\u1ecdc \u0111\u00e3 \u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n \u0111\u0103ng k\u00fd."
            : '<span class="remind-text">B\u1ea1n <span class="text-danger">CH\u01af\u0041 TH\u1ec2 \u0110\u0102NG K\u00dd</span> m\u00f4n n\u00e0y do ch\u01b0a ho\u00e0n th\u00e0nh h\u1ecdc ph\u1ea7n ti\u00ean quy\u1ebft: <b>' +
            uncompletedCourses.join(", ") +
            "</b>.</span>";

        tooltip.innerHTML =
            '<div class="tooltip-title">M\u00d4N H\u1eccC TI\u00caN QUY\u1ebeT' +
            (prerequisites.length > 1
                ? " (" + prerequisites.length + " m\u00f4n)"
                : "") +
            "</div>" +
            '<div style="display: flex; flex-direction: column; gap: 10px;">' +
            tooltipFrames +
            "</div>" +
            '<div class="tooltip-remind">' +
            remindText +
            "</div>";

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
                '<div class="knowledge-block">' +
                '  <div class="circle-progress">' +
                '    <svg viewBox="0 0 120 120">' +
                svgCircles +
                "</svg>" +
                '    <div class="circle-text ' +
                styles.circleClass +
                '">' +
                block.code +
                "</div>" +
                "  </div>" +
                '  <div class="block-title">' +
                block.name +
                "</div>" +
                '  <div class="block-code">' +
                displayCredits +
                " t\u00edn ch\u1ec9</div>" +
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

    function init(dataUrls) {
        ChuongTrinhKhung._dataUrls = dataUrls;

        return $.when(loadCurriculumData(), loadSemesterCurriculumData()).then(
            function () {
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
            },
        );
    }

    // Public API
    return {
        init: init,
        toggleSection: toggleSection,
        renderKnowledgeBlocksOverview: renderKnowledgeBlocksOverview,
        switchView: switchView,
    };
})();
