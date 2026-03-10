const scheduleData = [
    {
        id: "42030194901",
        name: "Kiến trúc và Thiết kế phần mềm",
        credits: 3,
        items: [
            {
                type: "theory",
                startDate: "17/01/2026",
                endDate: "24/01/2026",
                lesson: "10-12",
                groupName: "",
                roomName: "A1.201",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00123",
                    name: "Nguyễn Thị Thanh B",
                },
            },
            {
                type: "practice",
                startDate: "04/02/2026",
                endDate: "07/03/2026",
                lesson: "7-9",
                groupName: "Nhóm 1",
                roomName: "H1.201",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00125",
                    name: "Nguyễn Văn A",
                },
            },
            {
                type: "online",
                startDate: "02/05/2026",
                endDate: "02/05/2026",
                lesson: "10-12",
                groupName: "",
                roomName: "Online (MS Teams)",
                facility: "",
                lecturter: {
                    id: "GV00123",
                    name: "Nguyễn Thị Thanh B",
                },
            },
            {
                type: "exam",
                startDate: "24/05/2026",
                endDate: "24/05/2026",
                lesson: "10-12",
                groupName: "",
                roomName: "H1.201",
                facility: "Cơ sở B",
                lecturters: [
                    { id: "GV00123", name: "Nguyễn Thị Thanh B" },
                    { id: "GV00125", name: "Nguyễn Văn A" },
                ],
            },
        ],
    },

    // ===== MÔN 2 (ĐÃ SỬA) =====
    {
        id: "42030193692",
        name: "Đảm bảo chất lượng và Kiểm thử phần mềm",
        credits: 3,
        items: [
            {
                type: "theory",
                startDate: "05/01/2026",
                endDate: "23/03/2026",
                lesson: "1-3",
                groupName: "",
                roomName: "B2.101",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00130",
                    name: "Trần Thị C",
                },
            },
            {
                type: "practice",
                startDate: "12/01/2026",
                endDate: "02/03/2026",
                lesson: "4-6",
                groupName: "Nhóm 2",
                roomName: "B2.203",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00131",
                    name: "Lê Văn D",
                },
            },
            {
                type: "online",
                startDate: "02/02/2026",
                endDate: "02/02/2026",
                lesson: "7-9",
                groupName: "",
                roomName: "Online (Zoom)",
                facility: "",
                lecturter: {
                    id: "GV00130",
                    name: "Trần Thị C",
                },
            },
            {
                type: "exam",
                startDate: "26/04/2026",
                endDate: "26/04/2026",
                lesson: "7-9",
                groupName: "",
                roomName: "B1.305",
                facility: "Cơ sở B",
                lecturters: [
                    { id: "GV00130", name: "Trần Thị C" },
                    { id: "GV00131", name: "Lê Văn D" },
                ],
            },
        ],
    },

    // ===== MÔN 3 (ĐÃ SỬA) =====
    {
        id: "42030193621",
        name: "Lập trình WWW",
        credits: 4,
        items: [
            {
                type: "theory",
                startDate: "10/01/2026",
                endDate: "28/05/2026",
                lesson: "1-3",
                groupName: "",
                roomName: "C3.201",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00140",
                    name: "Phạm Văn E",
                },
            },
            {
                type: "practice",
                startDate: "18/01/2026",
                endDate: "03/03/2026",
                lesson: "4-6",
                groupName: "Nhóm Web 1",
                roomName: "C3.Lab1",
                facility: "Cơ sở A",
                lecturter: {
                    id: "GV00141",
                    name: "Ngô Thị F",
                },
            },
            {
                type: "online",
                startDate: "03/02/2026",
                endDate: "03/02/2026",
                lesson: "10-12",
                groupName: "",
                roomName: "Online (Google Meet)",
                facility: "",
                lecturter: {
                    id: "GV00140",
                    name: "Phạm Văn E",
                },
            },
            {
                type: "exam",
                startDate: "28/04/2026",
                endDate: "28/04/2026",
                lesson: "10-12",
                groupName: "",
                roomName: "C1.102",
                facility: "Cơ sở B",
                lecturters: [
                    { id: "GV00140", name: "Phạm Văn E" },
                    { id: "GV00141", name: "Ngô Thị F" },
                ],
            },
        ],
    },
];

const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
];

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dayRanges = [
    { start: 1, end: 10 },
    { start: 11, end: 20 },
    { start: 21, end: 31 },
];

// Global tooltip element
let ganttTooltipElement = null;

function createGanttTooltip() {
    if (!ganttTooltipElement) {
        ganttTooltipElement = document.createElement("div");
        ganttTooltipElement.className = "gantt-tooltip";
        document.body.appendChild(ganttTooltipElement);
    }
    return ganttTooltipElement;
}

function getCurrentDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
}

function showGanttTooltip(barElement, tooltipContent) {
    const tooltip = createGanttTooltip();
    tooltip.innerHTML = tooltipContent;
    tooltip.style.display = "block";

    // Get bar and viewport dimensions
    const rect = barElement.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Calculate available space
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    const tooltipHeight = tooltipRect.height || 400;

    let top;
    if (spaceBelow >= tooltipHeight + 16) {
        // Enough space below
        top = rect.bottom + 8;
    } else if (spaceAbove >= tooltipHeight + 16) {
        // Not enough space below, but enough above
        top = rect.top - tooltipHeight - 8;
    } else {
        // Not enough space either side, position at top of viewport
        top = 10;
    }

    let left = rect.left;
    const tooltipWidth = tooltipRect.width || 320;

    if (left + tooltipWidth > viewportWidth - 20) {
        left = viewportWidth - tooltipWidth - 20;
    }

    if (left < 20) {
        left = 20;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
}

function hideGanttTooltip() {
    if (ganttTooltipElement) {
        ganttTooltipElement.style.display = "none";
    }
}

function getMaxMonth(data = scheduleData) {
    let maxMonth = 1;
    data.forEach((course) => {
        course.items.forEach((item) => {
            const endDate = parseDate(item.endDate);
            if (endDate.month > maxMonth) {
                maxMonth = endDate.month;
            }
        });
    });
    return maxMonth;
}

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return { day, month, year };
}

function parseObjectToDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
}

// Determine range
function getDayRange(day) {
    if (day <= 10) return 1;
    if (day <= 20) return 2;
    return 3;
}

// Month and range index 0-2
function getCellPosition(dateStr) {
    const { day, month } = parseDate(dateStr);
    const rangeIdx = getDayRange(day) - 1;
    return { month, rangeIdx };
}

// Calculate how many cells a bar should span
function calculateSpan(startDate, endDate, maxMonth) {
    const start = getCellPosition(startDate);
    const end = getCellPosition(endDate);

    const startCell = (start.month - 1) * 3 + start.rangeIdx;
    const endCell = (end.month - 1) * 3 + end.rangeIdx;

    return {
        startCell,
        span: endCell - startCell + 1,
        startDate: parseDate(startDate),
        endDate: parseDate(endDate),
    };
}

function renderTableHeader(maxMonth) {
    const thead = document.querySelector("#scheduleTable thead");

    // First row - Months + Môn học
    let monthRow = '<tr><th class="course-cell">Môn học</th>';
    for (let month = 1; month <= maxMonth; month++) {
        monthRow += `<th colspan="3" class="month-header">${monthNames[month - 1]}</th>`;
    }
    monthRow += "</tr>";

    // Second row - Day ranges
    let dayRow = '<tr><th class="course-cell"></th>';
    for (let month = 1; month <= maxMonth; month++) {
        const lastDay = monthDays[month - 1];
        dayRow += `<th class="day-range">01-10</th>`;
        dayRow += `<th class="day-range">11-20</th>`;
        dayRow += `<th class="day-range">21-${lastDay}</th>`;
    }
    dayRow += "</tr>";

    thead.innerHTML = monthRow + dayRow;
}

function renderSchedule(data = scheduleData) {
    const scheduleBody = document.getElementById("scheduleBody");
    scheduleBody.innerHTML = "";

    const maxMonth = getMaxMonth(data);
    renderTableHeader(maxMonth);

    data.forEach((course) => {
        const row = document.createElement("tr");
        row.style.position = "relative";

        // Calculate height
        const itemCount = course.items.length;
        const rowHeight = Math.max(60, 8 + itemCount * 28 + 8); // 8px top padding + (items * 16px spacing) + 8px bottom padding
        row.style.height = `${rowHeight}px`;

        let cellHTML = `
      <td class="course-cell">
        <div class="course-code">${course.id}</div>
        <div class="course-name">${course.name}</div>
      </td>
    `;

        const totalCells = maxMonth * 3;
        for (let i = 0; i < totalCells; i++) {
            cellHTML += `<td class="day-cell"></td>`;
        }

        row.innerHTML = cellHTML;
        scheduleBody.appendChild(row);

        course.items.forEach((item, itemIdx) => {
            const spanInfo = calculateSpan(item.startDate, item.endDate, maxMonth);

            const barDiv = document.createElement("div");
            barDiv.className = `gantt-bar ${item.type}`;

            // Calculate position
            const cellWidth = 80;
            const courseCellWidth = 200;
            const leftOffset = courseCellWidth + spanInfo.startCell * cellWidth;
            const barWidth = spanInfo.span * cellWidth - 4; // -4 padding

            barDiv.style.position = "absolute";
            barDiv.style.left = `${leftOffset}px`;
            barDiv.style.width = `${barWidth}px`;
            barDiv.style.top = `${8 + itemIdx * 28}px`;
            barDiv.style.height = "20px";
            barDiv.style.zIndex = "1";

            // Format date display
            const startDateText =
                spanInfo.span === 1 ? item.startDate : `${item.startDate}`;
            const endDateText =
                spanInfo.span === 1 ? item.endDate : `${item.endDate}`;

            // Add tooltip
            const typeLabels = {
                theory: "Lý thuyết",
                practice: "Thực hành",
                online: "Trực tuyến",
                exam: "Thi",
                offline: "Tạm ngưng",
            };

            const lecturerInfo = item.lecturters
                ? item.lecturters.map((l) => `${l.name} (ID: ${l.id})`).join("<br>")
                : item.lecturter
                    ? `${item.lecturter.name} (ID: ${item.lecturter.id})`
                    : "Chưa có thông tin";

            const status =
                parseObjectToDate(item.endDate) < getCurrentDate()
                    ? `<div class="tooltip-footer status-ended ">
            <i class="fas fa-circle"></i>
            <span>Đã kết thúc</span>
          </div>`
                    : `<div class="tooltip-footer status-ongoing">
            <i class="fas fa-circle"></i>
            <span>Đang diễn ra</span>
          </div>`;

            const barTextHTML =
                spanInfo.span === 1
                    ? `<span class="gantt-bar-text">
               <span>${startDateText}</span>  
             </span>`
                    : `<span class="gantt-bar-text">
               <span>${startDateText}</span>  
               <span>${endDateText}</span>  
             </span>`;

            const tooltipContent = `
          <div class="tooltip-header">
            <div class="tooltip-code">MÃ HỌC PHẦN: ${course.id}</div>
            <div class="tooltip-title">${course.name}</div>
          </div>
          <div class="tooltip-body">
            <div class="tooltip-row">
              <div class="tooltip-col">
                <i class="fas fa-layer-group"></i>
                <div>
                  <div class="tooltip-label">Số tín chỉ</div>
                  <div class="tooltip-value">${course.credits}</div>
                </div>
              </div>
              <div class="tooltip-col">
                <i class="fas fa-clock"></i>
                <div>
                  <div class="tooltip-label">Tiết</div>
                  <div class="tooltip-value">${item.lesson}</div>
                </div>
              </div>
            </div>
            <div class="tooltip-row">
              <div class="tooltip-col">
                <i class="fas fa-shapes"></i>
                <div>
                  <div class="tooltip-label">Loại lịch</div>
                  <div class="tooltip-value">${typeLabels[item.type]}</div>
                </div>
              </div>
              <div class="tooltip-col">
                <i class="fas fa-users"></i>
                <div>
                  <div class="tooltip-label">Nhóm</div>
                  <div class="tooltip-value">${item.groupName || "-"}</div>
                </div>
              </div>
            </div>
            <div class="tooltip-row-full">
              <i class="fas fa-door-open"></i>
              <div>
                <div class="tooltip-label">Phòng học</div>
                <div class="tooltip-value">${item.roomName}${item.facility ? ", " + item.facility : ""}</div>
              </div>
            </div>
            <div class="tooltip-row-full">
              <i class="fas fa-calendar"></i>
              <div>
                <div class="tooltip-label">Thời gian</div>
                <div class="tooltip-value">${item.startDate} - ${item.endDate}</div>
              </div>
            </div>
            <div class="tooltip-row-full">
              <i class="fas fa-user-circle"></i>
              <div>
                <div class="tooltip-label">Giảng viên</div>
                <div class="tooltip-value">${lecturerInfo}</div>
              </div>
            </div>
          </div>
          ${status}
      `;

            barDiv.innerHTML = barTextHTML;

            // Add hover event to show tooltip
            barDiv.addEventListener("mouseenter", function (e) {
                showGanttTooltip(barDiv, tooltipContent);
            });

            barDiv.addEventListener("mousemove", function (e) {
                // Update position on mouse move to handle scrolling
                showGanttTooltip(barDiv, tooltipContent);
            });

            barDiv.addEventListener("mouseleave", function (e) {
                hideGanttTooltip();
            });

            row.appendChild(barDiv);
        });
    });
}

function updateScheduleData(newData) {
    scheduleData.length = 0;
    scheduleData.push(...newData);
    renderSchedule();
}

function addCourse(courseData) {
    scheduleData.push(courseData);
    renderSchedule();
}

function filterByType(...types) {
    if (types.length === 0 || types[0] === "all") {
        renderSchedule();
    } else {
        const filtered = scheduleData.map((course) => ({
            ...course,
            items: course.items.filter((item) => types.includes(item.type)),
        }));
        renderSchedule(filtered);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderSchedule();

    // Filter buttons
    document.getElementById("btnAll").addEventListener("click", function () {
        document
            .querySelectorAll(".control-btn")
            .forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        filterByType("all");
    });

    document.getElementById("btnLecture").addEventListener("click", function () {
        document
            .querySelectorAll(".control-btn")
            .forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        filterByType("theory", "online", "practice", "offline");
    });

    document.getElementById("btnExam").addEventListener("click", function () {
        document
            .querySelectorAll(".control-btn")
            .forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        filterByType("exam");
    });

    // Print button
    document.getElementById("btnPrint").addEventListener("click", () => {
        window.print();
    });
});
