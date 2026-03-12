const TODAY = new Date();
let currentMonth = TODAY.getMonth();
let currentYear = TODAY.getFullYear();
let selectedDate = null;
let viewDate = new Date(TODAY);
let activeFilter = 'all';

let scheduleData = null;

const MONTH_NAMES = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

const DAY_NAMES = [
    'THỨ 2',
    'THỨ 3',
    'THỨ 4',
    'THỨ 5',
    'THỨ 6',
    'THỨ 7',
    'CHỦ NHẬT',
];

const TIME_PERIODS = ['Sáng', 'Chiều', 'Tối'];
const TIME_KEYS = ['morning', 'afternoon', 'evening'];

async function loadScheduleData() {
    try {
        const response = await fetch('/LichTheoTuan/GetData');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        scheduleData = data;
        return data;
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu lịch:', error);
        alert('Không thể tải dữ liệu lịch. Vui lòng thử lại sau.');
        return {};
    }
}

$(document).ready(async function () {
    await loadScheduleData();

    initializeCalendar();
    setupEventHandlers();
});

function initializeCalendar() {
    renderMiniCalendar(currentMonth, currentYear);
    renderWeekCalendar(viewDate);
    $('.button-schedule').first().addClass('active');
}

function setupEventHandlers() {
    setupFilterButtons();
    setupNavigationButtons();
    setupMonthNavigation();
    setupTodayButton();
    setupPrintButton();
    setupMiniCalendarClick();
}

function setupFilterButtons() {
    $('.button-schedule').click(function () {
        $('.button-schedule').removeClass('active');
        $(this).addClass('active');

        const filterText = $(this).find('p').text().trim().replace(/\s+/g, ' ');

        const filterMap = {
            'Tất cả': 'all',
            'Lịch học': 'study',
            'Lịch thi': 'exam',
        };

        activeFilter = filterMap[filterText] || 'all';
        renderWeekCalendar(viewDate);
    });
}

function setupNavigationButtons() {
    $('.btn-prev-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() - 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        selectedDate = null;
        updateMiniCalendarSelection();
    });

    $('.btn-next-week').click(function () {
        const newDate = new Date(viewDate);
        newDate.setDate(newDate.getDate() + 7);
        viewDate = newDate;

        currentMonth = viewDate.getMonth();
        currentYear = viewDate.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);

        selectedDate = null;
        updateMiniCalendarSelection();
    });
}

function setupTodayButton() {
    $('.navbar-brand').click(function () {
        selectedDate = new Date(TODAY);
        viewDate = new Date(TODAY);

        currentMonth = TODAY.getMonth();
        currentYear = TODAY.getFullYear();

        renderMiniCalendar(currentMonth, currentYear);
        renderWeekCalendar(viewDate);
        updateMiniCalendarSelection();
    });
}

function setupMonthNavigation() {
    $('.month-selector button:first-child').click(function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });

    $('.month-selector button:last-child').click(function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderMiniCalendar(currentMonth, currentYear);
    });
}

function setupPrintButton() {
    $('.btn-print').click(function () {
        window.print();
    });
}

function renderMiniCalendar(month, year) {
    $('.month-text').text(`${MONTH_NAMES[month]}, ${year}`);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let html = '';
    let dayCount = 1;
    let nextMonthDay = 1;

    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const prevDay = daysInPrevMonth - firstDay + j + 1;
                html += `<td class="text-center"><span class="other-month" data-date="${year}-${month}-${prevDay}">${prevDay}</span></td>`;
            } else if (dayCount > daysInMonth) {
                html += `<td class="text-center"><span class="other-month" data-date="${year}-${month + 2}-${nextMonthDay}">${nextMonthDay}</span></td>`;
                nextMonthDay++;
            } else {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;

                const isToday =
                    dayCount === TODAY.getDate() &&
                    month === TODAY.getMonth() &&
                    year === TODAY.getFullYear();
                const todayClass = isToday ? ' today' : '';
                html += `<td class="text-center"><span class="${todayClass}" data-date="${dateStr}">${dayCount}</span></td>`;
                dayCount++;
            }
        }
        html += '</tr>';
        if (dayCount > daysInMonth) break;
    }

    $('.mini-calendar tbody').html(html);
}

function setupMiniCalendarClick() {
    $('.mini-calendar tbody')
        .off('click', 'td span:not(.other-month)')
        .on('click', 'td span:not(.other-month)', function () {
            const dateStr = $(this).data('date');
            const dateParts = dateStr.split('-');

            selectedDate = new Date(
                dateParts[0],
                dateParts[1] - 1,
                dateParts[2],
            );
            viewDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

            $('.mini-calendar td span').removeClass('selected');
            $(this).addClass('selected');

            renderWeekCalendar(viewDate);
        });
}

function updateMiniCalendarSelection() {
    $('.mini-calendar td span').removeClass('selected');

    if (!selectedDate) return;

    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    $(`.mini-calendar td span[data-date="${dateStr}"]`).addClass('selected');
}

function getMonday(date) {
    const d = new Date(date.getTime());
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    return d;
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function renderWeekCalendar(date) {
    const monday = getMonday(date);
    const emptyDays = computeEmptyDays(monday);
    renderWeekHeader(monday, emptyDays);
    renderWeekBody(monday, emptyDays);
    applyColumnWidths(emptyDays);
    attachEventHandlers();
}

// Tính trước 7 ngày trong tuần: ngày nào không có lịch
function computeEmptyDays(monday) {
    const emptyDays = [];
    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + i);
        const dateStr = formatDate(currentDay);
        const daySchedule = scheduleData ? scheduleData[dateStr] || [] : [];
        const hasEvent = daySchedule.some((e) => {
            if (activeFilter === 'all') return true;
            return e.category === activeFilter;
        });
        emptyDays.push(!hasEvent);
    }
    return emptyDays;
}

// Set grid-template-columns trực tiếp lên header và body rows
function applyColumnWidths(emptyDays) {
    const isMobile = window.innerWidth <= 768;

    // time-slot cố định 60px + 7 cột ngày
    const colDefs = ['60px'];
    emptyDays.forEach((isEmpty) => {
        colDefs.push(isEmpty ? '80px' : '150px');
    });
    const gridCols = colDefs.join(' ');

    document
        .querySelectorAll(
            '.calendar-header .time-row, .calendar-body .time-row',
        )
        .forEach((row) => {
            if (isMobile) {
                row.style.display = 'grid';
                row.style.gridTemplateColumns = gridCols;
            } else {
                row.style.display = '';
                row.style.gridTemplateColumns = '';
            }
        });
}

function renderWeekHeader(monday, emptyDays) {
    let headerHtml = '<div class="time-row">';
    headerHtml += '<div class="time-slot"></div>';

    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + i);
        const dayNum = currentDay.getDate();

        const isToday = currentDay.toDateString() === TODAY.toDateString();
        const todayClass = isToday ? ' today-column' : '';
        const noEventClass = emptyDays[i] ? ' no-event' : '';

        headerHtml += `
            <div class="day-column${todayClass}${noEventClass}" data-col="${i}">
                <div class="day-name">${DAY_NAMES[i]}</div>
                <div class="day-number${isToday ? ' today' : ''}">${dayNum}</div>
            </div>
        `;
    }
    headerHtml += '</div>';
    $('.calendar-header').html(headerHtml);
}

// ===== SỬA LẠI HÀM RENDER WEEK BODY =====
function renderWeekBody(monday, emptyDays) {
    // Kiểm tra data đã load chưa
    if (!scheduleData) {
        console.warn('Dữ liệu lịch chưa được tải');
        $('.calendar-body').html(
            '<div class="text-center p-4">Đang tải dữ liệu...</div>',
        );
        return;
    }

    let bodyHtml = '';

    for (let t = 0; t < TIME_PERIODS.length; t++) {
        bodyHtml += '<div class="time-row">';
        bodyHtml += `<div class="time-slot">${TIME_PERIODS[t]}</div>`;

        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(monday);
            currentDay.setDate(monday.getDate() + i);
            const dateStr = formatDate(currentDay);

            const isToday = currentDay.toDateString() === TODAY.toDateString();
            const todayClass = isToday ? ' today-column' : '';
            const noEventClass = emptyDays[i] ? ' no-event' : '';

            // Lấy dữ liệu từ scheduleData đã cache
            const daySchedule = scheduleData[dateStr] || [];

            // Lọc events theo thời gian và filter
            const timeEvents = daySchedule.filter((e) => {
                if (e.time !== TIME_KEYS[t]) return false;
                if (activeFilter === 'all') return true;
                return e.category === activeFilter;
            });

            bodyHtml += `<div class="day-column${todayClass}${noEventClass}" data-col="${i}">${renderEvents(timeEvents)}</div>`;
        }

        bodyHtml += '</div>';
    }

    $('.calendar-body').html(bodyHtml);
}

function attachEventHandlers() {
    $('.btn-join').click(function () {
        const eventContainer = $(this).closest('.event');
        const code = eventContainer.find('.event-code').text();
        const noteElement = eventContainer.find('.event-note');
        let note = noteElement.text().replace('Ghi chú:', '').trim();

        alert(`${code}\nOpen with ${note}`);
    });
}

function renderEvents(events) {
    if (events.length === 0) return '';

    return events
        .map(
            (event) => `
        <div class="event ${event.type}">
            <div class="event-title">${event.title}</div>
            <div class="event-code">${event.code}</div>
            <div class="event-time">
                <span class="label-time">Tiết:</span>
                ${event.periodFrom} - ${event.periodTo} (${event.timeFrom} - ${event.timeTo})
            </div>
            <div class="event-room">
                <span class="label-room">Phòng:</span>
                ${event.room}
            </div>
            <div class="event-teacher">
                <span class="label-teacher">GV:</span>
                ${event.teacher}
            </div>
            ${
                event.room === 'Trực tuyến'
                    ? `<div class="event-note"><span class="label-note">Ghi chú:</span> ${event.note}</div>
                       <input type='button' class="btn-join" value="Tham gia">`
                    : ''
            }
        </div>
    `,
        )
        .join('');
}

function updateEmptyColumns() {
    // Không dùng nữa - logic đã chuyển vào renderWeekHeader/renderWeekBody
}

// Re-render khi resize để áp dụng lại inline style đúng breakpoint
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderWeekCalendar(viewDate);
    }, 200);
});
