(function ($) {
    'use strict';

    var scholarshipData = {
        myApplications: [
            {
                id: 1,
                title: "Học bổng Khuyến khích học tập - Loại B",
                type: "Nội bộ",
                typeBadgeClass: "type-academic",
                status: "approved",
                statusText: "Đã duyệt",
                statusIcon: "fa-check-circle",
                semester: "HK1 2024-2025",
                amount: "2.000.000đ",
                gpa: "3.75",
                date: "15/01/2025",
                dateLabel: "Ngày duyệt",
                progressSteps: [
                    { label: "Nộp hồ sơ", date: "05/01/2025", status: "completed", icon: "fa-check" },
                    { label: "Xét duyệt", date: "10/01/2025", status: "completed", icon: "fa-file-signature" },
                    { label: "Phê duyệt", date: "15/01/2025", status: "completed", icon: "fa-check-double" },
                    { label: "Nhận học bổng", date: "Dự kiến: 20/01/2025", status: "pending", icon: "fa-gift" }
                ],
                actions: [{ text: "Xem chi tiết", modal: "applicationDetailModal" }]
            },
            {
                id: 2,
                title: "Học bổng Tài năng CNTT",
                type: "Tài trợ ngoài",
                typeBadgeClass: "type-external",
                status: "pending",
                statusText: "Đang xét duyệt",
                statusIcon: "fa-clock",
                semester: "HK2 2024-2025",
                amount: "5.000.000đ",
                gpa: "3.62",
                date: "02/02/2025",
                dateLabel: "Ngày nộp",
                progressSteps: [
                    { label: "Nộp hồ sơ", date: "02/02/2025", status: "completed", icon: "fa-check" },
                    { label: "Xét duyệt ban đầu", date: "05/02/2025", status: "active", icon: "fa-file-signature" },
                    { label: "Đang phỏng vấn", date: "Dự kiến: 12/02/2025", status: "pending", icon: "fa-comments" },
                    { label: "Công bố kết quả", date: "20/02/2025", status: "pending", icon: "fa-bullhorn" }
                ],
                actions: [
                    { text: "Chỉnh sửa", modal: "editModal" },
                    { text: "Xem chi tiết", modal: "applicationDetailModal" }
                ]
            }
        ],
        availableScholarships: [
            {
                id: 1,
                title: "Học bổng Khuyến khích - Loại A",
                typeBadge: "Nội bộ", typeBadgeClass: "type-academic",
                amount: "100% học phí", amountNote: "Bình quân học phí học kỳ",
                requirements: [
                    { text: "Kết quả: Xuất sắc", met: true },
                    { text: "Rèn luyện: Khá trở lên", met: true },
                    { text: "Top 5% GPA", met: false },
                    { text: ">= 15 tín chỉ/HK", met: false }
                ],
                deadline: "Tự động xét sau mỗi kỳ", slots: "-",
                canApply: false, isAutomatic: true
            },
            {
                id: 2,
                title: "Học bổng Khuyến khích - Loại B",
                typeBadge: "Nội bộ", typeBadgeClass: "type-academic",
                amount: "70% học phí", amountNote: "Bình quân học phí học kỳ",
                requirements: [
                    { text: "Kết quả: Xuất sắc", met: true },
                    { text: "Rèn luyện: Khá trở lên", met: true },
                    { text: "Top 5% GPA", met: false },
                    { text: ">= 15 tín chỉ/HK", met: false }
                ],
                deadline: "Tự động xét sau mỗi kỳ", slots: "-",
                canApply: false, isAutomatic: true
            },
            {
                id: 3,
                title: "Học bổng Hỗ trợ học tập",
                typeBadge: "Nội bộ", typeBadgeClass: "type-academic",
                amount: "1.500.000đ", amountNote: "Theo kết quả học tập",
                requirements: [
                    { text: "GPA ≥ 2.5", met: true },
                    { text: "Rèn luyện: Khá trở lên", met: true },
                    { text: "Đối tượng chính sách", met: false }
                ],
                deadline: "Hạn: 10/03/2025", slots: "100 suất",
                canApply: true, isAutomatic: false
            },
            {
                id: 4,
                title: "Học bổng Tài năng CNTT VNG",
                typeBadge: "Tài trợ ngoài", typeBadgeClass: "type-support",
                amount: "10.000.000đ", amountNote: "+ Cơ hội thực tập",
                requirements: [
                    { text: "Ngành CNTT", met: true },
                    { text: "GPA ≥ 3.5", met: true },
                    { text: "Dự án cá nhân", met: false },
                    { text: "Phỏng vấn kỹ thuật", met: false }
                ],
                deadline: "Hạn: 25/03/2025", slots: "10 suất",
                canApply: true, isAutomatic: false
            }
        ]
    };
    function calculateProgressPercentage(steps) {
        var completed = $.grep(steps, function (s) { return s.status === 'completed'; }).length;
        var active = $.grep(steps, function (s) { return s.status === 'active'; }).length;
        var pct = ((completed + active * 0.5) / steps.length) * 100;
        return Math.min(Math.max(pct, 0), 100);
    }
    function buildRequirementHtml(req, compact) {
        var cls = compact ? 'requirement-compact' : 'requirement-item';
        if (req.met) {
            return '<div class="' + cls + '">'
                + '<div class="req-icon req-icon-met"><i class="fas fa-check"></i></div>'
                + '<span>' + req.text + '</span></div>';
        }
        return '<div class="' + cls + '">'
            + '<div class="req-icon req-icon-unmet"></div>'
            + '<span class="req-text-unmet">' + req.text + '</span></div>';
    }

    function renderApplicationCard(app) {
        var pct = calculateProgressPercentage(app.progressSteps);

        var stepsTop = $.map(app.progressSteps, function (s) {
            return '<div class="progress-step ' + s.status + '">'
                + '<div class="step-icon"><i class="fas ' + s.icon + '"></i></div></div>';
        }).join('');

        var stepsBottom = $.map(app.progressSteps, function (s) {
            return '<div class="progress-step ' + s.status + '">'
                + '<div class="step-label">' + s.label + '</div>'
                + '<div class="step-date">' + s.date + '</div></div>';
        }).join('');

        var actions = $.map(app.actions, function (a) {
            return '<button class="btn-action" data-bs-toggle="modal"'
                + ' data-bs-target="#' + a.modal + '" data-app-id="' + app.id + '">'
                + a.text + '</button>';
        }).join('');

        var amountClass = app.status === 'pending' ? 'amount-pending' : 'amount';

        return '<div class="application-card status-' + app.status + '" data-app-id="' + app.id + '">'
            + '<div class="application-header">'
            + '<div class="application-title">'
            + '<h4>' + app.title + '</h4>'
            + '<span class="scholarship-type-badge ' + app.typeBadgeClass + '">' + app.type + '</span>'
            + '</div>'
            + '<div class="application-status status-' + app.status + '-stats">'
            + '<i class="fas ' + app.statusIcon + '"></i> ' + app.statusText
            + '</div>'
            + '</div>'
            + '<div class="progress-timeline">'
            + '<div class="progress-steps">' + stepsTop + '</div>'
            + '<div class="progress-bar"><div class="progress-line" style="width:' + pct + '%"></div></div>'
            + '<div class="progress-steps">' + stepsBottom + '</div>'
            + '</div>'
            + '<div class="application-body"><div class="application-info-grid">'
            + '<div class="info-item"><span class="info-label">Học kỳ</span>'
            + '<span class="info-value">' + app.semester + '</span></div>'
            + '<div class="info-item"><span class="info-label">Số tiền</span>'
            + '<span class="info-value ' + amountClass + '">' + app.amount + '</span></div>'
            + '<div class="info-item"><span class="info-label">GPA</span>'
            + '<span class="info-value">' + app.gpa + '</span></div>'
            + '<div class="info-item"><span class="info-label">' + app.dateLabel + '</span>'
            + '<span class="info-value">' + app.date + '</span></div>'
            + '<div class="info-item"><span class="info-label">Thao tác</span>'
            + '<div class="d-flex flex-row gap-1">' + actions + '</div></div>'
            + '</div></div></div>';
    }

    function renderScholarshipCard(s) {
        var reqs = $.map(s.requirements, function (r) { return buildRequirementHtml(r, false); }).join('');
        var applyBtn = s.isAutomatic
            ? '<button class="btn btn-secondary btn-apply disabled" disabled>Tự động xét</button>'
            : '<button class="btn-apply" data-bs-toggle="modal" data-bs-target="#applyModal"'
            + ' data-scholarship-id="' + s.id + '">Đăng ký</button>';

        return '<div class="scholarship-card" data-scholarship-id="' + s.id + '">'
            + '<div class="scholarship-card-header">'
            + '<h4>' + s.title + '</h4>'
            + '<span class="type-badge ' + s.typeBadgeClass + '">' + s.typeBadge + '</span>'
            + '</div>'
            + '<div class="scholarship-card-body">'
            + '<div class="scholarship-amount">'
            + '<div class="amount-value">' + s.amount + '</div>'
            + '<div class="amount-note">' + s.amountNote + '</div>'
            + '</div>'
            + '<div class="scholarship-requirements">' + reqs + '</div>'
            + '<div class="scholarship-meta"><span>' + s.deadline + '</span><span>' + s.slots + '</span></div>'
            + '</div>'
            + '<div class="scholarship-card-footer">'
            + applyBtn
            + '<button class="btn-details" data-bs-toggle="modal" data-bs-target="#detailModal"'
            + ' data-scholarship-id="' + s.id + '">Chi tiết</button>'
            + '</div></div>';
    }

    function renderScholarshipTable(s) {
        var reqs = $.map(s.requirements, function (r) { return buildRequirementHtml(r, true); }).join('');
        var applyBtn = s.isAutomatic
            ? '<button class="btn-table disabled" disabled>Tự động xét</button>'
            : '<button class="btn-apply" data-bs-toggle="modal" data-bs-target="#applyModal"'
            + ' data-scholarship-id="' + s.id + '">Đăng ký</button>';

        return '<tr data-scholarship-id="' + s.id + '">'
            + '<td><div class="scholarship-name">' + s.title + '</div>'
            + '<span class="type-badge ' + s.typeBadgeClass + '">' + s.typeBadge + '</span></td>'
            + '<td><div class="amount-highlight">' + s.amount + '</div>'
            + '<div style="font-size:.75rem;color:#6b7280">' + s.amountNote + '</div></td>'
            + '<td><div class="requirements-compact">' + reqs + '</div></td>'
            + '<td><div style="font-size:.75rem;color:#6b7280;margin-bottom:.25rem">' + s.deadline + '</div>'
            + '<div style="font-size:.75rem;color:#6b7280">' + s.slots + '</div></td>'
            + '<td><div class="table-actions">' + applyBtn
            + '<button class="btn-table" data-bs-toggle="modal" data-bs-target="#detailModal"'
            + ' data-scholarship-id="' + s.id + '">Chi tiết</button>'
            + '</div></td></tr>';
    }

    function renderApplications() {
        var $container = $('.applications-list');
        if (!$container.length) return;
        $container.html($.map(scholarshipData.myApplications, renderApplicationCard).join(''));
        updateFilterCounts();
    }

    function renderScholarships(viewMode) {
        viewMode = viewMode || 'grid';
        var $container = $('.scholarships-grid');
        if (!$container.length) return;

        if (viewMode === 'table') {
            $container.addClass('table-view').html(
                '<table class="scholarship-table"><thead><tr>'
                + '<th>Tên học bổng</th><th>Mức học bổng</th>'
                + '<th>Điều kiện</th><th>Thông tin</th>'
                + '<th class="text-center">Thao tác</th>'
                + '</tr></thead><tbody>'
                + $.map(scholarshipData.availableScholarships, renderScholarshipTable).join('')
                + '</tbody></table>'
            );
        } else {
            $container.removeClass('table-view')
                .html($.map(scholarshipData.availableScholarships, renderScholarshipCard).join(''));
        }
    }

    function updateFilterCounts() {
        var total = scholarshipData.myApplications.length;
        var pending = $.grep(scholarshipData.myApplications, function (a) { return a.status === 'pending'; }).length;
        var approved = $.grep(scholarshipData.myApplications, function (a) { return a.status === 'approved'; }).length;

        $('.filter-tab').each(function () {
            var filter = $(this).data('filter');
            if (filter === 'all') $(this).text('Tất cả (' + total + ')');
            else if (filter === 'pending') $(this).text('Đang xét (' + pending + ')');
            else if (filter === 'approved') $(this).text('Đã duyệt (' + approved + ')');
        });
    }

    function openDetailModal(scholarship) {
        $('#detailName').text(scholarship.title);
        $('#detailType').text(scholarship.typeBadge);
        $('#detailAmount').text(scholarship.amount + ' (' + scholarship.amountNote + ')');
        $('#detailSlots').text(scholarship.slots);
        $('#detailDeadline').text(scholarship.deadline);
        $('#detailSemester').text('HK2 2024-2025');

        var $reqList = $('#detailRequirements').empty();
        $.each(scholarship.requirements, function (_, req) {
            var $li = $('<li>');
            if (req.met) {
                $li.html('<div class="req-icon req-icon-met"><i class="fas fa-check"></i></div><span>' + req.text + '</span>');
            } else {
                $li.html('<div class="req-icon req-icon-unmet"></div><span class="req-text-unmet">' + req.text + '</span>');
            }
            $reqList.append($li);
        });

        $('#detailDescription').text(
            'Học bổng dành cho sinh viên có thành tích học tập xuất sắc, có ý thức rèn luyện tốt. '
            + 'Học bổng được cấp hàng học kỳ dựa trên kết quả học tập của học kỳ trước đó. '
            + 'Sinh viên được nhận học bổng dưới hình thức miễn giảm học phí trực tiếp.'
        );

        $('#detailModal .modal-footer .btn-apply').toggle(!scholarship.isAutomatic);
    }

    function openApplicationDetailModal(app) {
        $('#appDetailName').text(app.title);
        $('#appDetailType').text(app.type);
        $('#appDetailAmount').text(app.amount);
        $('#appDetailSemester').text(app.semester);
        $('#appDetailGPA').text(app.gpa);
        $('#appDetailSubmitDate').text(app.date);

        $('#appDetailStatus')
            .text(app.statusText)
            .attr('class', 'detail-value')
            .css('color', app.status === 'approved' ? '#065f46' : '#92400e');

        $('#approvalNote').toggle(app.status === 'approved');
        $('#pendingNote').toggle(app.status !== 'approved');
    }

    function addFileToList(file, $list) {
        var icon = file.type === 'application/pdf' ? 'fa-file-pdf'
            : file.type.indexOf('image/') === 0 ? 'fa-file-image'
                : 'fa-file';

        $('<div class="uploaded-file">').html(
            '<div class="uploaded-file-info">'
            + '<i class="fas ' + icon + '"></i><span>' + file.name + '</span></div>'
            + '<button type="button" class="remove-file"><i class="fas fa-times"></i></button>'
        ).appendTo($list);
    }

    function setupFileUpload(inputId, listId) {
        var $input = $('#' + inputId);
        if (!$input.length) return;

        $input.on('change', function () {
            var files = Array.from(this.files);
            if (!files.length || !listId) return;
            var $list = $('#' + listId);
            if ($list.length) {
                $.each(files, function (_, file) { addFileToList(file, $list); });
            }
        });
    }


    $(function () {
        renderApplications();
        renderScholarships();

        $(document).on('click', '.view-toggle-btn', function () {
            $('.view-toggle-btn').removeClass('active');
            $(this).addClass('active');
            renderScholarships($(this).data('view'));
        });

        $(document).on('click', '.filter-tab', function () {
            $('.filter-tab').removeClass('active');
            $(this).addClass('active');

            var filter = $(this).data('filter');
            $('.application-card').each(function () {
                var show = filter === 'all'
                    || (filter === 'pending' && $(this).hasClass('status-pending'))
                    || (filter === 'approved' && $(this).hasClass('status-approved'));
                $(this).toggle(show);
            });
        });

        $(document).on('click', '.scholarship-card .btn-details, .scholarship-table .btn-details', function () {
            var $parent = $(this).closest('.scholarship-card, tr[data-scholarship-id]');
            var id = parseInt($parent.data('scholarship-id'), 10);
            var scholarship = $.grep(scholarshipData.availableScholarships, function (s) { return s.id === id; })[0];
            if (scholarship) openDetailModal(scholarship);
        });

        $(document).on('click', '.btn-apply:not(.disabled)', function () {
            var $card = $(this).closest('.scholarship-card, tr[data-scholarship-id]');
            if ($card.length) {
                openApplyModal(parseInt($card.data('scholarship-id'), 10));
            }
        });

        $(document).on('click', '.application-card .btn-action', function () {
            var $btn = $(this);
            var appId = parseInt($btn.closest('.application-card').data('app-id'), 10);
            var app = $.grep(scholarshipData.myApplications, function (a) { return a.id === appId; })[0];
            if (app && $btn.text().indexOf('Xem chi tiết') !== -1) {
                openApplicationDetailModal(app);
            }
        });

        $(document).on('click', '.remove-file', function () {
            $(this).closest('.uploaded-file').remove();
        });

        setupFileUpload('applyFileInput', 'uploadedFilesList');
        setupFileUpload('editFileInput', null);
    });

})(jQuery);