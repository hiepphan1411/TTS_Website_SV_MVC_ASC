let currentRowId = null;

function toggleSemester(id) {
    const content = document.getElementById(id);
    const toggle = document.getElementById("toggle-" + id);

    content.classList.toggle("show");
    toggle.classList.toggle("rotated");
}

function toggleDetail(id) {
    const detailRow = document.getElementById("detail-" + id);
    const allDetails = document.querySelectorAll(".detail-row");

    allDetails.forEach((row) => {
        if (row.id !== "detail-" + id) {
            row.classList.remove("show");
        }
    });

    detailRow.classList.toggle("show");
}

function openRegisterModal(courseCode, courseName, rowId) {
    currentRowId = rowId;
    document.getElementById("modalCourseCode").value = courseCode;
    document.getElementById("modalCourseName").value = courseName;

    const modal = new bootstrap.Modal(document.getElementById("registerModal"));
    modal.show();
}

document
    .getElementById("modalFileInput")
    .addEventListener("change", function (e) {
        const files = e.target.files;
        if (files.length > 0) {
            const uploadArea = document.querySelector(".file-upload-area");
            const fileNames = Array.from(files)
                .map((f) => f.name)
                .join(", ");
            uploadArea.innerHTML = `
                    <i class="bi bi-file-earmark-check" style="color: #28a745;"></i>
                    <div class="file-upload-text" style="color: #28a745;">
                        ${files.length} file(s) đã chọn
                    </div>
                    <div class="file-upload-note">
                        ${fileNames}
                    </div>
                `;
        }
    });

function submitRegistration() {
    const form = document.getElementById("registerForm");
    const reason = document.getElementById("modalReason").value;
    const files = document.getElementById("modalFileInput").files;

    if (!reason.trim()) {
        alert("Vui lòng nhập lý do hoãn thi!");
        return;
    }

    if (files.length === 0) {
        alert("Vui lòng đính kèm minh chứng!");
        return;
    }

    alert("Đăng ký hoãn thi thành công!");

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("registerModal"),
    );
    modal.hide();
    form.reset();

    document.querySelector(".file-upload-area").innerHTML = `
                <i class="bi bi-cloud-upload"></i>
                <div class="file-upload-text">
                    Kéo thả file hoặc <span style="color: #4dabf7; cursor: pointer;">nhấn để tải lên</span>
                </div>
                <div class="file-upload-note">
                    Định dạng JPG, PNG, PDF (Max 10MB)
                </div>
            `;
}

// TODO: Chỉnh sửa
// function editRegistration(id) {
//
// }

function deleteRegistration(id) {
    if (confirm("Bạn có chắc chắn muốn xóa đăng ký này?")) {
        alert("Đã xóa đăng ký hoãn thi");
    }
}

function filterSemester(value) {
    console.log("Filtering by:", value);
}

window.addEventListener("load", function () {
    toggleSemester("sem1");
});