; (function ($) {
    'use strict';

    //  Data demo
    var debtData = {
        fees: {
            summary: { totalDebt: 1000000 },
            items: [
                { stt: 1, year: "2024 - 2025", dot: "", code: "TN", name: "Học phí tốt nghiệp", amount: 1000000, required: true, paymentDate: null, paid: 0, debt: 1000000 },
                { stt: 2, year: "2025 - 2026", dot: "", code: "BHYT2026", name: "Thu bảo hiểm y tế năm 2026", amount: 632000, required: false, paymentDate: "16/12/2025", paid: 632000, debt: 0 }
            ]
        },
        tuition: {
            summary: { totalRegistered: 55890000 },
            groups: [
                {
                    name: "2025_HK2 (2025 - 2026)", semester: "HK2 (2025 - 2026)",
                    items: [
                        { stt: 1, code: "4203001549", classCode: "420300154901", name: "Kiến trúc và Thiết kế Phần mềm", credits: 4, initialFee: 3380000, discount: 0, discountAmount: 0, payAmount: 3380000, status: "Đăng ký mới", paymentDate: "11/12/2025", paid: 3380000, deduction: 0, debtReduction: 0, debt: 0, paidStatus: true, noDebtTracking: true },
                        { stt: 2, code: "4203003147", classCode: "420300314705", name: "Công nghệ mới trong phát triển ứng dụng CNTT", credits: 3, initialFee: 2630000, discount: 0, discountAmount: 0, payAmount: 2630000, status: "Đăng ký mới", paymentDate: "11/12/2025", paid: 2630000, deduction: 0, debtReduction: 0, debt: 0, paidStatus: true, noDebtTracking: true },
                        { stt: 3, code: "4203003098", classCode: "420300309801", name: "Thực tập doanh nghiệp", credits: 5, initialFee: 3750000, discount: 0, discountAmount: 0, payAmount: 3750000, status: "Đăng ký mới", paymentDate: "07/01/2026", paid: 3750000, deduction: 0, debtReduction: 0, debt: 0, paidStatus: true, noDebtTracking: true }
                    ]
                }
            ]
        },
        courses: {
            groups: [
                {
                    name: "2025_HK2 (2025 - 2026)", semester: "HK2 (2025 - 2026)",
                    items: [
                        { stt: 1, code: "001549", classCode: "420300154901", unitPrice: 750000, name: "Kiến trúc và Thiết kế Phần mềm", credits: 4, registerDate: "31/10/2025 07:57", registerStatus: "Xóa bỏ đăng ký", classStatus: "Đã khóa", initialFee: 3380000, discount: 0, payAmount: 3380000, noDebtTracking: false, paid: 0, hasGrade: false, debt: 0 },
                        { stt: 2, code: "003147", classCode: "420300314705", unitPrice: 750000, name: "Công nghệ mới trong phát triển ứng dụng CNTT", credits: 3, registerDate: "31/10/2025 07:54", registerStatus: "Đăng ký mới", classStatus: "Đã khóa", initialFee: 2630000, discount: 0, payAmount: 2630000, noDebtTracking: false, paid: 0, hasGrade: false, debt: 0 },
                        { stt: 3, code: "003098", classCode: "420300309801", unitPrice: 750000, name: "Thực tập doanh nghiệp", credits: 5, registerDate: "08/11/2025 17:39", registerStatus: "Xóa bỏ đăng ký", classStatus: "Đã khóa", initialFee: 3750000, discount: 0, payAmount: 3750000, noDebtTracking: false, paid: 0, hasGrade: false, debt: 0 },
                        { stt: 4, code: "001549", classCode: "420300154901", unitPrice: 750000, name: "Kiến trúc và Thiết kế Phần mềm", credits: 4, registerDate: "08/11/2025 08:25", registerStatus: "Đăng ký mới", classStatus: "Đã khóa", initialFee: 3380000, discount: 0, payAmount: 3380000, noDebtTracking: false, paid: 0, hasGrade: false, debt: 0 },
                        { stt: 5, code: "003098", classCode: "420300309801", unitPrice: 750000, name: "Thực tập doanh nghiệp", credits: 5, registerDate: "07/01/2026 14:08", registerStatus: "Đăng ký mới", classStatus: "Đã khóa", initialFee: 3750000, discount: 0, payAmount: 3750000, noDebtTracking: false, paid: 0, hasGrade: false, debt: 0 }
                    ]
                }
            ]
        },
        debtList: {
            items: [
                { stt: 1, dot: "HK1 (2022 - 2023)", classCode: "420301416477", name: "Triết học Mác - Lênin", paid: 2250000, debtReduction: 270000 },
                { stt: 2, dot: "HK1 (2022 - 2023)", classCode: "420300325966", name: "Toán cao cấp 1", paid: 1500000, debtReduction: 180000 },
                { stt: 3, dot: "HK1 (2022 - 2023)", classCode: "420300200907", name: "Nhập môn Tin học", paid: 1500000, debtReduction: 180000 },
                { stt: 4, dot: "HK1 (2022 - 2023)", classCode: "420300319249", name: "Kỹ năng làm việc nhóm", paid: 1500000, debtReduction: 180000 },
                { stt: 5, dot: "HK1 (2022 - 2023)", classCode: "420300324283", name: "Giáo dục Quốc phòng và An ninh 1", paid: 3000000, debtReduction: 360000 },
                { stt: 6, dot: "HK1 (2022 - 2023)", classCode: "420300330741", name: "Giáo dục thể chất 1", paid: 1500000, debtReduction: 180000 },
                { stt: 7, dot: "HK2 (2022 - 2023)", classCode: "420300330680", name: "Giáo dục thể chất 2", paid: 1500000, debtReduction: 180000 },
                { stt: 8, dot: "HK2 (2022 - 2023)", classCode: "420300335479", name: "Giáo dục quốc phòng và an ninh 2", paid: 3000000, debtReduction: 360000 },
                { stt: 9, dot: "HK2 (2022 - 2023)", classCode: "420301416532", name: "Kinh tế chính trị Mác - Lênin", paid: 1500000, debtReduction: 180000 },
                { stt: 10, dot: "HK2 (2022 - 2023)", classCode: "420300213708", name: "Hệ thống Máy tính", paid: 3400000, debtReduction: 270000 },
                { stt: 11, dot: "HK2 (2022 - 2023)", classCode: "420300332075", name: "Phương pháp tính", paid: 2250000, debtReduction: 270000 },
                { stt: 12, dot: "HK2 (2022 - 2023)", classCode: "420300105809", name: "Mạng máy tính", paid: 2250000, debtReduction: 270000 },
                { stt: 13, dot: "HK2 (2022 - 2023)", classCode: "420300094102", name: "Kỹ thuật lập trình", paid: 2650000, debtReduction: 180000 }
            ]
        },
        debtDetail: {
            items: [
                { stt: 1, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 360000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 2, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 3, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 4, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 5, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 6, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 270000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 7, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 8, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 360000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 9, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 180000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 10, dot: "HK1 (2023 - 2024)", classCode: "420300094205", name: "Cấu trúc dữ liệu và giải thuật", deduction: 270000, receiptNo: "-6479", executor: "Nguyễn Thị Hiền", date: "18/07/2023" },
                { stt: 11, dot: "HK1 (2023 - 2024)", classCode: "420300094206", name: "Lập trình hướng đối tượng", deduction: 360000, receiptNo: "-6480", executor: "Trần Văn An", date: "20/07/2023" },
                { stt: 12, dot: "HK1 (2023 - 2024)", classCode: "420300094206", name: "Lập trình hướng đối tượng", deduction: 180000, receiptNo: "-6480", executor: "Trần Văn An", date: "20/07/2023" },
                { stt: 13, dot: "HK1 (2023 - 2024)", classCode: "420300094206", name: "Lập trình hướng đối tượng", deduction: 180000, receiptNo: "-6480", executor: "Trần Văn An", date: "20/07/2023" }
            ]
        },
        unpaidFees: [
            { id: 1, category: "Khoản thu khác", categoryType: "other-fees", name: "Học phí tốt nghiệp", semester: "2024 - 2025", amount: 1000000, deadline: "31/03/2026" },
            { id: 2, category: "Học phí", categoryType: "tuition", name: "Nhập môn an toàn thông tin", semester: "HK2 (2025 - 2026)", amount: 2500000, deadline: "15/02/2026" },
            { id: 3, category: "Khoản thu khác", categoryType: "other-fees", name: "Lệ phí thi lại môn Cấu trúc dữ liệu", semester: "HK1 (2025 - 2026)", amount: 150000, deadline: "28/02/2026" }
        ]
    };

    //state
    var pagination = {
        debtList: { currentPage: 1, itemsPerPage: 10 },
        debtDetail: { currentPage: 1, itemsPerPage: 10 }
    };

    function fmt(amount) {
        return amount.toLocaleString('vi-VN');
    }


    function toggleGroup($header) {
        var groupName = $header.data('group');
        var $rows = $('tr[data-group="' + groupName + '"]').not('.group-header');

        if ($header.hasClass('collapsed')) {
            $rows.removeClass('hidden');
            $header.removeClass('collapsed');
        } else {
            $rows.addClass('hidden');
            $header.addClass('collapsed');
        }
    }

    function renderUnpaidFeesTable() {
        var $tbody = $('#unpaid-table-body');
        if (!$tbody.length) return;

        var fees = debtData.unpaidFees || [];

        if (fees.length === 0) {
            $tbody.html(
                '<tr><td colspan="6" class="unpaid-empty">' +
                '<div class="unpaid-empty-text">Không có khoản nào chưa thanh toán</div>' +
                '</td></tr>'
            );
            $('#unpaid-total-display').text('0₫');
            return;
        }

        var total = fees.reduce(function (s, f) { return s + f.amount; }, 0);

        var rows = $.map(fees, function (fee, i) {
            return '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td><span class="unpaid-category ' + fee.categoryType + '">' + fee.category + '</span></td>' +
                '<td>' + fee.name + '</td>' +
                '<td>' + fee.semester + '</td>' +
                '<td style="text-align:right"><span class="unpaid-amount">' + fmt(fee.amount) + '₫</span></td>' +
                '<td style="text-align:center"><span class="unpaid-deadline">' + fee.deadline + '</span></td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
        $('#unpaid-total-display').text(fmt(total) + '₫');
    }

    function renderFeesTable() {
        var $tbody = $('#fees table tbody');
        if (!$tbody.length) return;

        var items = debtData.fees.items;
        var totalAmount = items.reduce(function (s, i) { return s + i.amount; }, 0);
        var totalPaid = items.reduce(function (s, i) { return s + i.paid; }, 0);
        var totalDebt = items.reduce(function (s, i) { return s + i.debt; }, 0);

        var html =
            '<tr class="total-row">' +
            '<td></td><td colspan="4"></td>' +
            '<td style="text-align:right">' + fmt(totalAmount) + '</td>' +
            '<td></td><td></td>' +
            '<td style="text-align:right">' + fmt(totalPaid) + '</td>' +
            '<td style="text-align:right" class="amount-negative">' + fmt(totalDebt) + '</td>' +
            '<td></td>' +
            '</tr>';

        $.each(items, function (_, item) {
            var reqIcon = item.required
                ? '<span class="status-badge paid"><i class="fas fa-check-circle"></i></span>'
                : '<span class="status-badge unpaid"><i class="fas fa-times-circle"></i></span>';
            var dateText = item.paymentDate || '-';
            var paidClass = item.paid > 0 ? 'amount-positive' : 'amount-zero';
            var debtClass = item.debt > 0 ? 'amount-negative' : 'amount-zero';

            html +=
                '<tr>' +
                '<td>' + item.stt + '</td>' +
                '<td>' + item.year + '</td>' +
                '<td>' + item.dot + '</td>' +
                '<td>' + item.code + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td style="text-align:right">' + fmt(item.amount) + '</td>' +
                '<td style="text-align:center">' + reqIcon + '</td>' +
                '<td style="text-align:center">' + dateText + '</td>' +
                '<td style="text-align:right" class="' + paidClass + '">' + fmt(item.paid) + '</td>' +
                '<td style="text-align:right" class="' + debtClass + '">' + fmt(item.debt) + '</td>' +
                '</tr>';
        });

        $tbody.html(html);
    }

    function renderTuitionTable() {
        var $tbody = $('#tuition table tbody');
        if (!$tbody.length) return;

        var html = '';
        var globalStt = 0;

        $.each(debtData.tuition.groups, function (gi, group) {
            var groupId = 'tuition-group-' + (gi + 1);

            html +=
                '<tr class="group-header" data-group="' + groupId + '">' +
                '<td colspan="18"><i class="fas fa-chevron-down toggle-icon"></i> Đợt: ' + group.name + '</td>' +
                '</tr>';

            var t = { credits: 0, initialFee: 0, discountAmount: 0, payAmount: 0, paid: 0, deduction: 0, debtReduction: 0 };

            $.each(group.items, function (_, item) {
                globalStt++;
                t.credits += item.credits;
                t.initialFee += item.initialFee;
                t.discountAmount += item.discountAmount;
                t.payAmount += item.payAmount;
                t.paid += item.paid;
                t.deduction += item.deduction;
                t.debtReduction += item.debtReduction;

                var statusIcon = item.paidStatus
                    ? '<span class="status-icon"><i class="fas fa-check-circle" style="color:#4caf50"></i></span>'
                    : '<span class="status-icon"><i class="fas fa-times-circle" style="color:#f44336"></i></span>';
                var noDebtIcon = item.noDebtTracking
                    ? '<span class="status-icon"><i class="fas fa-check-square" style="color:#4caf50"></i></span>'
                    : '<span class="status-icon"><i class="fas fa-square" style="color:#999"></i></span>';

                html +=
                    '<tr class="group-row" data-group="' + groupId + '">' +
                    '<td>' + globalStt + '</td>' +
                    '<td>' + group.semester + '</td>' +
                    '<td>' + item.code + '</td>' +
                    '<td>' + item.classCode + '</td>' +
                    '<td>' + item.name + '</td>' +
                    '<td style="text-align:center">' + item.credits + '</td>' +
                    '<td style="text-align:right">' + fmt(item.initialFee) + '</td>' +
                    '<td style="text-align:center">' + (item.discount || '-') + '</td>' +
                    '<td style="text-align:right">' + fmt(item.discountAmount) + '</td>' +
                    '<td style="text-align:right">' + fmt(item.payAmount) + '</td>' +
                    '<td><span class="status-badge registered">' + item.status + '</span></td>' +
                    '<td style="text-align:center">' + item.paymentDate + '</td>' +
                    '<td style="text-align:right" class="amount-positive">' + fmt(item.paid) + '</td>' +
                    '<td style="text-align:right">' + fmt(item.deduction) + '</td>' +
                    '<td style="text-align:right">' + fmt(item.debtReduction) + '</td>' +
                    '<td style="text-align:right" class="amount-zero">' + fmt(item.debt) + '</td>' +
                    '<td style="text-align:center">' + statusIcon + '</td>' +
                    '<td style="text-align:center">' + noDebtIcon + '</td>' +
                    '</tr>';
            });

            html +=
                '<tr class="total-row group-row" data-group="' + groupId + '">' +
                '<td></td><td colspan="4"></td>' +
                '<td style="text-align:center">' + t.credits + '</td>' +
                '<td style="text-align:right">' + fmt(t.initialFee) + '</td>' +
                '<td></td>' +
                '<td style="text-align:right">' + fmt(t.discountAmount) + '</td>' +
                '<td style="text-align:right">' + fmt(t.payAmount) + '</td>' +
                '<td></td><td></td>' +
                '<td style="text-align:right">' + fmt(t.paid) + '</td>' +
                '<td style="text-align:right">' + fmt(t.deduction) + '</td>' +
                '<td style="text-align:right">' + fmt(t.debtReduction) + '</td>' +
                '<td style="text-align:right">0</td>' +
                '<td></td><td></td>' +
                '</tr>';
        });

        $tbody.html(html);
    }

    function renderCoursesTable() {
        var $tbody = $('#courses table tbody');
        if (!$tbody.length) return;

        var html = '';
        var globalStt = 0;

        $.each(debtData.courses.groups, function (gi, group) {
            var groupId = 'courses-group-' + (gi + 1);

            html +=
                '<tr class="group-header" data-group="' + groupId + '">' +
                '<td colspan="17"><i class="fas fa-chevron-down toggle-icon"></i> Đợt: ' + group.name + '</td>' +
                '</tr>';

            var t = { credits: 0, initialFee: 0, discount: 0, payAmount: 0, paid: 0, debt: 0 };

            $.each(group.items, function (_, item) {
                globalStt++;
                t.credits += item.credits;
                t.initialFee += item.initialFee;
                t.discount += item.discount;
                t.payAmount += item.payAmount;
                t.paid += item.paid;
                t.debt += item.debt;

                var badgeClass = item.registerStatus === 'Đăng ký mới' ? 'registered' : 'unpaid';
                var noDebtIcon = item.noDebtTracking
                    ? '<i class="fas fa-check" style="color:#4caf50"></i>'
                    : '<i class="fas fa-times" style="color:#999"></i>';
                var gradeIcon = item.hasGrade
                    ? '<i class="fas fa-check" style="color:#4caf50"></i>'
                    : '<i class="fas fa-times" style="color:#999"></i>';

                html +=
                    '<tr class="group-row" data-group="' + groupId + '">' +
                    '<td>' + globalStt + '</td>' +
                    '<td>' + group.semester + '</td>' +
                    '<td>' + item.code + '</td>' +
                    '<td>' + item.classCode + '</td>' +
                    '<td style="text-align:right">' + fmt(item.unitPrice) + '</td>' +
                    '<td>' + item.name + '</td>' +
                    '<td style="text-align:center">' + item.credits + '</td>' +
                    '<td style="text-align:center">' + item.registerDate + '</td>' +
                    '<td><span class="status-badge ' + badgeClass + '">' + item.registerStatus + '</span></td>' +
                    '<td><span class="status-badge">' + item.classStatus + '</span></td>' +
                    '<td style="text-align:right">' + fmt(item.initialFee) + '</td>' +
                    '<td style="text-align:right">' + fmt(item.discount) + '</td>' +
                    '<td style="text-align:right">' + fmt(item.payAmount) + '</td>' +
                    '<td style="text-align:center">' + noDebtIcon + '</td>' +
                    '<td style="text-align:right" class="amount-zero">' + fmt(item.paid) + '</td>' +
                    '<td style="text-align:center">' + gradeIcon + '</td>' +
                    '<td style="text-align:right" class="amount-zero">' + fmt(item.debt) + '</td>' +
                    '</tr>';
            });

            html +=
                '<tr class="total-row group-row" data-group="' + groupId + '">' +
                '<td></td><td colspan="5"></td>' +
                '<td style="text-align:center">' + t.credits + '</td>' +
                '<td colspan="3"></td>' +
                '<td style="text-align:right">' + fmt(t.initialFee) + '</td>' +
                '<td style="text-align:right">' + fmt(t.discount) + '</td>' +
                '<td style="text-align:right">' + fmt(t.payAmount) + '</td>' +
                '<td></td>' +
                '<td style="text-align:right">' + fmt(t.paid) + '</td>' +
                '<td></td>' +
                '<td style="text-align:right">' + fmt(t.debt) + '</td>' +
                '</tr>';
        });

        $tbody.html(html);
    }

    function renderDebtListTable(page) {
        page = page || 1;
        var $tbody = $('#deductions .table-section:first-child table tbody');
        if (!$tbody.length) return;

        var items = debtData.debtList.items;
        var ipp = pagination.debtList.itemsPerPage;
        var totalPages = Math.ceil(items.length / ipp);

        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        pagination.debtList.currentPage = page;

        var start = (page - 1) * ipp;
        var end = Math.min(start + ipp, items.length);
        var pageItems = items.slice(start, end);

        var totalPaid = items.reduce(function (s, i) { return s + i.paid; }, 0);
        var totalReduction = items.reduce(function (s, i) { return s + i.debtReduction; }, 0);

        var rows = $.map(pageItems, function (item) {
            return '<tr>' +
                '<td>' + item.stt + '</td>' +
                '<td>' + item.dot + '</td>' +
                '<td>' + item.classCode + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td style="text-align:right" class="amount-positive">' + fmt(item.paid) + '</td>' +
                '<td style="text-align:right">' + fmt(item.debtReduction) + '</td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
        $('#debt-list-total-paid').text(fmt(totalPaid));
        $('#debt-list-total-reduction').text(fmt(totalReduction));
        updatePagination('debt-list', page, totalPages, start + 1, end, items.length);
    }

    function renderDebtDetailTable(page) {
        page = page || 1;
        var $tbody = $('#deductions .table-section:last-child table tbody');
        if (!$tbody.length) return;

        var items = debtData.debtDetail.items;
        var ipp = pagination.debtDetail.itemsPerPage;
        var totalPages = Math.ceil(items.length / ipp);

        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        pagination.debtDetail.currentPage = page;

        var start = (page - 1) * ipp;
        var end = Math.min(start + ipp, items.length);
        var pageItems = items.slice(start, end);

        var totalDeduction = items.reduce(function (s, i) { return s + i.deduction; }, 0);

        var rows = $.map(pageItems, function (item) {
            return '<tr>' +
                '<td>' + item.stt + '</td>' +
                '<td>' + item.dot + '</td>' +
                '<td>' + item.classCode + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td style="text-align:right">' + fmt(item.deduction) + '</td>' +
                '<td>' + item.receiptNo + '</td>' +
                '<td>' + item.executor + '</td>' +
                '<td style="text-align:center">' + item.date + '</td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
        $('#debt-detail-total-deduction').text(fmt(totalDeduction));
        updatePagination('debt-detail', page, totalPages, start + 1, end, items.length);
    }

    function updatePagination(prefix, currentPage, totalPages, startItem, endItem, totalItems) {
        $('#' + prefix + '-pagination-info').text(startItem + ' - ' + endItem + ' của ' + totalItems);

        var $sel = $('#' + prefix + '-page-select').empty();
        for (var i = 1; i <= totalPages; i++) {
            $('<option>', { value: i, text: i, selected: i === currentPage }).appendTo($sel);
        }

        $('#' + prefix + '-first-btn').prop('disabled', currentPage === 1);
        $('#' + prefix + '-prev-btn').prop('disabled', currentPage === 1);
        $('#' + prefix + '-next-btn').prop('disabled', currentPage === totalPages);
        $('#' + prefix + '-last-btn').prop('disabled', currentPage === totalPages);
    }

    function initPaginationHandlers() {
        $('#debt-list-first-btn').on('click', function () { renderDebtListTable(1); });
        $('#debt-list-prev-btn').on('click', function () { renderDebtListTable(pagination.debtList.currentPage - 1); });
        $('#debt-list-next-btn').on('click', function () { renderDebtListTable(pagination.debtList.currentPage + 1); });
        $('#debt-list-last-btn').on('click', function () {
            renderDebtListTable(Math.ceil(debtData.debtList.items.length / pagination.debtList.itemsPerPage));
        });
        $('#debt-list-page-select').on('change', function () {
            renderDebtListTable(parseInt($(this).val(), 10));
        });

        $('#debt-detail-first-btn').on('click', function () { renderDebtDetailTable(1); });
        $('#debt-detail-prev-btn').on('click', function () { renderDebtDetailTable(pagination.debtDetail.currentPage - 1); });
        $('#debt-detail-next-btn').on('click', function () { renderDebtDetailTable(pagination.debtDetail.currentPage + 1); });
        $('#debt-detail-last-btn').on('click', function () {
            renderDebtDetailTable(Math.ceil(debtData.debtDetail.items.length / pagination.debtDetail.itemsPerPage));
        });
        $('#debt-detail-page-select').on('change', function () {
            renderDebtDetailTable(parseInt($(this).val(), 10));
        });
    }

    function initScrollIndicators() {
        $('.data-table-wrapper')
            .on('scroll', function () {
                var $w = $(this);
                var atEnd = $w.scrollLeft() + $w.innerWidth() >= $w[0].scrollWidth - 10;
                $w.toggleClass('scrolled-to-end', atEnd);
            })
            .each(function () {
                var $w = $(this);
                $w.toggleClass('scrolled-to-end', $w.scrollLeft() + $w.innerWidth() >= $w[0].scrollWidth - 10);
            });
    }

    $(function () {
        renderUnpaidFeesTable();
        renderFeesTable();
        renderTuitionTable();
        renderCoursesTable();
        renderDebtListTable();
        renderDebtDetailTable();
        initPaginationHandlers();
        initScrollIndicators();

        $(document).on('click', '.group-header', function () {
            toggleGroup($(this));
        });


        $(document).on('click', '.tab-btn', function () {
            var tabId = $(this).data('tab');
            $('.tab-btn').removeClass('active');
            $('.tab-content').removeClass('active');
            $(this).addClass('active');
            $('#' + tabId).addClass('active');
        });
    });

})(jQuery);