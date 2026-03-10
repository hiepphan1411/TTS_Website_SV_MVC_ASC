let bhytFormData = {
    fullName: "",
    birthDate: "",
    ethnicity: "",
    phoneNumber: "",
    gender: "",
    nationality: "",
    idNumber: "",
    email: "",
    classInfo: "",
    bhytCategory: "",
    socialCode: "",
    householdNumber: "",
    fileUpload: null,
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bhytForm");
    const uploadBox = document.querySelector(".bhyt-upload-box");
    const fileInput = document.getElementById("fileUpload");

    if (uploadBox && fileInput) {
        uploadBox.addEventListener("click", () => fileInput.click());

        uploadBox.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = "#56a2e8";
            uploadBox.style.backgroundColor = "rgba(86, 162, 232, 0.1)";
        });

        uploadBox.addEventListener("dragleave", () => {
            uploadBox.style.borderColor = "#e4e4e4";
            uploadBox.style.backgroundColor = "#f5f5f5";
        });

        uploadBox.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = "#e4e4e4";
            uploadBox.style.backgroundColor = "#f5f5f5";

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitBHYTForm();
        });
    }

    if (form) {
        form.addEventListener("reset", () => {
            bhytFormData = {
                fullName: "",
                birthDate: "",
                ethnicity: "",
                phoneNumber: "",
                gender: "",
                nationality: "",
                idNumber: "",
                email: "",
                classInfo: "",
                bhytCategory: "",
                socialCode: "",
                householdNumber: "",
                fileUpload: null,
            };
        });
    }
});

function handleFileUpload(file) {
    const maxSize = 30 * 1024 * 1024; // 30MB
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (file.size > maxSize) {
        alert("File quá lớn. Vui lòng chọn file nhỏ hơn 30MB.");
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        alert("Định dạng file không hợp lệ. Vui lòng chọn JPG, PNG hoặc PDF.");
        return;
    }

    bhytFormData.fileUpload = file;
    console.log("[v0] File uploaded:", file.name, file.size);

    const uploadBox = document.querySelector(".bhyt-upload-box");
    uploadBox.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <p>File đã tải lên: <strong>${file.name}</strong></p>
    <p class="bhyt-upload-hint">${(file.size / 1024 / 1024).toFixed(2)} MB</p>
  `;
    uploadBox.style.borderColor = "#28a745";
    uploadBox.style.backgroundColor = "rgba(40, 167, 69, 0.05)";
}

function submitBHYTForm() {
    bhytFormData.fullName = document.getElementById("fullName").value;
    bhytFormData.birthDate = document.getElementById("birthDate").value;
    bhytFormData.ethnicity = document.getElementById("ethnicity").value;
    bhytFormData.phoneNumber = document.getElementById("phoneNumber").value;
    bhytFormData.gender = document.querySelector(
        'input[name="gender"]:checked',
    )?.value;
    bhytFormData.nationality = document.getElementById("nationality").value;
    bhytFormData.idNumber = document.getElementById("idNumber").value;
    bhytFormData.email = document.getElementById("email").value;
    bhytFormData.classInfo = document.getElementById("classInfo").value;
    bhytFormData.bhytCategory = document.getElementById("bhytCategory").value;
    bhytFormData.socialCode = document.getElementById("socialCode").value;
    bhytFormData.householdNumber =
        document.getElementById("householdNumber").value;

    if (
        !bhytFormData.fullName ||
        !bhytFormData.birthDate ||
        !bhytFormData.gender ||
        !bhytFormData.phoneNumber ||
        !bhytFormData.email ||
        !bhytFormData.classInfo ||
        !bhytFormData.socialCode
    ) {
        alert("Vui lòng điền tất cả các trường bắt buộc (*)");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bhytFormData.email)) {
        alert("Vui lòng nhập email hợp lệ");
        return;
    }

    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(bhytFormData.phoneNumber)) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số bắt đầu từ 0)");
        return;
    }

    console.log("[v0] BHYT Form Data:", bhytFormData);

    alert(
        `Khai báo BHYT thành công!\n\nTên: ${bhytFormData.fullName}\nEmail: ${bhytFormData.email}\nLớp: ${bhytFormData.classInfo}`,
    );

    document.getElementById("bhytForm").reset();
    resetUploadBox();
}

function resetUploadBox() {
    const uploadBox = document.querySelector(".bhyt-upload-box");
    uploadBox.innerHTML = `
    <i class="fas fa-cloud-upload-alt"></i>
    <p>Kéo thả file hoặc <span class="bhyt-upload-link">nhấn để tải lên</span></p>
    <p class="bhyt-upload-hint">Định dạng JPG, PNG, PDF (Max 30MB)</p>
    <input
      type="file"
      id="fileUpload"
      class="bhyt-file-input"
      accept=".jpg,.jpeg,.png,.pdf"
    />
  `;
    uploadBox.style.borderColor = "#e4e4e4";
    uploadBox.style.backgroundColor = "#f5f5f5";
    bhytFormData.fileUpload = null;
}
