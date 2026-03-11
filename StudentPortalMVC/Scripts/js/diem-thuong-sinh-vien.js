const rewardData = [
    {
        id: 1,
        rewardInfo: "Tham gia hoạt động tình nguyện cấp khoa",
        rewardPoint: 2,
        courseCode: "CT101",
        courseName: "Nhập môn Công nghệ thông tin",
        finalScore: 7.5,
        afterBonusScore: 9.5,
        status: 1,
        period: "Đợt 1 - HK1 2024-2025",
    },
    {
        id: 2,
        rewardInfo: "Đạt giải Nhì Olympic Toán học",
        rewardPoint: 3,
        courseCode: "MA201",
        courseName: "Toán cao cấp 2",
        finalScore: 6.8,
        afterBonusScore: 9.8,
        status: 1,
        period: "Đợt 2 - HK1 2024-2025",
    },
    {
        id: 3,
        rewardInfo: "Tham gia câu lạc bộ học thuật",
        rewardPoint: 1,
        courseCode: "KT102",
        courseName: "Kinh tế vi mô",
        finalScore: 8.0,
        afterBonusScore: 9.0,
        status: 0,
        period: "Đợt 1 - HK2 2024-2025",
    },
    {
        id: 4,
        rewardInfo: "Tham gia hội thảo chuyên ngành",
        rewardPoint: 1.5,
        courseCode: "QT301",
        courseName: "Quản trị chiến lược",
        finalScore: 5.9,
        afterBonusScore: 7.4,
        status: 2,
        period: "Đợt 1 - HK1 2024-2025",
    },
    {
        id: 5,
        rewardInfo: "Đạt giải Ba nghiên cứu khoa học sinh viên",
        rewardPoint: 2.5,
        courseCode: "CS404",
        courseName: "Hệ thống thông tin quản lý",
        finalScore: 7.0,
        afterBonusScore: 9.5,
        status: 0,
        period: "Đợt 2 - HK1 2024-2025",
    },
];

function calculateStats(data) {
    const totalPoints = data
        .filter((item) => item.status === 1)
        .reduce((sum, item) => sum + item.rewardPoint, 0);

    const appliedSubjects = data.filter((item) => item.status === 1).length;

    const approvedItems = data.filter((item) => item.status === 1);
    const gpaImprovement =
        approvedItems.length > 0
            ? approvedItems.reduce(
                (sum, item) => sum + (item.afterBonusScore - item.finalScore),
                0,
            ) / approvedItems.length
            : 0;

    const inProgressRequests = data.filter((item) => item.status === 0).length;

    return {
        totalPoints: totalPoints.toFixed(1),
        appliedSubjects,
        gpaImprovement: gpaImprovement.toFixed(2),
        inProgressRequests,
    };
}

function updateStats(data) {
    const stats = calculateStats(data);

    document.getElementById("totalPoints").textContent =
        `${stats.totalPoints} điểm`;
    document.getElementById("applySubjects").textContent =
        `${stats.appliedSubjects} môn`;
    document.getElementById("improvedPoint").textContent =
        `+${stats.gpaImprovement}`;
    document.getElementById("inprogressReq").textContent =
        `${stats.inProgressRequests} yêu cầu`;
}

function renderTable(data = rewardData) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const status =
            item.status === 1
                ? `<span class="badge badge-completed">Đã duyệt</span>`
                : item.status === 0
                    ? `<span class="badge badge-progress">Chưa duyệt</span>`
                    : `<span class="badge badge-denied">Từ chối</span>`;
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="ps-4">${item.rewardInfo}</td>
      <td class="text-center">+${item.rewardPoint}</td>
      <td class="text-center">${item.courseCode}</td>
      <td class="ps-4">${item.courseName}</td>
      <td class="text-center">${item.finalScore}</td>
      <td class="text-center">${item.afterBonusScore}</td>
      <td class="text-center">${status}</td>
    `;
        tableBody.appendChild(row);
    });

    updateStats(data);
}

function search() {
    const periodSelect = document.getElementById("periodSelect").value;
    const keyword = document
        .getElementById("keywordInput")
        .value.toLowerCase()
        .trim();

    let filtered = rewardData;

    if (periodSelect === "dot1-hk1") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK1"));
    } else if (periodSelect === "dot2-hk1") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 2 - HK1"));
    } else if (periodSelect === "dot1-hk2") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK2"));
    }

    if (keyword) {
        filtered = filtered.filter(
            (item) =>
                item.rewardInfo.toLowerCase().includes(keyword) ||
                item.courseCode.toLowerCase().includes(keyword) ||
                item.courseName.toLowerCase().includes(keyword),
        );
    }

    renderTable(filtered);
}

function createTooltip() {
    const existingTooltip = document.getElementById("statCardTooltip");
    if (existingTooltip) {
        existingTooltip.remove();
    }

    const tooltip = document.createElement("div");
    tooltip.id = "statCardTooltip";
    tooltip.className = "stat-card-tooltip";
    document.body.appendChild(tooltip);
    return tooltip;
}

function showTooltip(filterType, event) {
    const periodSelect = document.getElementById("periodSelect").value;
    let filtered = rewardData;

    if (periodSelect === "dot1-hk1") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK1"));
    } else if (periodSelect === "dot2-hk1") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 2 - HK1"));
    } else if (periodSelect === "dot1-hk2") {
        filtered = filtered.filter((item) => item.period.includes("Đợt 1 - HK2"));
    }

    switch (filterType) {
        case "total":
        case "applied":
        case "improved":
            filtered = filtered.filter((item) => item.status === 1);
            break;
        case "progress":
            filtered = filtered.filter((item) => item.status === 0);
            break;
    }

    const tooltip = createTooltip();
    const cardTitles = {
        total: "Các môn có điểm thưởng",
        applied: "Các môn đã áp dụng",
        improved: "Các môn cải thiện GPA",
        progress: "Các môn đang xử lý",
    };

    let content = `
    <div class="tooltip-header">
      <h4>${cardTitles[filterType]}</h4>
      <button class="tooltip-close" onclick="closeTooltip()">&times;</button>
    </div>
    <div class="tooltip-body">
  `;

    if (filtered.length === 0) {
        content += `<p class="no-data">Không có dữ liệu</p>`;
    } else {
        filtered.forEach((item, index) => {
            const statusText =
                item.status === 1
                    ? "Đã duyệt"
                    : item.status === 0
                        ? "Chưa duyệt"
                        : "Từ chối";
            const statusClass =
                item.status === 1
                    ? "badge-completed"
                    : item.status === 0
                        ? "badge-progress"
                        : "badge-denied";

            content += `
        <div class="tooltip-item">
          <div class="tooltip-item-header">
            <span class="item-number">${index + 1}</span>
            <span class="badge ${statusClass}">${statusText}</span>
          </div>
          <div class="tooltip-item-content">
            <div class="item-row">
              <strong>${item.courseCode}</strong>${item.courseName}
            </div>
            <div class="item-row">
              <span class="text-muted">${item.rewardInfo}</span>
            </div>
            <div class="item-row">
              <span>Điểm thưởng: <strong class="text-primary">+${item.rewardPoint}</strong></span>
              <span>Điểm: ${item.finalScore} → <strong class="text-success">${item.afterBonusScore}</strong></span>
            </div>
          </div>
        </div>
      `;
        });
    }

    content += `</div>`;
    tooltip.innerHTML = content;
    tooltip.style.display = "block";

    // Position tooltip
    const card = event.currentTarget;
    const cardRect = card.getBoundingClientRect();

    // Let tooltip calculate its natural width first
    tooltip.style.visibility = "hidden";
    tooltip.style.display = "block";

    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let left = cardRect.left + cardRect.width / 2 - tooltipWidth / 2;
    let top = cardRect.bottom + 10;

    if (left + tooltipWidth > window.innerWidth - 20) {
        left = window.innerWidth - tooltipWidth - 20;
    }
    if (left < 20) {
        left = 20;
    }

    if (top + tooltipHeight > window.innerHeight - 20) {
        top = cardRect.top - tooltipHeight - 10;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.visibility = "visible";
}

function closeTooltip() {
    const tooltip = document.getElementById("statCardTooltip");
    if (tooltip) {
        tooltip.style.display = "none";
        tooltip.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable();

    document.getElementById("periodSelect").addEventListener("change", search);
    document.getElementById("keywordInput").addEventListener("input", search);

    const statCards = document.querySelectorAll(".stat-card");
    statCards.forEach((card, index) => {
        const filterTypes = ["total", "applied", "improved", "progress"];
        card.setAttribute("data-filter", filterTypes[index]);
        card.style.cursor = "pointer";
        card.style.transition = "all 0.3s ease";

        card.addEventListener("click", (event) => {
            showTooltip(filterTypes[index], event);
        });
    });

    // Close tooltip when clicking outside
    document.addEventListener("click", (event) => {
        const tooltip = document.getElementById("statCardTooltip");
        if (
            tooltip &&
            !tooltip.contains(event.target) &&
            !event.target.closest(".stat-card")
        ) {
            closeTooltip();
        }
    });
});
