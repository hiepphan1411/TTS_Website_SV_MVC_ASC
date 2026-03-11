const formsData = [
    {
        id: 1,
        title: "Đề xuất sửa đổi",
        description:
            "Hình thức gửi ý kiến để đề xuất các thay đổi hoặc cải tiến định kỳ.",
        price: "5.000",
        color: "yellow",
    },
    {
        id: 2,
        title: "Đơn xin cấp bằng điểm",
        description:
            "Sử dụng để gửi yêu cầu cấp bằng điểm hoặc chứng chỉ chính thức.",
        price: "-",
        color: "cyan",
    },
    {
        id: 3,
        title: "Giấy xác nhận vay vốn sinh viên",
        description:
            "Dùng để xin cấp giấy xác nhận cho các khoản vay học tập và sinh viên.",
        price: "-",
        color: "cyan",
    },
    {
        id: 4,
        title: "Đơn xin cấp bằng điểm",
        description:
            "Sử dụng để gửi yêu cầu cấp bằng điểm hoặc chứng chỉ chính thức.",
        price: "1.000",
        color: "green",
    },
    {
        id: 5,
        title: "Đơn xin miễn giảm học phí",
        description:
            "Hình thức xin miễn hoặc giảm học phí dựa trên các tiêu chí nhất định.",
        price: "4.000",
        color: "red",
    },
    {
        id: 6,
        title: "Đơn xin cấp bằng điểm",
        description:
            "Sử dụng để gửi yêu cầu cấp bằng điểm hoặc chứng chỉ chính thức.",
        price: "2.000",
        color: "cyan",
    },
];

const historyData = [
    {
        id: 1,
        name: "Đơn xin cấp bằng điểm",
        quantity: 1,
        price: "-",
        total: "-",
        date: "24/01/2025",
        status: "approved",
        approvedDate: "30/01/2025",
    },
    {
        id: 2,
        name: "Đơn xin miễn giảm học phí",
        quantity: 1,
        price: "-",
        total: "-",
        date: "24/02/2025",
        status: "waiting",
        approvedDate: "-",
    },
    {
        id: 3,
        name: "Đề xuất sửa đổi",
        quantity: 1,
        price: "5.000",
        total: "5.000",
        date: "15/08/2024",
        status: "denied",
        approvedDate: "-",
    },
];

function renderFormsGrid() {
    const container = document.querySelector(".fs-forms-grid");
    container.innerHTML = "";

    formsData.forEach((form) => {
        const card = document.createElement("div");
        const priceDive =
            form.price === "-"
                ? `<div class="fs-form-price fs-free">Miễn phí</div>`
                : `<div class="fs-form-price fs-price">${form.price} VND</div>`;
        card.className = "fs-form-card fs-bg-" + form.color;
        card.innerHTML = `
      <div class="fs-form-title">${form.title}</div>
      <div class="fs-form-description">${form.description}</div>
      <div class="fs-form-actions">
        ${priceDive}
        <button class="fs-btn-use" onclick="useForm(${form.id})">Sử dụng</button>
      </div>
    `;
        container.appendChild(card);
    });
}

function renderHistoryTable() {
    const tbody = document.getElementById("history-table-body");
    tbody.innerHTML = "";

    historyData.forEach((item, index) => {
        const statusTd =
            item.status === "approved"
                ? `<div class="fs-status fs-approved">Đã duyệt</div>`
                : item.status === "waiting"
                    ? `<div class="fs-status fs-waiting text-center">Chờ xử lý</div>`
                    : `<div class="fs-status fs-denied text-center">Từ chối</div>`;

        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td>${item.name}</td>
      <td class="text-center">${item.quantity}</td>
      <td class="fs-price-amount text-end">${item.price}</td>
      <td class="fs-price-amount text-end">${item.total}</td>
      <td class="fs-date text-center">${item.date}</td>
      <td class="text-center"> ${statusTd}</td>
      <td class="fs-date text-center">${item.approvedDate || "-"}</td>
    `;
        tbody.appendChild(row);
    });

    if (historyData.length === 0) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML =
            '<td colspan="6" style="text-align: center; padding: 40px; color: #999;">Không có dữ liệu</td>';
        tbody.appendChild(emptyRow);
    }
}

function setupTabSwitching() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const tabName = this.getAttribute("data-tab");

            document.querySelectorAll(".tab-btn").forEach((b) => {
                b.classList.remove("active");
            });
            document.querySelectorAll(".fs-tab-content").forEach((c) => {
                c.classList.remove("active");
            });

            this.classList.add("active");
            document.getElementById(`${tabName}-tab`).classList.add("active");
        });
    });
}

function useForm(formId) {
    const form = formsData.find((f) => f.id === formId);
    if (form) {
        document.getElementById("modalFormName").value = form.title;
        document.getElementById("registerModal").classList.add("active");
        window.currentFormId = formId;
    }
}

function closeRegisterModal() {
    document.getElementById("registerModal").classList.remove("active");
    document.getElementById("registerFormModal").reset();
    window.currentFormId = null;
}

function submitRegisterForm() {
    const form = document.getElementById("registerFormModal");
    const formName = document.getElementById("modalFormName").value.trim();
    const academicYear = document.getElementById("modalAcademicYear").value;
    const quantity = document.getElementById("modalQuantity").value;
    const requirements = document
        .getElementById("modalRequirements")
        .value.trim();

    if (!formName) {
        alert("Vui lòng nhập tên biểu mẫu để xuất");
        return;
    }

    if (!academicYear) {
        alert("Vui lòng chọn năm học");
        return;
    }

    if (!quantity || quantity < 1) {
        alert("Vui lòng nhập số lượng hợp lệ");
        return;
    }

    const newHistoryItem = {
        id: historyData.length + 1,
        name: formName,
        quantity: parseInt(quantity),
        price: "-",
        total: "-",
        date: new Date().toLocaleDateString("vi-VN"),
        status: "waiting",
        approvedDate: "-",
    };

    historyData.unshift(newHistoryItem);
    renderHistoryTable();

    alert(
        `Đã đăng ký biểu mẫu: ${formName}\nNăm học: ${academicYear}\nSố lượng: ${quantity}`,
    );

    closeRegisterModal();
}

document.addEventListener("DOMContentLoaded", () => {
    renderFormsGrid();
    renderHistoryTable();
    setupTabSwitching();

    const modal = document.getElementById("registerModal");
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === this) {
                closeRegisterModal();
            }
        });
    }
});
