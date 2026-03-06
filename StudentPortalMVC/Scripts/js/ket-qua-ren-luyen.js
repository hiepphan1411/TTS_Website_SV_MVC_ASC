
let trainingResultsData = [];

function getClassificationClass(classification) {
    const classMap = {
        'Xuất sắc': 'status-xuatsac',
        'Khá': 'status-kha',
        'Trung bình': 'status-trungbinh',
        'Yếu': 'status-yeu',
        'Kém': 'status-kem',
    };
    return classMap[classification] || '';
}


function getScoreClass(score) {
    if (score >= 90) return 'score';
    if (score >= 70) return 'score';
    if (score >= 50) return 'score-low';
    return 'score-fail';
}


function getStatusColor(score) {
    if (score >= 90) return 'emerald';
    if (score >= 80) return 'green';
    if (score >= 70) return 'blue';
    if (score >= 60) return 'amber';
    if (score >= 50) return 'orange';
    return 'red';
}


function getStatusText(score) {
    if (score >= 90) return 'Xuất sắc';
    if (score >= 80) return 'Khá';
    if (score >= 70) return 'Trung bình';
    if (score >= 60) return 'Yếu';
    return 'Kém';
}


function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


async function loadTrainingResultsData() {
    try {
        const response = await fetch('/KetQuaRenLuyen/GetData');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        trainingResultsData = data;
        return data;
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu kết quả rèn luyện:', error);
        alert('Không thể tải dữ liệu. Vui lòng thử lại sau.');
        return [];
    }
}

// Function to render semester card
function renderSemesterCard(data) {
    const iconClass = data.isCurrent
        ? 'semester-icon'
        : 'semester-icon inactive';
    const expandIcon = data.expanded
        ? '<i class="fa-solid fa-angle-up"></i>'
        : '<i class="fa-solid fa-chevron-down"></i>';
    const expandClass = data.expanded ? 'active' : '';
    const detailsClass = data.expanded ? 'show' : '';

    let violationsHTML = '';
    if (data.violations && data.violations.length > 0) {
        violationsHTML = data.violations
            .map(
                (v) => `
            <tr>
                <td>${String(v.stt).padStart(2, '0')}</td>
                <td>${v.date}</td>
                <td>${v.content}</td>
                <td>${v.type}</td>
                <td style="font-style: italic;">${v.note || '-'}</td>
                <td style="color: ${v.points.toString().startsWith('+') ? '#10b981' : '#ef4444'};">${v.points}</td>
            </tr>
        `,
            )
            .join('');
    } else {
        violationsHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2rem; color: #94a3b8;">
                    Không có dữ liệu vi phạm
                </td>
            </tr>
        `;
    }

    return `
        <div class="semester-card">
            <div class="semester-header" onclick="toggleSemester(this, ${data.id})">
                <div class="semester-left">
                    <div class="${iconClass}">
                        <span class="material-symbols-outlined"><i class="fa-solid fa-calendar"></i></span>
                    </div>
                    <div class="semester-info">
                        <h3>${data.semester}</h3>
                    </div>
                </div>
                <div class="semester-right">
                    <div class="semester-stat">
                        <p class="semester-stat-label">Điểm rèn luyện</p>
                        <p class="semester-stat-value ${getScoreClass(data.score)}">${data.score}</p>
                    </div>
                    <div class="semester-stat">
                        <p class="semester-stat-label">Xếp loại</p>
                        <div class="status-badge ${getClassificationClass(data.classification)}">${data.classification}</div>
                    </div>
                    <span class="material-symbols-outlined expand-icon ${expandClass}">${expandIcon}</span>
                </div>
            </div>
            <div class="semester-details ${detailsClass}">
                <div class="detail-table-wrapper">
                    <table class="detail-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày vi phạm</th>
                                <th>Nội dung</th>
                                <th>Hình thức</th>
                                <th>Ghi chú</th>
                                <th>Điểm +/-</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${violationsHTML}
                        </tbody>
                    </table>
                </div>
                ${data.violations && data.violations.length > 0
            ? `
                <div class="detail-buttons">
                    <button class="btn-detail" onclick="viewDetailReport('${data.semester}')">Xem báo cáo chi tiết</button>
                </div>
                `
            : ''
        }
            </div>
        </div>
    `;
}

// initialize and render all semester cards
async function initializeTrainingResults() {
    const container = document.querySelector('.content-section');
    if (!container) {
        console.error('Container .content-section không tồn tại');
        return;
    }

    container.innerHTML = '<div class="text-center p-4">Đang tải dữ liệu...</div>';

    // Load data
    await loadTrainingResultsData();

    // loaded successfully
    if (!trainingResultsData || trainingResultsData.length === 0) {
        container.innerHTML = `
            <div class="text-center p-4" style="color: #94a3b8;">
                <i class="fa-solid fa-inbox" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Không có dữ liệu kết quả rèn luyện</p>
            </div>
        `;
        return;
    }

    // semester cards
    container.innerHTML = trainingResultsData
        .map((data) => renderSemesterCard(data))
        .join('');
}

// toggle semester details
function toggleSemester(element, semesterId) {
    const details = element.nextElementSibling;
    const icon = element.querySelector('.expand-icon');

    // Find the semester data and update expanded state
    const semester = trainingResultsData.find((s) => s.id === semesterId);
    if (semester) {
        semester.expanded = !semester.expanded;
    }

    // Toggle display
    details.classList.toggle('show');
    icon.classList.toggle('active');

    // Update icon with animation
    if (details.classList.contains('show')) {
        icon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } else {
        icon.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    }
}

// Function to view detail report
function viewDetailReport(semester) {
    // Chuyển sang URL của ASP.NET MVC
    window.location.href = '/KetQuaRenLuyen/ChiTiet?semester=' + encodeURIComponent(semester);
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function () {
    initializeTrainingResults();
});

// jQuery ready fallback (nếu sử dụng jQuery)
$(document).ready(function () {
    // Additional jQuery-based initialization if needed
}); 