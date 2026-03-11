const attendanceData = [
  {
    stt: 1,
    semester: 1,
    year: "2024-2025",
    courseName: "Kỹ năng thăm gia quyết các vụ án dân sự",
    courseCode: "000093",
    credits: 3,
    theoryHours: 30,
    practiceHours: 30,
    authorizedLeave: 0,
    unauthorizedLeave: 3,
  },
  {
    stt: 2,
    semester: 1,
    year: "2024-2025",
    courseName: "Phương pháp điều tra xã hội học",
    courseCode: "000901",
    credits: 1,
    theoryHours: 10,
    practiceHours: 0,
    authorizedLeave: 0,
    unauthorizedLeave: 3,
  },
  {
    stt: 1,
    semester: 1,
    year: "2024-2025",
    courseName: "Pháp luật đại cương 1",
    courseCode: "000902",
    credits: 2,
    theoryHours: 20,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 0,
  },
  {
    stt: 1,
    semester: 2,
    year: "2024-2025",
    courseName: "Pháp luật đại cương 1",
    courseCode: "000902",
    credits: 2,
    theoryHours: 20,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 0,
  },
  {
    stt: 2,
    semester: 2,
    year: "2024-2025",
    courseName: "Phương pháp điều tra xã hội học 1",
    courseCode: "000901",
    credits: 1,
    theoryHours: 10,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },
  {
    stt: 1,
    semester: 1,
    year: "2025-2026",
    courseName: "Kỹ năng thăm gia giải quyết các vụ án dân sự 1",
    courseCode: "000093",
    credits: 3,
    theoryHours: 30,
    practiceHours: 30,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },
  {
    stt: 2,
    semester: 1,
    year: "2025-2026",
    courseName: "Kỹ năng thăm gia giải quyết các vụ án dân sự 2",
    courseCode: "000094",
    credits: 3,
    theoryHours: 30,
    practiceHours: 30,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },
  {
    stt: 1,
    semester: 2,
    year: "2025-2026",
    courseName: "Pháp luật đại cương 1",
    courseCode: "000902",
    credits: 2,
    theoryHours: 20,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },

  {
    stt: 2,
    semester: 2,
    year: "2025-2026",
    courseName: "Phương pháp điều tra xã hội học 2",
    courseCode: "000905",
    credits: 1,
    theoryHours: 10,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },
  {
    stt: 1,
    semester: 1,
    year: "2026-2027",
    courseName: "Pháp luật đại cương 2",
    courseCode: "000906",
    credits: 2,
    theoryHours: 20,
    practiceHours: 0,
    authorizedLeave: 3,
    unauthorizedLeave: 3,
  },
];

const attendanceDetail = [
  {
    courseCode: "000093",
    details: [
      {
        date: "2024-09-01",
        status: "absent",
        numOfLessons: 2,
      },
      {
        date: "2024-09-08",
        status: "late",
        numOfLessons: 1,
      },
      {
        date: "2024-09-15",
        status: "authorized",
        numOfLessons: 2,
        evidence: {
          reason: "Ốm, có giấy xác nhận bệnh viện",
          files: ["giay-xac-nhan-benh.pdf"],
          images: ["benhvien1.jpg"],
          submitAt: "2024-09-14 10:30:00",
          approved: true,
        },
      },
    ],
  },

  {
    courseCode: "000901",
    details: [
      {
        date: "2024-09-03",
        status: "present",
        numOfLessons: 2,
      },
      {
        date: "2024-09-10",
        status: "absent",
        numOfLessons: 2,
      },
      {
        date: "2024-09-17",
        status: "authorized",
        numOfLessons: 1,
        evidence: {
          reason: "Tham gia hoạt động đoàn trường",
          files: ["don-xin-nghi.docx"],
          images: ["xac-nhan-doan.png"],
          submitAt: "2024-09-16 14:20:00",
          approved: false,
        },
      },
    ],
  },

  {
    courseCode: "000902",
    details: [
      {
        date: "2024-10-02",
        status: "present",
        numOfLessons: 2,
      },
      {
        date: "2024-10-09",
        status: "authorized",
        numOfLessons: 2,
        evidence: {
          reason: "Thi chứng chỉ tiếng Anh",
          files: ["lich-thi-toeic.pdf"],
          images: [],
          submitAt: "2024-10-08 09:15:00",
          approved: true,
        },
      },
      {
        date: "2024-10-16",
        status: "absent",
        numOfLessons: 1,
      },
    ],
  },

  {
    courseCode: "000094",
    details: [
      {
        date: "2025-03-01",
        status: "present",
        numOfLessons: 2,
      },
      {
        date: "2025-03-08",
        status: "late",
        numOfLessons: 1,
      },
      {
        date: "2025-03-15",
        status: "authorized",
        numOfLessons: 2,
        evidence: {
          reason: "Tham gia hội thảo khoa học",
          files: ["thu-moi-hoi-thao.pdf"],
          images: ["hoi-thao.jpg"],
          submitAt: "2025-03-14 11:00:00",
          approved: true,
        },
      },
    ],
  },

  {
    courseCode: "000905",
    details: [
      {
        date: "2025-03-02",
        status: "present",
        numOfLessons: 2,
      },
      {
        date: "2025-03-09",
        status: "absent",
        numOfLessons: 2,
      },
      {
        date: "2025-03-16",
        status: "authorized",
        numOfLessons: 1,
        evidence: {
          reason: "Tai nạn giao thông nhẹ",
          files: ["bien-ban-benh-vien.pdf"],
          images: ["chan-thuong.jpg"],
          submitAt: "2025-03-15 16:45:00",
          approved: false,
        },
      },
    ],
  },

  {
    courseCode: "000906",
    details: [
      {
        date: "2026-09-05",
        status: "present",
        numOfLessons: 2,
      },
      {
        date: "2026-09-12",
        status: "late",
        numOfLessons: 1,
      },
      {
        date: "2026-09-19",
        status: "authorized",
        numOfLessons: 2,
        evidence: {
          reason: "Công việc gia đình",
          files: ["don-xin-nghi-gia-dinh.pdf"],
          images: [],
          submitAt: "2026-09-18 13:30:00",
          approved: true,
        },
      },
    ],
  },
];

function createTableRow(course, attendanceStatus) {
  const barChartHTML = window.ChartUtils.renderBarChart(
    attendanceStatus.actual,
    attendanceStatus.allowed,
    attendanceStatus.isValid,
  );

  return `
    <tr>
        <td class="column-center">${course.stt}</td>
        <td class="column-center">${course.courseCode}</td>
        <td class="ps-2">${course.courseName}</td>
        <td class="column-center">${course.credits}</td>
        <td class="column-center">${course.authorizedLeave}</td>
        <td class="column-center">${course.unauthorizedLeave}</td>
        <td class="column-center">
          ${barChartHTML}
        </td>
        <td class="column-center">
            <button class="btn-custom btn-sm" onclick="showAttendanceDetailPopup('${course.courseCode}')">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </td>
    </tr>
  `;
}

function renderAttendanceTable() {
  const container = document.getElementById("expandableSections");

  const semesterGroup = {};
  attendanceData.forEach((c) => {
    const key = `${c.year}:${c.semester}`;
    if (!semesterGroup[key]) {
      semesterGroup[key] = [];
    }
    semesterGroup[key].push(c);
  });

  const semesters = Object.keys(semesterGroup)
    .sort((a, b) => {
      const [yearA, semA] = a
        .split(":")
        .map((v, i) => (i === 0 ? v : parseInt(v)));

      const [yearB, semB] = b
        .split(":")
        .map((v, i) => (i === 0 ? v : parseInt(v)));

      return yearA === yearB ? semA + semB : yearA.localeCompare(yearB);
    })
    .map((key, idx) => {
      const courses = semesterGroup[key];
      const [year, semester] = key.split(":");
      const sem = semester;
      const totalCredits = courses.reduce(
        (sum, course) => sum + course.credits,
        0,
      );
      const totalAuthorizedLeave = courses.reduce(
        (sum, course) => sum + course.authorizedLeave,
        0,
      );
      const totalUnauthorizedLeave = courses.reduce(
        (sum, course) => sum + course.unauthorizedLeave,
        0,
      );

      const countCourses = courses.length;

      const attendanceStatus = courses.map((c) => {
        const totalLeaves = c.authorizedLeave + c.unauthorizedLeave;
        const attendanceAllow = (c.theoryHours + c.practiceHours) * 0.2;

        return {
          allowed: attendanceAllow,
          actual: totalLeaves,
          isValid: totalLeaves <= attendanceAllow,
        };
      });

      // Calculate total allowed absences for the semester
      const totalAllowedAbsences = courses.reduce((sum, c) => {
        return sum + (c.theoryHours + c.practiceHours) * 0.2;
      }, 0);

      const totalActualAbsences = totalAuthorizedLeave + totalUnauthorizedLeave;

      return `
        <div class="expandable-section">
            <div class="section-header ${idx === 0 ? "expanded" : ""}" onclick="toggleSection(this)">
              <div class="semester-title">
                <div class="semester-head-icon"></div>
                <div>
                  <div class="section-header-text">Học kỳ ${sem} (${year})</div>
                  <div class="section-meta">
                    <span class="bold-text">${countCourses} học phần</span>
                    • Tổng nghỉ:
                    <span class="bold-text">${totalCredits} tiết</span>
                  </div>
                </div>
              </div>
              <div class="section-summary">
                <div class="attendance-summary ${idx === 0 ? "d-none" : ""}" id="attendance-summary-${sem}-${idx}">
                  <span class="attendance-total-card authorized-leave">${totalAuthorizedLeave} <span class="attendance-note">có phép</span></span>
                  <span class="attendance-total-card unauthorized-leave">${totalUnauthorizedLeave} <span class="attendance-note">không phép</span></span>
                </div>
                <div class="section-icon">
                  <i class="fas fa-chevron-up"></i>
                </div>
              </div>
            </div>
            <div class="section-contents ${idx === 0 ? "active" : ""}">
              <div class="table-frame">
                <table class="table" id="attendanceTable">
                  <thead>
                    <tr>
                      <th class="column-center">STT</th>
                      <th class="column-center">MÃ LHP</th>
                      <th class="ps-2">TÊN HP</th>
                      <th class="column-center">TÍN CHỈ</th>
                      <th class="column-center">NGHỈ CÓ PHÉP</th>
                      <th class="column-center">NGHỈ KHÔNG PHÉP</th>
                      <th class="column-center">TÌNH TRẠNG CHUYÊN CẦN</th>
                      <th class="column-center">CHI TIẾT</th>
                    </tr>
                  </thead>
                  <tbody id="attendanceTableBody">
                    ${courses.map((c, idx) => createTableRow({ ...c, stt: idx + 1 }, attendanceStatus[idx])).join("")}
                    <tr class="total-row" style="background-color: #F9FAFB; font-weight: 600;">
                      <td colspan="4" style="text-align: right;">TỔNG SỐ TIẾT NGHỈ CỦA KỲ:</td>
                      <td class="column-center">
                        <span class="attendance-total-card authorized-leave">${totalAuthorizedLeave}</span>
                      </td>
                      <td class="column-center">
                        <span class="attendance-total-card unauthorized-leave">${totalUnauthorizedLeave}</span>
                      </td>
                      <td class="column-center">
                        <span class="attendance-total-card unauthorized-leave">
                          ${totalActualAbsences}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = semesters;
}

function renderSemesterButtonGroup() {
  const buttonGroup = document.getElementById("semesterButtonGroup");

  if (!buttonGroup) return;

  const semesterGroup = {};
  attendanceData.forEach((c) => {
    const key = `${c.year}:${c.semester}`;
    if (!semesterGroup[key]) {
      semesterGroup[key] = [];
    }
    semesterGroup[key].push(c);
  });

  const semesters = Object.keys(semesterGroup)
    .sort((a, b) => {
      const [yearA, semA] = a
        .split(":")
        .map((v, i) => (i === 0 ? v : parseInt(v)));

      const [yearB, semB] = b
        .split(":")
        .map((v, i) => (i === 0 ? v : parseInt(v)));

      return yearA === yearB ? semA + semB : yearA.localeCompare(yearB);
    })
    .map((key, idx) => {
      const [year, semester] = key.split(":");
      return `
        <button class="btn-custom">HK${semester} (${year})</button>
      `;
    })
    .join("");

  buttonGroup.innerHTML = semesters;
}

document.addEventListener("DOMContentLoaded", function () {
  renderAttendanceTable();
  renderSemesterButtonGroup();
  createAttendanceDetailPopup();
});

// Helper functions for attendance detail popup
function getStatusText(status) {
  const statusMap = {
    present: "Có mặt",
    absent: "Vắng không phép",
    late: "Đi muộn",
    authorized: "Vắng có phép",
  };
  return statusMap[status] || status;
}

function getStatusClass(status) {
  const classMap = {
    present: "status-present",
    absent: "status-absent",
    late: "status-late",
    authorized: "status-authorized",
  };
  return classMap[status] || "";
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function createAttendanceDetailPopup() {
  const popupHTML = `
    <div id="attendanceDetailPopup" class="attendance-popup-overlay" style="display: none;">
      <div class="attendance-popup-container">
        <div class="attendance-popup-header">
          <div>Chi tiết điểm danh</div>
          <button class="attendance-popup-close" onclick="closeAttendanceDetailPopup()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="attendance-popup-body" id="attendanceDetailContent">
          <!-- Content will be rendered here -->
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", popupHTML);
}

function showAttendanceDetailPopup(courseCode) {
  const popup = document.getElementById("attendanceDetailPopup");
  const content = document.getElementById("attendanceDetailContent");

  const courseData = attendanceDetail.find(
    (item) => item.courseCode === courseCode,
  );
  const courseInfo = attendanceData.find(
    (item) => item.courseCode === courseCode,
  );

  if (!courseData || !courseInfo) {
    content.innerHTML = "<p>Không tìm thấy dữ liệu chi tiết.</p>";
    popup.style.display = "flex";
    return;
  }

  let contentHTML = `
    <div class="attendance-detail-header">
      <div>${courseInfo.courseName}</div>
      <div>Mã học phần: <strong>${courseCode}</strong></div>
    </div>
    <div class="attendance-detail-list">
  `;

  courseData.details.forEach((detail) => {
    const statusText = getStatusText(detail.status);
    const statusClass = getStatusClass(detail.status);
    const showAppealButton =
      detail.status !== "authorized" ||
      (detail.evidence && !detail.evidence.approved);
    const isAuthorizedAbsence = detail.status === "authorized";

    contentHTML += `
      <div class="attendance-detail-item ${!isAuthorizedAbsence ? "authorized" : ""}">
        <div class="attendance-detail-item-body ${!isAuthorizedAbsence ? "authorized" : ""}">
          <div class="attendance-detail-item-header">
            <div class="attendance-detail-date">
              <i class="fas fa-calendar-day"></i>
              <span>${formatDate(detail.date)}</span>
            </div>
            <span class="attendance-detail-status ${statusClass}">${statusText}</span>
          </div>
          <div class="attendance-detail-info">
            <span class="attendance-detail-label">Số tiết nghỉ:</span>
            <span class="attendance-detail-value">${detail.numOfLessons} tiết</span>
          </div>
        </div>      
    `;

    if (detail.evidence) {
      const approvalStatus = detail.evidence.approved
        ? '<span class="approval-status approved"><i class="fas fa-check-circle"></i> Đã duyệt</span>'
        : '<span class="approval-status pending"><i class="fas fa-clock"></i> Chờ duyệt</span>';

      contentHTML += `
        <div class="attendance-detail-evidence">
          <div class="evidence-header">
            <span class="evidence-title"><i class="fas fa-file-alt"></i> Minh chứng</span>
            ${approvalStatus}
          </div>
          <p class="evidence-reason">${detail.evidence.reason}</p>
          <div class="evidence-submit-info">
            <i class="fas fa-upload"></i>
            <span>Nộp lúc: ${formatDateTime(detail.evidence.submitAt)}</span>
          </div>
      `;

      if (detail.evidence.files && detail.evidence.files.length > 0) {
        contentHTML += `<div class="evidence-files">`;
        detail.evidence.files.forEach((file) => {
          contentHTML += `
            <div class="evidence-file-item">
              <i class="fas fa-file-pdf"></i>
              <span>${file}</span>
            </div>
          `;
        });
        contentHTML += `</div>`;
      }

      if (detail.evidence.images && detail.evidence.images.length > 0) {
        contentHTML += `<div class="evidence-images">`;
        detail.evidence.images.forEach((image) => {
          contentHTML += `
            <div class="evidence-image-item">
              <i class="fas fa-image"></i>
              <span>${image}</span>
            </div>
          `;
        });
        contentHTML += `</div>`;
      }

      contentHTML += `</div>`;
    }

    if (showAppealButton) {
      contentHTML += `
        <div class="attendance-detail-actions">
          <button class="btn-appeal" onclick="handleAppealClick('${courseCode}', '${detail.date}')">
            <i class="fas fa-exclamation-circle"></i> Khiếu nại
          </button>
        </div>
      `;
    }

    contentHTML += `
      </div>
    `;
  });

  contentHTML += `</div>`;

  content.innerHTML = contentHTML;
  popup.style.display = "flex";
}

function closeAttendanceDetailPopup() {
  const popup = document.getElementById("attendanceDetailPopup");
  popup.style.display = "none";
}

function handleAppealClick(courseCode, date) {
  console.log(`Khiếu nại cho môn học ${courseCode}, ngày ${date}`);
  alert(
    `Chức năng khiếu nại đang được phát triển.\nMôn học: ${courseCode}\nNgày: ${formatDate(date)}`,
  );
}

// Close popup when clicking outside
document.addEventListener("click", function (e) {
  const popup = document.getElementById("attendanceDetailPopup");
  if (popup && e.target === popup) {
    closeAttendanceDetailPopup();
  }
});
