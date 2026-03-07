let bhytHistoryData = [
    {
        id: 1,
        period: "Học kỳ 1 2025-2026",
        startDate: "01/09/2025",
        endDate: "21/09/2025",
        status: "Đã duyệt",
        statusClass: "approved",
    },
    {
        id: 2,
        period: "Đợt bổ sung HK 2024-2025",
        startDate: "01/01/2025",
        endDate: "25/01/2025",
        status: "Đã duyệt",
        statusClass: "approved",
    },
    {
        id: 3,
        period: "Học kỳ 1 2024-2025",
        startDate: "15/01/2024",
        endDate: "23/01/2024",
        status: "Đã duyệt",
        statusClass: "approved",
    },
    {
        id: 4,
        period: "Học kỳ 1 2024-2025",
        startDate: "01/09/2024",
        endDate: "10/01/2024",
        status: "Từ chối",
        statusClass: "rejected",
    },
    {
        id: 5,
        period: "Đợt 1 - HK2 2023-2024",
        startDate: "01/03/2024",
        endDate: "15/03/2024",
        status: "Đang chờ",
        statusClass: "pending",
    },
];

function renderHistoryTable(data = bhytHistoryData) {
    const tableBody = document.getElementById("historyTableBody");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="ps-4">${item.period}</td>
      <td class="text-center">${item.startDate}</td>
      <td class="text-center">${item.endDate}</td>
      <td class="text-center">
        <span class="bhyt-history-status-badge ${item.statusClass}">
          ${item.status}
        </span>
      </td>
    `;
        tableBody.appendChild(row);
    });
}

function searchHistory() {
    const period = document.getElementById("periodSelect").value;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    let filtered = bhytHistoryData;

    if (period) {
        filtered = filtered.filter((item) => item.period.includes(period));
    }

    if (fromDate) {
        filtered = filtered.filter((item) => {
            const itemDate = new Date(item.startDate.split("/").reverse().join("-"));
            return itemDate >= new Date(fromDate);
        });
    }

    if (toDate) {
        filtered = filtered.filter((item) => {
            const itemDate = new Date(item.endDate.split("/").reverse().join("-"));
            return itemDate <= new Date(toDate);
        });
    }

    renderHistoryTable(filtered);
}

function refreshHistory() {
    document.getElementById("periodSelect").value = "";
    document.getElementById("fromDate").value = "";
    document.getElementById("toDate").value = "";
    renderHistoryTable();
}

document.addEventListener("DOMContentLoaded", () => {
    renderHistoryTable();
});
