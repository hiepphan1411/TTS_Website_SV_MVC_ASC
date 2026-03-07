const surveyInfo = {
    courseName: "Kế toán tài chính",
    courseCode: "DKT021401",
    instructorName: "ThS. Nguyễn Văn A",
    semester: "Đợt 1 HK1 - 2024-2025",
};

const surveyQuestions = [
    {
        ID: 1,
        CauHoi: "Khảo sát môn học",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 1,
        IDCauHoiCha: null,
        IDLoaiCauTL: null,
        IsCauHoiCha: true,
        IsBatBuoc: false,
        STT: 1,
        TreeLevel: 1,
    },

    {
        ID: 2,
        CauHoi: "Chuẩn bị trước khi vào nội dung học phần",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 1,
        IDCauHoiCha: 1,
        IDLoaiCauTL: null,
        IsCauHoiCha: true,
        IsBatBuoc: false,
        STT: 1,
        TreeLevel: 2,
    },
    {
        ID: 3,
        CauHoi:
            "Chuẩn đầu ra của học phần được xây dựng rõ ràng và phù hợp với chương trình đào tạo ngành.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 1,
        IDCauHoiCha: 2,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 3,
    },
    {
        ID: 4,
        CauHoi:
            "Đề cương chi tiết học phần được cung cấp đầy đủ và đúng thời gian.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 1,
        IDCauHoiCha: 2,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 2,
        TreeLevel: 3,
    },
    {
        ID: 5,
        CauHoi: "Nội dung học phần được giới thiệu rõ ràng ngay từ đầu học kỳ.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 1,
        IDCauHoiCha: 2,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 3,
        TreeLevel: 3,
    },
    {
        ID: 6,
        CauHoi: "Đánh giá hoạt động giảng dạy của giảng viên",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 2,
        IDCauHoiCha: null,
        IDLoaiCauTL: null,
        IsCauHoiCha: true,
        IsBatBuoc: false,
        STT: 1,
        TreeLevel: 1,
    },
    {
        ID: 7,
        CauHoi: "Quá trình giảng dạy",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 2,
        IDCauHoiCha: 6,
        IDLoaiCauTL: null,
        IsCauHoiCha: true,
        IsBatBuoc: false,
        STT: 1,
        TreeLevel: 2,
    },
    {
        ID: 8,
        CauHoi: "Giảng viên truyền đạt nội dung rõ ràng, dễ hiểu.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 2,
        IDCauHoiCha: 7,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 3,
    },
    {
        ID: 9,
        CauHoi: "Giảng viên sử dụng phương pháp giảng dạy phù hợp với môn học.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 2,
        IDCauHoiCha: 7,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 2,
        TreeLevel: 3,
    },
    {
        ID: 10,
        CauHoi:
            "Giảng viên khuyến khích sinh viên tham gia trao đổi trong giờ học.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 2,
        IDCauHoiCha: 7,
        IDLoaiCauTL: 1,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 3,
        TreeLevel: 3,
    },
    {
        ID: 11,
        CauHoi: "Test câu hỏi.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 3,
        IDCauHoiCha: 8,
        IDLoaiCauTL: 2,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 4,
    },
    {
        ID: 12,
        CauHoi: "Test câu hỏi.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 4,
        IDCauHoiCha: 11,
        IDLoaiCauTL: 3,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 5,
    },
    {
        ID: 13,
        CauHoi: "Test câu hỏi.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 5,
        IDCauHoiCha: 12,
        IDLoaiCauTL: 4,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 6,
    },
    {
        ID: 14,
        CauHoi: "Test câu hỏi.",
        IDPhieuKS: "KS2025_001",
        IDNhomCauHoi: 3,
        IDCauHoiCha: 8,
        IDLoaiCauTL: 3,
        IsCauHoiCha: false,
        IsBatBuoc: true,
        STT: 1,
        TreeLevel: 4,
    },
];

const responses = {};

function buildTree(questions) {
    const tree = [];
    const map = {};

    questions.forEach((q) => {
        map[q.ID] = { ...q, children: [] };
    });

    questions.forEach((q) => {
        if (q.IDCauHoiCha === null) {
            tree.push(map[q.ID]);
        } else {
            if (map[q.IDCauHoiCha]) {
                map[q.IDCauHoiCha].children.push(map[q.ID]);
            }
        }
    });

    return tree;
}

function renderQuestionInput(question, questionId) {
    const type = question.IDLoaiCauTL;

    switch (type) {
        case 1: // Rating 1-5
            return `
        <div class="sv-detail-rating">
          <span class="sv-detail-rating-label">RẤT KHÔNG HÀI LÒNG</span>
          <div class="sv-detail-rating-buttons">
            <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="1">1</button>
            <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="2">2</button>
            <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="3">3</button>
            <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="4">4</button>
            <button class="sv-detail-rating-btn" data-question="${questionId}" data-value="5">5</button>
          </div>
          <span class="sv-detail-rating-label">RẤT HÀI LÒNG</span>
        </div>
      `;

        case 2: // Text input
            return `
        <div class="sv-detail-text-input">
          <textarea 
            class="sv-detail-textarea" 
            data-question="${questionId}" 
            placeholder="Nhập ý kiến của bạn..."
            rows="3"
            ${question.IsBatBuoc ? "required" : ""}
          ></textarea>
        </div>
      `;

        case 3: // Multiple choice checkboxes
            return `
        <div class="sv-detail-checkbox-group">
          <label class="sv-detail-checkbox-item">
            <input type="checkbox" data-question="${questionId}" value="option1" />
            <span>Tùy chọn 1</span>
          </label>
          <label class="sv-detail-checkbox-item">
            <input type="checkbox" data-question="${questionId}" value="option2" />
            <span>Tùy chọn 2</span>
          </label>
          <label class="sv-detail-checkbox-item">
            <input type="checkbox" data-question="${questionId}" value="option3" />
            <span>Tùy chọn 3</span>
          </label>
        </div>
      `;

        case 4: // True/False
            return `
        <div class="sv-detail-boolean">
          <label class="sv-detail-radio-item">
            <input type="radio" name="${questionId}" data-question="${questionId}" value="true" />
            <span>Đúng</span>
          </label>
          <label class="sv-detail-radio-item">
            <input type="radio" name="${questionId}" data-question="${questionId}" value="false" />
            <span>Sai</span>
          </label>
        </div>
      `;

        default:
            return "";
    }
}

function loadSurveyInfo() {
    document.getElementById("courseName").textContent = surveyInfo.courseName;
    document.getElementById("courseCode").textContent =
        `Mã HP: ${surveyInfo.courseCode}`;
    document.getElementById("instructorName").textContent =
        surveyInfo.instructorName;
    document.getElementById("semester").textContent = surveyInfo.semester;
}

function renderSurveyContent() {
    const container = document.getElementById("surveyContent");
    if (!container) return;

    container.innerHTML = "";

    const tree = buildTree(surveyQuestions);
    const sectionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const romanNumerals = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
    ];

    function renderQuestions(items, parentDiv, parentNumber = "") {
        let currentNumber = 1;

        items.forEach((item) => {
            if (item.IDLoaiCauTL !== null) {
                const questionId = `q${item.ID}`;
                const questionGroup = document.createElement("div");
                questionGroup.className = "sv-detail-question-group";
                questionGroup.setAttribute("data-required", item.IsBatBuoc);
                questionGroup.setAttribute("data-level", item.TreeLevel);

                // Padding 20px for each level > 3
                // const basePadding = 0;
                // const paddingIncrement = 20;
                // const paddingLeft =
                //   item.TreeLevel > 3
                //     ? (item.TreeLevel - 3) * paddingIncrement
                //     : basePadding;
                const paddingLeft = item.TreeLevel > 3 ? 25 : 0;

                if (paddingLeft > 0) {
                    questionGroup.style.paddingLeft = `${paddingLeft}px`;
                }

                // Add border for nested questions (level > 3)
                if (item.TreeLevel > 3) {
                    questionGroup.style.borderLeft = "1px solid #e4e4e4";
                }

                const requiredMark = item.IsBatBuoc
                    ? '<span class="sv-required">*</span>'
                    : "";

                // Build question number based on parent
                const displayNumber = parentNumber
                    ? `${parentNumber}.${currentNumber}`
                    : currentNumber.toString();

                questionGroup.innerHTML = `
          <div class="sv-detail-question-text">
            ${displayNumber}. ${item.CauHoi} ${requiredMark}
          </div>
          ${renderQuestionInput(item, questionId)}
        `;

                parentDiv.appendChild(questionGroup);

                // Render nested questions inside this question group
                if (item.children && item.children.length > 0) {
                    const childrenContainer = document.createElement("div");
                    childrenContainer.className = "sv-detail-children-container";
                    questionGroup.appendChild(childrenContainer);
                    renderQuestions(item.children, childrenContainer, displayNumber);
                }

                currentNumber++;
            } else {
                // No input type -> render children
                if (item.children && item.children.length > 0) {
                    renderQuestions(item.children, parentDiv, parentNumber);
                }
            }
        });
    }

    console.log("Tree: ", tree);

    //TreeLevel 1 (A, B, C...)
    tree.forEach((section, sectionIndex) => {
        if (section.TreeLevel !== 1) return;

        const sectionWrapper = document.createElement("div");
        sectionWrapper.className = "content-wrapper";

        //Section Header
        const sectionHeader = document.createElement("div");
        sectionHeader.className = "sv-detail-section-header";
        sectionHeader.innerHTML = `
      <div class="sv-detail-section-label">${sectionLabels[sectionIndex] || sectionIndex + 1}</div>
      <div class="sv-detail-section-title">${section.CauHoi.toUpperCase()}</div>
    `;
        sectionWrapper.appendChild(sectionHeader);

        const questionNumberRef = { num: 1 };

        //TreeLevel 2 (I, II, III...)
        section.children.forEach((subsection, subsectionIndex) => {
            if (subsection.TreeLevel !== 2) return;

            const subsectionDiv = document.createElement("div");
            subsectionDiv.className = "sv-detail-section";

            //Subsection Title
            const subsectionTitle = document.createElement("div");
            subsectionTitle.className = "sv-detail-subsection-title";
            subsectionTitle.textContent = `${romanNumerals[subsectionIndex] || subsectionIndex + 1}. ${subsection.CauHoi.toUpperCase()}`;
            subsectionDiv.appendChild(subsectionTitle);

            //Render all questions recursively (TreeLevel 3+)
            if (subsection.children && subsection.children.length > 0) {
                renderQuestions(subsection.children, subsectionDiv, "");
            }

            sectionWrapper.appendChild(subsectionDiv);
        });

        container.appendChild(sectionWrapper);
    });
}

function setupRatingButtons() {
    //Rating buttons - 1
    const ratingButtons = document.querySelectorAll(".sv-detail-rating-btn");
    ratingButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const question = this.getAttribute("data-question");
            const value = this.getAttribute("data-value");

            const questionButtons = document.querySelectorAll(
                `.sv-detail-rating-btn[data-question="${question}"]`,
            );
            questionButtons.forEach((btn) => btn.classList.remove("active"));

            this.classList.add("active");
            responses[question] = value;
        });
    });

    //Text inputs - 2
    const textInputs = document.querySelectorAll(".sv-detail-textarea");
    textInputs.forEach((textarea) => {
        textarea.addEventListener("input", function () {
            const question = this.getAttribute("data-question");
            responses[question] = this.value;
        });
    });

    //Checkboxes - 3
    const checkboxes = document.querySelectorAll(
        '.sv-detail-checkbox-group input[type="checkbox"]',
    );
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const question = this.getAttribute("data-question");
            const allCheckboxes = document.querySelectorAll(
                `input[data-question="${question}"]`,
            );
            const selected = Array.from(allCheckboxes)
                .filter((cb) => cb.checked)
                .map((cb) => cb.value);
            responses[question] = selected;
        });
    });

    //Radio buttons - 4
    const radioButtons = document.querySelectorAll(
        '.sv-detail-boolean input[type="radio"]',
    );
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            const question = this.getAttribute("data-question");
            responses[question] = this.value;
        });
    });
}

function setupActionButtons() {
    const submitBtn = document.querySelector(".sv-detail-btn-submit");

    if (submitBtn) {
        submitBtn.addEventListener("click", submitSurvey);
    }
}

function saveDraft() {
    const draftData = {
        surveyInfo: surveyInfo,
        responses: responses,
        savedAt: new Date().toLocaleString("vi-VN"),
    };

    localStorage.setItem("surveyDraft", JSON.stringify(draftData));
    alert("Bản nháp đã được lưu thành công!");
}

function submitSurvey() {
    // Validate all required questions are answered
    const requiredQuestions = document.querySelectorAll(
        '.sv-detail-question-group[data-required="true"]',
    );
    const unanswered = [];

    requiredQuestions.forEach((questionGroup) => {
        const questionId = questionGroup
            .querySelector("[data-question]")
            ?.getAttribute("data-question");
        if (questionId && !responses[questionId]) {
            unanswered.push(questionId);
        }
    });

    if (unanswered.length > 0) {
        alert(
            `Vui lòng trả lời tất cả các câu hỏi bắt buộc (còn ${unanswered.length} câu chưa trả lời)`,
        );
        return;
    }

    const submitData = {
        surveyInfo: surveyInfo,
        responses: responses,
        submittedAt: new Date().toLocaleString("vi-VN"),
    };

    console.log("[Survey] Submitted:", submitData);
    alert("Khảo sát đã được gửi thành công! Cảm ơn bạn đã tham gia.");

    localStorage.removeItem("surveyDraft");

    setTimeout(() => {
        window.location.href = "khao-sat-su-kien.html";
    }, 1000);
}

window.getSurveyResponses = function () {
    return responses;
};

window.clearResponses = function () {
    Object.keys(responses).forEach((key) => delete responses[key]);
    document
        .querySelectorAll(".sv-detail-rating-btn.active")
        .forEach((btn) => btn.classList.remove("active"));
    document
        .querySelectorAll(".sv-detail-textarea")
        .forEach((textarea) => (textarea.value = ""));
    document
        .querySelectorAll('input[type="checkbox"]:checked')
        .forEach((cb) => (cb.checked = false));
    document
        .querySelectorAll('input[type="radio"]:checked')
        .forEach((radio) => (radio.checked = false));
};

document.addEventListener("DOMContentLoaded", () => {
    loadSurveyInfo();
    renderSurveyContent();
    setupRatingButtons();
    setupActionButtons();
});
