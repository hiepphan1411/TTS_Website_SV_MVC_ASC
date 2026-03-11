let rewardRequestData = [
    {
        id: 1, // STT
        rewardDate: "15/03/2025",
        rewardName: "Sinh viên xuất sắc học kỳ I",
        attachment: {
            name: "minh-chung-hoc-tap.pdf",
            url: "#",
        },
        period: "Đợt 1 - HK1 2024-2025",
        note: "Điểm trung bình học kỳ đạt 3.8/4.0",
        status: 0, // Chờ duyệt
    },
    {
        id: 2,
        rewardDate: "20/02/2025",
        rewardName: "Sinh viên rèn luyện tốt",
        attachment: {
            name: "xac-nhan-ren-luyen.pdf",
            url: "#",
        },
        period: "Đợt 2 - HK1 2024-2025",
        note: "Tham gia đầy đủ hoạt động đoàn thể",
        status: 1, // Đã duyệt
    },
    {
        id: 3,
        rewardDate: "10/01/2025",
        rewardName: "Giải Nhì NCKH cấp trường",
        attachment: {
            name: "de-tai-nckh.docx",
            url: "#",
        },
        period: "Đợt 1 - HK2 2024-2025",
        note: "Đề tài được hội đồng đánh giá cao",
        status: 1,
    },
    {
        id: 4,
        rewardDate: "05/12/2024",
        rewardName: "Cán bộ lớp tiêu biểu",
        attachment: null,
        period: "Đợt 3 - HK1 2024-2025",
        note: "Hoàn thành tốt nhiệm vụ được giao",
        status: 0,
    },
    {
        id: 5,
        rewardDate: "28/11/2024",
        rewardName: "Thành tích xuất sắc đột xuất",
        attachment: {
            name: "bien-ban-thanh-tich.pdf",
            url: "#",
        },
        period: "Đợt đặc biệt - 2024",
        note: "Thành tích nổi bật trong hoạt động cộng đồng",
        status: 2, // Từ chối
    },
];

let editingId = null;
let selectedFiles = [];

function renderTable(data = rewardRequestData) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    data.forEach((item, index) => {
        const statusTd =
            item.status === 1
                ? `<div class="fs-status fs-approved">Đã duyệt</div>`
                : item.status === 0
                    ? `<div class="fs-status fs-waiting text-center">Chờ xử lý</div>`
                    : `<div class="fs-status fs-denied text-center">Từ chối</div>`;

        const attachmentTd = item.attachment
            ? `<a href="${item.attachment.url}" target="_blank">${item.attachment.name}</a>`
            : "-";

        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td class="text-center">
        <input type="checkbox" class="row-checkbox" data-id="${item.id}" />
      </td>
      <td class="text-center">${item.rewardDate}</td>
      <td class="ps-4">${item.rewardName}</td>
      <td class="text-center">${attachmentTd}</td>
      <td class="ps-4">${item.period}</td>
      <td class="ps-4">${item.note}</td>
      <td class="text-center"> ${statusTd}</td>
      <td class="text-center d-flex justify-content-center gap-3">
        <i class="fa-regular fa-clone icon-copy" data-id="${item.id}"></i>
        <i class="fa-solid fa-pencil icon-edit" data-id="${item.id}"></i>
        <i class="fa-solid fa-xmark icon-delete" data-id="${item.id}"></i>
      </td>
    `;
        tbody.appendChild(row);
    });

    if (data.length === 0) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML =
            '<td colspan="9" style="text-align: center; padding: 40px; color: #999;">Không có dữ liệu</td>';
        tbody.appendChild(emptyRow);
    }

    attachTableEventListeners();
}

function attachTableEventListeners() {
    document.querySelectorAll(".icon-edit").forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = parseInt(this.getAttribute("data-id"));
            openModalForEdit(id);
        });
    });

    document.querySelectorAll(".icon-copy").forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = parseInt(this.getAttribute("data-id"));
            copyRow(id);
        });
    });

    document.querySelectorAll(".icon-delete").forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = parseInt(this.getAttribute("data-id"));
            deleteRow(id);
        });
    });
}

function openModal() {
    editingId = null;
    document.getElementById("formModal").reset();
    selectedFiles = [];
    document.getElementById("fileList").innerHTML = "";
    document.getElementById("certificateModal").style.display = "flex";
    document.querySelector(".modal-title").textContent =
        "Tạo đề xuất khen thưởng mới";
}

function openModalForEdit(id) {
    const item = rewardRequestData.find((r) => r.id === id);
    if (!item) return;

    editingId = id;
    document.getElementById("rewardPeriod").value = item.period;
    document.getElementById("name").value = item.rewardName;
    document.getElementById("rewardDate").value = formatDateForInput(
        item.rewardDate,
    );
    document.getElementById("note").value = item.note;

    selectedFiles = item.attachment ? [item.attachment] : [];
    renderFileList();

    document.getElementById("certificateModal").style.display = "flex";
    document.querySelector(".modal-title").textContent =
        "Chỉnh sửa đề xuất khen thưởng";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
    editingId = null;
    selectedFiles = [];
}

function formatDateForInput(dateStr) {
    const parts = dateStr.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function formatDateForDisplay(dateStr) {
    const parts = dateStr.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function submitForm() {
    const period = document.getElementById("rewardPeriod").value;
    const name = document.getElementById("name").value;
    const rewardDate = document.getElementById("rewardDate").value;
    const note = document.getElementById("note").value;

    if (!period || !name || !rewardDate) {
        alert("Vui lòng điền đầy đủ các trường bắt buộc!");
        return;
    }

    const rewardData = {
        id: editingId || Date.now(),
        rewardDate: formatDateForDisplay(rewardDate),
        rewardName: name,
        attachment: selectedFiles.length > 0 ? selectedFiles[0] : null,
        period: period,
        note: note,
        status: 0,
    };

    if (editingId) {
        const index = rewardRequestData.findIndex((r) => r.id === editingId);
        if (index !== -1) {
            rewardRequestData[index] = rewardData;
            alert("Cập nhật đề xuất khen thưởng thành công!");
        }
    } else {
        rewardRequestData.push(rewardData);
        alert("Thêm đề xuất khen thưởng thành công!");
    }

    renderTable();
    closeModal();
}

function copyRow(id) {
    const item = rewardRequestData.find((r) => r.id === id);
    if (!item) return;

    const newItem = {
        ...item,
        id: Date.now(),
        status: 0,
    };

    rewardRequestData.push(newItem);
    renderTable();
    alert("Sao chép đề xuất thành công!");
}

function deleteRow(id) {
    if (confirm("Bạn có chắc chắn muốn xóa đề xuất này?")) {
        rewardRequestData = rewardRequestData.filter((r) => r.id !== id);
        renderTable();
        alert("Xóa đề xuất thành công!");
    }
}

function getCheckedIds() {
    const checkboxes = document.querySelectorAll(".row-checkbox:checked");
    return Array.from(checkboxes).map((cb) =>
        parseInt(cb.getAttribute("data-id")),
    );
}

function proposeSelected() {
    const checkedIds = getCheckedIds();
    if (checkedIds.length === 0) {
        alert("Vui lòng chọn ít nhất một đề xuất!");
        return;
    }

    if (
        confirm(
            `Bạn có chắc chắn muốn đề xuất ${checkedIds.length} khen thưởng đã chọn?`,
        )
    ) {
        alert(`Đã đề xuất thành công ${checkedIds.length} khen thưởng!`);
    }
}

function deleteSelected() {
    const checkedIds = getCheckedIds();
    if (checkedIds.length === 0) {
        alert("Vui lòng chọn ít nhất một đề xuất để xóa!");
        return;
    }

    if (
        confirm(`Bạn có chắc chắn muốn xóa ${checkedIds.length} đề xuất đã chọn?`)
    ) {
        rewardRequestData = rewardRequestData.filter(
            (r) => !checkedIds.includes(r.id),
        );
        renderTable();
        alert(`Đã xóa thành công ${checkedIds.length} đề xuất!`);
    }
}

function renderFileList() {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    selectedFiles.forEach((file, index) => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.innerHTML = `
      <span>${file.name}</span>
      <button type="button" onclick="removeFile(${index})">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
        fileList.appendChild(fileItem);
    });
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    renderFileList();
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable();

    // Check all checkbox
    document
        .getElementById("checkAllRow")
        .addEventListener("change", function () {
            const checkboxes = document.querySelectorAll(".row-checkbox");
            checkboxes.forEach((cb) => {
                cb.checked = this.checked;
            });
        });

    document.querySelector(".btn-add").addEventListener("click", openModal);

    document
        .querySelector(".btn-propose")
        .addEventListener("click", proposeSelected);

    document
        .querySelector(".btn-delete")
        .addEventListener("click", deleteSelected);

    const fileInput = document.getElementById("fileInput");
    const fileUploadArea = document.getElementById("fileUploadArea");

    fileInput.addEventListener("change", function (e) {
        const files = Array.from(e.target.files);
        files.forEach((file) => {
            selectedFiles.push({
                name: file.name,
                url: "#",
            });
        });
        renderFileList();
    });

    fileUploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        fileUploadArea.classList.add("dragover");
    });

    fileUploadArea.addEventListener("dragleave", () => {
        fileUploadArea.classList.remove("dragover");
    });

    fileUploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        fileUploadArea.classList.remove("dragover");
        const files = Array.from(e.dataTransfer.files);
        files.forEach((file) => {
            selectedFiles.push({
                name: file.name,
                url: "#",
            });
        });
        renderFileList();
    });
});
