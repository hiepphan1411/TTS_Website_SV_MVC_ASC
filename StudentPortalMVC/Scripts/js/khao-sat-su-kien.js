const surveyData = {
  pending: [
    {
      id: 1,
      title: "Khảo sát môn học và giảng viên dạy Đợt 1 HK1 năm 2023-2024",
      code: "DKTD2409",
      trainer: "Kinh tế chính trị",
      handler: "TS. Nguyễn Thanh B",
      status: "draft",
    },
    {
      id: 2,
      title: "Khảo sát môn học và giảng viên dạy Đợt 1 HK1 năm 2023-2024",
      code: "DKTD2508",
      trainer: "Triết học Mác - Lênin",
      handler: "ThS. Nguyễn Văn A",
      status: "draft",
    },
    {
      id: 3,
      title: "Khảo sát môn học và giảng viên dạy Đợt 1 HK1 năm 2023-2024",
      code: "DKTD2108",
      trainer: "Kế hoạch tài chính",
      handler: "TS. Trần Thị C",
      status: "draft",
    },
  ],
  completed: [
    {
      id: 4,
      title: "Khảo sát sự kiện: Hội thảo khoa học 2024",
      code: "DKTD2807",
      trainer: "Phát triển sự kiện",
      handler: "ThS. Huỳnh Văn B",
      status: "completed",
      completedDate: "15/01/2025",
    },
  ],
};

function setupTabSwitching() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      document.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.remove("active");
      });
      document.querySelectorAll(".tab-content").forEach((c) => {
        c.classList.remove("active");
      });

      this.classList.add("active");
      document.getElementById(`${tabName}-tab`).classList.add("active");
    });
  });
}

function renderSurveyList() {
  renderPendingSurveys();
  renderCompletedSurveys();
}

function renderPendingSurveys() {
  const container = document.getElementById("pendingSurveysList");
  const emptyState = document.getElementById("pendingEmpty");

  if (surveyData.pending.length === 0) {
    container.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  container.style.display = "";
  emptyState.style.display = "none";
  container.innerHTML = "";

  surveyData.pending.forEach((survey, index) => {
    const item = createSurveyItem(survey, index + 1, "pending");
    container.appendChild(item);
  });
}

function renderCompletedSurveys() {
  const container = document.getElementById("completedSurveysList");
  const emptyState = document.getElementById("completedEmpty");

  if (surveyData.completed.length === 0) {
    container.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  container.style.display = "";
  emptyState.style.display = "none";
  container.innerHTML = "";

  surveyData.completed.forEach((survey, index) => {
    const item = createSurveyItem(survey, index + 1, "completed");
    container.appendChild(item);
  });
}

function createSurveyItem(survey, index, type) {
  const item = document.createElement("div");
  item.className = "sv-survey-item";

  const statusClass = survey.status === "draft" ? "draft" : "completed";
  const statusText = survey.status === "draft" ? "Bắt buộc" : "Hoàn thành";

  item.innerHTML = `
    <div class="sv-survey-content">
        <div class="sv-survey-header">
            <div>
                <p class="sv-survey-title">${index}. ${survey.title}</p>
            </div>
            <span class="sv-survey-status ${statusClass}">${statusText}</span>
        </div>
        <div class="sv-survey-meta">
            <div class="sv-meta-item">
                <i class="fas fa-code"></i>
                <span class="sv-survey-code">${survey.code}</span>
            </div>
            <div class="sv-meta-item">
                <i class="fas fa-book"></i>
                <span class="sv-survey-handler-name">${survey.trainer}</span>
            </div>
            <div class="sv-survey-handler">
                <i class="fas fa-user"></i>
                <span class="sv-survey-handler-name">${survey.handler}</span>
            </div>
        </div>
    </div>
    <div class="sv-survey-footer">
      ${
        type === "pending"
          ? `<button class="sv-action-btn" onclick="startSurvey(${survey.id})">
               <i class="fas fa-play"></i> Thực hiện khảo sát
             </button>`
          : `<button class="sv-action-btn" disabled>
               <i class="fas fa-check"></i> Đã hoàn thành
             </button>`
      }
    </div>
  `;

  return item;
}

function startSurvey(surveyId) {
  const survey = surveyData.pending.find((s) => s.id === surveyId);
  if (survey) {
    alert(`Bắt đầu khảo sát: ${survey.title}`);
    window.location.href = `../html/chi-tiet-khao-sat.html?surveyId=${surveyId}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSurveyList();
  setupTabSwitching();
});
