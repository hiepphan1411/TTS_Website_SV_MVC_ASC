; (function ($) {
    'use strict';

    function loadScheduleData() {
        var url = $('.schedule-list-content').data('url');
        $.getJSON(url)
            .done(function (data) {
                renderSchedules(data.schedules);
            })
            .fail(function (jqxhr, textStatus, error) {
                console.error('Lỗi khi tải dữ liệu:', textStatus, error);
            });
    }

    function renderSchedules(schedules) {
        var $container = $('.schedule-list-content').empty();

        $.each(schedules, function (index, schedule) {
            $container.append(createScheduleItem(schedule, index === 0));
        });
    }

    function createScheduleItem(schedule, isExpanded) {
        isExpanded = !!isExpanded;

        var rows = $.map(schedule.lichHoc, function (lich) {
            return '<tr>' +
                '<td class="text-center">' + lich.stt + '</td>' +
                '<td class="text-center">' + lich.thu + '</td>' +
                '<td class="text-center">' + lich.tiet + '</td>' +
                '<td class="text-center">' + lich.soTinChi + '</td>' +
                '<td class="text-center">' + lich.nhom + '</td>' +
                '<td class="text-center">' + lich.batDau + '</td>' +
                '<td class="text-center">' + lich.ketThuc + '</td>' +
                '<td>' + lich.tenPhong + '</td>' +
                '<td>' + lich.giangVien + '</td>' +
                '</tr>';
        });

        return $('<div class="schedule-item">').html(
            '<div class="schedule-header">' +
            '<div class="schedule-info">' +
            '<div class="schedule-title">Tên môn học/học phần: ' + schedule.tenMonHoc + ' - ' + schedule.maMonHoc + '</div>' +
            '<div class="schedule-meta">' +
            '<span><strong>Khoa:</strong> ' + schedule.khoa + '</span>' +
            '<span>•</span>' +
            '<span><strong>Lớp học:</strong> ' + schedule.lopHoc + '</span>' +
            '</div>' +
            '</div>' +
            '<i class="fas fa-chevron-down schedule-toggle' + (isExpanded ? ' expanded' : '') + '"></i>' +
            '</div>' +
            '<div class="schedule-detail' + (isExpanded ? ' show' : '') + '">' +
            '<div class="schedule-detail-content">' +
            '<table class="schedule-table">' +
            '<thead>' +
            '<tr>' +
            '<th></th>' +
            '<th colspan="4" class="text-center">Lịch học</th>' +
            '<th colspan="2" class="text-center">Thời gian</th>' +
            '<th></th><th></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="text-center">STT</th>' +
            '<th class="text-center">Thứ</th>' +
            '<th class="text-center">Tiết</th>' +
            '<th class="text-center">Số tín chỉ</th>' +
            '<th class="text-center">Nhóm</th>' +
            '<th class="text-center">Bắt đầu</th>' +
            '<th class="text-center">Kết thúc</th>' +
            '<th>Tên phòng</th>' +
            '<th>Giảng viên</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' + rows.join('') + '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>'
        );
    }

    function toggleSchedule($header) {
        var $item = $header.closest('.schedule-item');

        $('.schedule-item').not($item).each(function () {
            $(this).find('.schedule-detail').removeClass('show');
            $(this).find('.schedule-toggle').removeClass('expanded');
        });

        $item.find('.schedule-detail').toggleClass('show');
        $item.find('.schedule-toggle').toggleClass('expanded');
    }

    function scrollToScheduleList() {
        var $section = $('.schedule-list-section');
        if ($section.length) {
            $('html, body').animate({ scrollTop: $section.offset().top }, 400);
        }
    }

    $(function () {
        loadScheduleData();

        $(document).on('click', '.schedule-header', function () {
            toggleSchedule($(this));
        });

        $(document).on('click', '.btn-search, .btn-view-schedule', function (e) {
            e.preventDefault();
            scrollToScheduleList();
        });
    });

})(jQuery);