const certificateOptions = {
    "Ngoại ngữ": [
        "IELTS Academic",
        "TOEIC 4 kỹ năng",
        "TOEFL iBT",
        "Cambridge English",
    ],
    "Tin học": ["MOS Excel Expert", "MOS Word Expert", "IC3", "ICDL"],
    "Kỹ năng": [
        "Chứng chỉ Kỹ năng mềm",
        "Chứng chỉ Lãnh đạo",
        "Chứng chỉ Giao tiếp",
    ],
};

const certificateRequestData = [
    {
        id: 1,
        certificateType: "Ngoại ngữ",
        certificateName: "IELTS Academic",
        editable: true,
        issuer: "British Council",
        issueDate: "15/03/2024",
        issuePlace: "TP. Hồ Chí Minh",
        requestDate: "20/03/2024",
        status: 1,
        approver: "Nguyễn Văn B",
        approveDate: "25/03/2024",
        approveNote: "Hồ sơ hợp lệ",
        serialNumber: "IELTS-BC-240315",
        averageScore: 7.5,
        result: "Đạt",
        registerNumber: "VS-2024-001",
        decisionNumber: "QD-CT-0324-01",
        decisionDate: "26/03/2024",
        signer: "PGS.TS Trần Minh C",
        signDate: "26/03/2024",
    },
    {
        id: 2,
        certificateType: "Tin học",
        certificateName: "MOS Excel Expert",
        editable: false,
        issuer: "Microsoft",
        issueDate: "10/01/2024",
        issuePlace: "Hà Nội",
        requestDate: "12/01/2024",
        status: 0,
        approver: "",
        approveDate: "",
        approveNote: "",
        serialNumber: "MOS-EX-012024",
        averageScore: 880,
        result: "Đạt",
        registerNumber: "",
        decisionNumber: "",
        decisionDate: "",
        signer: "",
        signDate: "",
    },
    {
        id: 3,
        certificateType: "Ngoại ngữ",
        certificateName: "TOEIC 4 kỹ năng",
        editable: true,
        issuer: "IIG Việt Nam",
        issueDate: "05/02/2024",
        issuePlace: "Đà Nẵng",
        requestDate: "07/02/2024",
        status: 2,
        approver: "Lê Thị D",
        approveDate: "10/02/2024",
        approveNote: "Thiếu bản sao công chứng",
        serialNumber: "TOEIC-IIG-0224",
        averageScore: 650,
        result: "Không đạt",
        registerNumber: "",
        decisionNumber: "",
        decisionDate: "",
        signer: "",
        signDate: "",
    },
    {
        id: 4,
        certificateType: "Kỹ năng",
        certificateName: "Chứng chỉ Kỹ năng mềm",
        editable: false,
        issuer: "Trung tâm Đào tạo Kỹ năng",
        issueDate: "20/11/2023",
        issuePlace: "TP. Hồ Chí Minh",
        requestDate: "25/11/2023",
        status: 1,
        approver: "Phạm Văn E",
        approveDate: "30/11/2023",
        approveNote: "Đủ điều kiện công nhận",
        serialNumber: "SKILL-2023-1120",
        averageScore: 8.5,
        result: "Đạt",
        registerNumber: "VS-2023-078",
        decisionNumber: "QD-CT-1123-09",
        decisionDate: "01/12/2023",
        signer: "TS. Nguyễn Hoàng F",
        signDate: "01/12/2023",
    },
];

function renderTable(data = certificateRequestData) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const status =
            item.status === 1
                ? `<span class="badge badge-completed">Đã duyệt</span>`
                : item.status === 0
                    ? `<span class="badge badge-progress">Chờ duyệt</span>`
                    : `<span class="badge badge-denied">Từ chối</span>`;

        const editIcon = item.editable
            ? `<i class="fa-solid fa-pen-to-square" style="color: #3a74f0; cursor: pointer;"></i>`
            : "";

        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="ps-4">${item.certificateType}</td>
      <td class="ps-4">${item.certificateName}</td>
      <td class="text-center">${editIcon}</td>
      <td class="text-center">${item.issuer}</td>
      <td class="text-center">${item.issueDate}</td>
      <td class="text-center">${item.issuePlace}</td>
      <td class="text-center">${item.requestDate}</td>
      <td class="text-center">${status}</td>
      <td class="text-center">${item.approver || "-"}</td>
      <td class="text-center">${item.approveDate || "-"}</td>
      <td class="ps-4">${item.approveNote || "-"}</td>
      <td class="text-center">${item.serialNumber}</td>
      <td class="text-center">${item.averageScore}</td>
      <td class="text-center">${item.result}</td>
      <td class="text-center">${item.registerNumber || "-"}</td>
      <td class="text-center">${item.decisionNumber || "-"}</td>
      <td class="text-center">${item.decisionDate || "-"}</td>
      <td class="text-center">${item.signer || "-"}</td>
      <td class="text-center">${item.signDate || "-"}</td>
    `;
        tableBody.appendChild(row);
    });
}

function openCertificateModal() {
    document.getElementById("certificateModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCertificateModal() {
    document.getElementById("certificateModal").classList.remove("active");
    document.body.style.overflow = "auto";
    document.getElementById("certificateForm").reset();
    document.getElementById("fileList").innerHTML = "";
}

// Update certificate dropdown based on type
function updateCertificateOptions() {
    const typeSelect = document.getElementById("certificateType");
    const nameSelect = document.getElementById("certificateName");
    const selectedType = typeSelect.value;

    nameSelect.innerHTML = '<option value="">Chọn chứng chỉ</option>';

    if (selectedType && certificateOptions[selectedType]) {
        certificateOptions[selectedType].forEach((cert) => {
            const option = document.createElement("option");
            option.value = cert;
            option.textContent = cert;
            nameSelect.appendChild(option);
        });
    }
}

let uploadedFiles = [];

function handleFileSelect(event) {
    const files = Array.from(event.target.files);
    uploadedFiles = [...uploadedFiles, ...files];
    displayFiles();
}

function displayFiles() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    uploadedFiles.forEach((file, index) => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.innerHTML = `
      <div class="file-item-info">
        <i class="fa-solid fa-file"></i>
        <span class="file-item-name">${file.name}</span>
      </div>
      <button class="file-item-remove" onclick="removeFile(${index})">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
        fileList.appendChild(fileItem);
    });
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    displayFiles();
}

function submitCertificateForm() {
    const form = document.getElementById("certificateForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const formData = {
        id: certificateRequestData.length + 1,
        certificateType: document.getElementById("certificateType").value,
        certificateName: document.getElementById("certificateName").value,
        editable: true,
        issuer: document.getElementById("issuer").value,
        issueDate: formatDate(document.getElementById("issueDate").value),
        issuePlace: document.getElementById("issuePlace").value,
        requestDate: formatDate(new Date()),
        status: 0, // Chờ duyệt
        approver: "",
        approveDate: "",
        approveNote: "",
        serialNumber: document.getElementById("serialNumber").value,
        averageScore: 0,
        result: document.getElementById("result").value,
        registerNumber: document.getElementById("registerNumber").value,
        decisionNumber: document.getElementById("decisionNumber").value,
        decisionDate: formatDate(document.getElementById("decisionDate").value),
        signer: document.getElementById("signer").value,
        signDate: formatDate(document.getElementById("signDate").value),
    };

    certificateRequestData.unshift(formData);
    renderTable();
    closeCertificateModal();

    alert("Đã tạo đề xuất chứng chỉ thành công!");
}

function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable();

    document
        .getElementById("certificateType")
        .addEventListener("change", updateCertificateOptions);
    document
        .getElementById("fileInput")
        .addEventListener("change", handleFileSelect);

    document.getElementById("certificateModal").addEventListener("click", (e) => {
        if (e.target.id === "certificateModal") {
            closeCertificateModal();
        }
    });
});
