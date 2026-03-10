; (function ($) {
    'use strict';

    // State
    var allReceipts = [];
    var filteredReceipts = [];
    var currentPage = 1;
    var itemsPerPage = 5;
    var currentReceipt = null;

    function formatCurrency(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function parseDate(dateStr) {
        var parts = dateStr.split(' ')[0].split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    function loadReceiptsData() {
        var url = $('.table-container').data('url');
        $.getJSON(url)
            .done(function (data) {
                allReceipts = data.receipts;
                filteredReceipts = allReceipts.slice();
                renderTable();
                updatePagination();
            })
            .fail(function (jqxhr, textStatus, error) {
                console.error('Lỗi khi tải dữ liệu:', textStatus, error);
            });
    }

    function renderTable() {
        var $tbody = $('.receipts-table tbody').empty();
        var startIndex = (currentPage - 1) * itemsPerPage;
        var pageItems = filteredReceipts.slice(startIndex, startIndex + itemsPerPage);

        $.each(pageItems, function (index, receipt) {
            var $tr = $('<tr>').html(
                '<td class="text-center">' + (startIndex + index + 1) + '</td>' +
                '<td><span class="receipt-number">' + receipt.soPhieu + '</span></td>' +
                '<td>' + receipt.maHoaDon + '</td>' +
                '<td>' + receipt.ngayThu + '</td>' +
                '<td class="text-center"><span class="amount">' + formatCurrency(receipt.soTien) + '</span></td>' +
                '<td>' + receipt.donViThu + '</td>' +
                '<td><span class="type-badge">' + receipt.loaiHDDT + '</span></td>' +
                '<td class="text-center"><div class="action-buttons">' +
                '<button class="action-icon-btn refresh" title="Làm mới"><i class="fas fa-sync-alt"></i></button>' +
                '</div></td>' +
                '<td class="text-center"><div class="action-buttons">' +
                '<button class="action-icon-btn view" data-id="' + receipt.id + '" title="Xem chi tiết"><i class="fas fa-eye"></i></button>' +
                '</div></td>' +
                '<td class="text-center"><div class="action-buttons">' +
                '<button class="action-icon-btn history" data-id="' + receipt.id + '" title="Lịch sử"><i class="fas fa-history"></i></button>' +
                '</div></td>'
            );
            $tbody.append($tr);
        });
    }

    function updatePagination() {
        var totalPages = Math.ceil(filteredReceipts.length / itemsPerPage);
        var startIndex = (currentPage - 1) * itemsPerPage + 1;
        var endIndex = Math.min(currentPage * itemsPerPage, filteredReceipts.length);

        $('.pagination-info').text(
            'Hiển thị ' + startIndex + '-' + endIndex + ' trong tổng số ' + filteredReceipts.length + ' phiếu thu'
        );

        var $ul = $('.pagination').empty();

        $ul.append(
            '<li class="page-item"><a class="page-step" href="#" data-page="' + (currentPage - 1) + '">' +
            '<i class="fas fa-chevron-left"></i></a></li>'
        );

        var startPage = Math.max(1, currentPage - 2);
        var endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

        for (var i = startPage; i <= endPage; i++) {
            $ul.append(
                '<li class="page-item ' + (i === currentPage ? 'active' : '') + '">' +
                '<a class="page-link border-raddius-50" href="#" data-page="' + i + '">' + i + '</a></li>'
            );
        }

        $ul.append(
            '<li class="page-item"><a class="page-step" href="#" data-page="' + (currentPage + 1) + '">' +
            '<i class="fas fa-chevron-right"></i></a></li>'
        );
    }

    function changePage(page) {
        var totalPages = Math.ceil(filteredReceipts.length / itemsPerPage);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        renderTable();
        updatePagination();
    }

    // Modal chi tiết phiếu
    function showReceiptDetail(receiptId) {
        currentReceipt = null;
        $.each(allReceipts, function (_, r) {
            if (r.id === receiptId) { currentReceipt = r; return false; }
        });
        if (!currentReceipt) return;

        $('#receiptDetailModal .receipt-info-grid').html(
            '<div class="receipt-info-item">' +
            '<div class="receipt-info-label"><i class="fas fa-hashtag"></i> SỐ PHIẾU</div>' +
            '<div class="receipt-info-value primary">' + currentReceipt.soPhieu + '</div>' +
            '</div>' +
            '<div class="receipt-info-item">' +
            '<div class="receipt-info-label"><i class="fas fa-file-invoice"></i> MÃ HÓA ĐƠN</div>' +
            '<div class="receipt-info-value">' + currentReceipt.maHoaDon + '</div>' +
            '</div>' +
            '<div class="receipt-info-item">' +
            '<div class="receipt-info-label"><i class="fas fa-calendar-alt"></i> NGÀY THU</div>' +
            '<div class="receipt-info-value">' + currentReceipt.ngayThu + '</div>' +
            '</div>' +
            '<div class="receipt-info-item">' +
            '<div class="receipt-info-label"><i class="fas fa-user"></i> ĐƠN VỊ THU</div>' +
            '<div class="receipt-info-value">' + currentReceipt.donViThu + '</div>' +
            '</div>'
        );

        var $detailTbody = $('#receiptDetailModal .detail-table tbody').empty();

        $.each(currentReceipt.details, function (_, detail) {
            var amountClass = detail.soTien < 0 ? 'text-right amount negative' : 'text-right';
            $detailTbody.append(
                '<tr>' +
                '<td>' + detail.stt + '</td>' +
                '<td>' + detail.ma + '</td>' +
                '<td>' + detail.noiDungThu + '</td>' +
                '<td>' + detail.hocKy + '</td>' +
                '<td class="' + amountClass + '">' + formatCurrency(detail.soTien) + '</td>' +
                '</tr>'
            );
        });

        $detailTbody.append(
            '<tr class="total-row">' +
            '<td colspan="4" class="text-right">TỔNG CỘNG:</td>' +
            '<td class="text-right">' + formatCurrency(currentReceipt.soTien) + '</td>' +
            '</tr>'
        );

        new bootstrap.Modal(document.getElementById('receiptDetailModal')).show();
    }

    // Modal nhật ký phiếu
    function showReceiptLog(receiptId) {
        var receipt = null;
        $.each(allReceipts, function (_, r) {
            if (r.id === receiptId) { receipt = r; return false; }
        });

        if (!receipt || !receipt.logs || receipt.logs.length === 0) {
            alert('Không có nhật ký cho phiếu thu này');
            return;
        }

        var $logTbody = $('#receiptLogModal .detail-table tbody').empty();

        $.each(receipt.logs, function (_, log) {
            $logTbody.append(
                '<tr>' +
                '<td>' + log.stt + '</td>' +
                '<td>' + log.maGiaoDich + '</td>' +
                '<td>' + log.kyHieu + '</td>' +
                '<td>' + log.ngayTao + '</td>' +
                '<td>' + log.soHoaDon + '</td>' +
                '<td>' + log.trangThaiHoaDon + '</td>' +
                '<td>' + log.trangThaiKy + '</td>' +
                '<td>' + log.thongBao + '</td>' +
                '</tr>'
            );
        });

        new bootstrap.Modal(document.getElementById('receiptLogModal')).show();
    }

    function toggleFilterDropdown() {
        $('#filterDropdown').toggleClass('show');
    }

    function closeFilterDropdown() {
        $('#filterDropdown').removeClass('show');
    }

    function applyFilter() {
        var fromDate = $('#fromDate').val();
        var toDate = $('#toDate').val();
        var loaiHDDT = $('#loaiHDDT').val();

        filteredReceipts = $.grep(allReceipts, function (receipt) {
            var receiptDate = parseDate(receipt.ngayThu);
            if (fromDate && receiptDate < new Date(fromDate)) return false;
            if (toDate && receiptDate > new Date(toDate)) return false;
            if (loaiHDDT && loaiHDDT !== 'all' && receipt.loaiHDDT !== loaiHDDT) return false;
            return true;
        });

        currentPage = 1;
        renderTable();
        updatePagination();
        closeFilterDropdown();
    }

    function resetFilter() {
        $('#fromDate').val('');
        $('#toDate').val('');
        $('#loaiHDDT').val('all');

        filteredReceipts = allReceipts.slice();
        currentPage = 1;
        renderTable();
        updatePagination();
        closeFilterDropdown();
    }

    $(function () {
        loadReceiptsData();

        $(document).on('click', '.filter-wrapper .filter-btn', function (e) {
            e.stopPropagation();
            toggleFilterDropdown();
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.filter-wrapper').length) {
                closeFilterDropdown();
            }
        });

        $(document).on('click', '.filter-close-btn', closeFilterDropdown);
        $(document).on('click', '.btn-apply', applyFilter);
        $(document).on('click', '.btn-reset', resetFilter);

        $(document).on('click', '.pagination a', function (e) {
            e.preventDefault();
            changePage(parseInt($(this).data('page'), 10));
        });

        $(document).on('click', '.action-icon-btn.view', function () {
            showReceiptDetail(parseInt($(this).data('id'), 10));
        });
        $(document).on('click', '.action-icon-btn.history', function () {
            showReceiptLog(parseInt($(this).data('id'), 10));
        });
    });

})(jQuery);