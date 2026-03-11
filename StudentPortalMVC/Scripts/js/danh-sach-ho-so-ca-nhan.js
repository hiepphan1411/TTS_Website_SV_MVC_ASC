let sampleData = [
    {
        id: 1,
        code: "HB0001",
        profileName: "Học bạ THPT bản sao công chứng",
        updateDate: "21/09/2025",
        obligated: true,
        submitted: false,
    },
    {
        id: 2,
        code: "HK0002",
        profileName: "Hộ khẩu bản sao công chứng",
        updateDate: "18/09/2025",
        obligated: true,
        submitted: true,
    },
    {
        id: 3,
        code: "CCCD0003",
        profileName: "Căn cước công dân bản sao công chứng",
        updateDate: "20/09/2025",
        obligated: true,
        submitted: true,
    },
    {
        id: 4,
        code: "KS0004",
        profileName: "Giấy khai sinh bản sao công chứng",
        updateDate: "15/09/2025",
        obligated: false,
        submitted: false,
    },
    {
        id: 5,
        code: "AT0005",
        profileName: "Ảnh thẻ 3x4",
        updateDate: "22/09/2025",
        obligated: false,
        submitted: true,
    },
    {
        id: 6,
        code: "TN0006",
        profileName: "Giấy chứng nhận tốt nghiệp tạm thời",
        updateDate: "19/09/2025",
        obligated: true,
        submitted: false,
    },
];

function renderTable(data = sampleData) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const obligated = item.obligated
            ? `<i class="fa-solid fa-circle-check text-warning"></i>`
            : "";
        const submitted = item.submitted
            ? `<i class="fa-solid fa-circle-check text-success"></i>`
            : "";
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="text-center">${item.code}</td>
      <td class="ps-4">${item.profileName}</td>
      <td class="text-center">${item.updateDate}</td>
      <td class="text-center">${obligated}</td>
      <td class="text-center">${submitted}</td>
    `;
        tableBody.appendChild(row);
    });
}

function search() {
    const statusSelect = document.getElementById("periodSelect").value;
    const keyword = document
        .getElementById("keywordInput")
        .value.toLowerCase()
        .trim();

    let filtered = sampleData;

    if (statusSelect === "dot2-hk1") {
        filtered = filtered.filter((item) => item.submitted === true);
    } else if (statusSelect === "dot1-hk2") {
        filtered = filtered.filter((item) => item.submitted === false);
    }

    if (keyword) {
        filtered = filtered.filter(
            (item) =>
                item.profileName.toLowerCase().includes(keyword) ||
                item.code.toLowerCase().includes(keyword),
        );
    }

    renderTable(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable();

    document.getElementById("periodSelect").addEventListener("change", search);
    document.getElementById("keywordInput").addEventListener("input", search);
});
