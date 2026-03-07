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
            <button class="btn-custom btn-sm">
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
                <div style="display: flex; gap: 10px; ${idx === 0 ? "display: none;" : ""}" id="attendance-summary-${sem}-${idx}">
                  <span class="attendance-total-card authorized-leave">${totalAuthorizedLeave} có phép</span>
                  <span class="attendance-total-card unauthorized-leave">${totalUnauthorizedLeave} không phép</span>
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
});
