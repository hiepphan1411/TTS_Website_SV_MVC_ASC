; (function ($) {
    'use strict';

    // Deta demo
    var paymentData = [
        { id: 1, type: 'room_fee', name: 'Tiền phòng', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '01', nam: '2026', amount: 200000 },
        { id: 2, type: 'room_fee', name: 'Tiền phòng', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '02', nam: '2026', amount: 200000 },
        { id: 3, type: 'room_fee', name: 'Tiền phòng', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '03', nam: '2026', amount: 200000 },
        { id: 4, type: 'room_fee', name: 'Tiền phòng', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '04', nam: '2026', amount: 200000 },
        { id: 5, type: 'internet_fee', name: 'Tiền internet', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '01', nam: '2026', amount: 50000 },
        { id: 6, type: 'internet_fee', name: 'Tiền internet', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '02', nam: '2026', amount: 50000 },
        { id: 7, type: 'electricity_fee', name: 'Tiền điện', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '01', nam: '2026', amount: 120000 },
        { id: 8, type: 'water_fee', name: 'Tiền nước', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '01', nam: '2026', amount: 80000 },
        { id: 9, type: 'laundry_fee', name: 'Tiền giặt sấy', coSo: 'Cơ sở 1', dayNha: 'Dãy A', tang: 'Tầng 2', phong: 'A201', giuong: 'G01', thang: '01', nam: '2026', amount: 30000 }
    ];

    var countdownInterval;

    function renderPaymentTable(filterType) {
        var $tbody = $('#tableBody');
        if (!$tbody.length) return;

        var data = filterType
            ? $.grep(paymentData, function (item) { return item.type === filterType; })
            : paymentData;

        var rows = $.map(data, function (item, index) {
            return '<tr data-id="' + item.id + '" data-name="' + item.name + '" data-amount="' + item.amount + '" data-thang="' + item.thang + '" data-nam="' + item.nam + '">' +
                '<td class="text-center">' + (index + 1) + '</td>' +
                '<td class="ps-2">' + item.name + '</td>' +
                '<td class="text-center">' + item.coSo + '</td>' +
                '<td class="text-center">' + item.dayNha + '</td>' +
                '<td class="text-center">' + item.tang + '</td>' +
                '<td class="text-center">' + item.phong + '</td>' +
                '<td class="text-center">' + item.giuong + '</td>' +
                '<td class="text-center">' + item.thang + '/' + item.nam + '</td>' +
                '<td class="text-end text-danger fw-bold">' + item.amount.toLocaleString('vi-VN') + '</td>' +
                '<td class="action-cell"><button class="select-btn"><i class="fas fa-arrow-right"></i></button></td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
    }

    function toggleSelect($btn) {
        var $row = $btn.closest('tr');
        var isSelected = $row.hasClass('selected');

        if (isSelected) {
            $row.removeClass('selected');
            $btn.removeClass('selected').html('<i class="fas fa-arrow-right"></i>');
        } else {
            $row.addClass('selected');
            $btn.addClass('selected').html('<i class="fas fa-check"></i>');
        }

        updateSelectedItems();
    }

    function updateSelectedItems() {
        var $selectedRows = $('tbody tr.selected');
        var $allRows = $('tbody tr');
        var $selectAllBtn = $('.select-all-btn');

        $('#selectedCount').text($selectedRows.length);

        var allSelected = $allRows.length > 0 && $selectedRows.length === $allRows.length;
        $selectAllBtn.prop('disabled', allSelected).toggleClass('btn-disabled', allSelected);

        var $list = $('#selectedItemsList').empty();
        var $total = $('#selectedItemsTotal');

        if ($selectedRows.length === 0) {
            $list.html(
                '<div class="empty-selection">' +
                '<i class="fas fa-shopping-cart"></i>' +
                '<div>Chưa chọn khoản nào</div></div>'
            );
            $('#paymentBtn').prop('disabled', true);
            $total.hide();
            return;
        }

        $('#paymentBtn').prop('disabled', false);
        $total.css('display', 'flex');

        var sum = 0;
        $selectedRows.each(function () {
            var $row = $(this);
            var amount = parseInt($row.data('amount'), 10);
            var id = $row.data('id');
            var name = $row.data('name');
            var monthYear = $row.data('thang') + '/' + $row.data('nam');
            sum += amount;

            $list.append(
                '<div class="selected-item" data-id="' + id + '">' +
                '<div class="selected-item-info">' +
                '<div class="selected-item-name">' + name + '</div>' +
                '<div class="selected-item-code">Thời gian: ' + monthYear + '</div>' +
                '</div>' +
                '<div class="selected-item-amount">' + amount.toLocaleString('vi-VN') + '₫</div>' +
                '<button class="remove-item-btn" data-id="' + id + '"><i class="fas fa-times"></i></button>' +
                '</div>'
            );
        });

        $('#selectedTotalAmount').text(sum.toLocaleString('vi-VN') + '₫');
        return sum;
    }

    function removeSelectedItem(id) {
        var $row = $('tbody tr[data-id="' + id + '"]');
        if ($row.length) {
            toggleSelect($row.find('.select-btn'));
        }
    }

    function selectAllItems() {
        var $allRows = $('tbody tr');
        var allSelected = $allRows.length > 0 && $allRows.filter(':not(.selected)').length === 0;

        $allRows.each(function () {
            var $row = $(this);
            var $btn = $row.find('.select-btn');
            if (allSelected) {
                $row.removeClass('selected');
                $btn.removeClass('selected').html('<i class="fas fa-arrow-right"></i>');
            } else if (!$row.hasClass('selected')) {
                $row.addClass('selected');
                $btn.addClass('selected').html('<i class="fas fa-check"></i>');
            }
        });

        updateSelectedItems();

        var $methods = $('.payment-methods');
        if ($methods.length) {
            $('html, body').animate({ scrollTop: $methods.offset().top }, 400);
        }
    }

    function discardAllItems() {
        $('tbody tr').each(function () {
            $(this).removeClass('selected')
                .find('.select-btn')
                .removeClass('selected')
                .html('<i class="fas fa-arrow-right"></i>');
        });
        updateSelectedItems();
    }

    function filterByType(type) {
        discardAllItems();
        renderPaymentTable(type);
    }

    function calculateTotal() {
        var total = 0;
        $('tbody tr.selected').each(function () {
            total += parseInt($(this).data('amount'), 10);
        });
        return total;
    }

    function startCountdown() {
        var minutes = 30;
        var seconds = 0;

        clearInterval(countdownInterval);

        countdownInterval = setInterval(function () {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdownInterval);
                    alert('Giao dịch đã hết hạn!');
                    bootstrap.Modal.getInstance(document.getElementById('paymentByQRModal')).hide();
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            $('#minutes').text(String(minutes).padStart(2, '0'));
            $('#seconds').text(String(seconds).padStart(2, '0'));
        }, 1000);
    }

    $(function () {
        renderPaymentTable();
        updateSelectedItems();

        $(document).on('click', '.select-btn', function () {
            toggleSelect($(this));
        });

        $(document).on('click', '.remove-item-btn', function () {
            removeSelectedItem($(this).data('id'));
        });

        $(document).on('click', '.select-all-btn', selectAllItems);
        $(document).on('click', '#discardAll', discardAllItems);

        $(document).on('change', '.filter-dropdown', function () {
            filterByType($(this).val());
        });

        $(document).on('click', '.method-option', function () {
            $('.method-option').removeClass('selected');
            $(this).addClass('selected').find('input[type="radio"]').prop('checked', true);

            var method = $(this).data('method');
            var btnText = { vietqr: '<i class="fas fa-qrcode"></i> Thanh toán QR-Code' };
            if (btnText[method]) $('#paymentBtn').html(btnText[method]);
        });

        $('#paymentByQRModal').on('show.bs.modal', function () {
            var total = calculateTotal();
            $('#totalPayment').html('<strong style="color:#d32f2f">' + total.toLocaleString('vi-VN') + ' VNĐ</strong>');
            startCountdown();
        });

        $('#paymentByQRModal').on('hidden.bs.modal', function () {
            clearInterval(countdownInterval);
            $('#minutes').text('30');
            $('#seconds').text('00');
        });
    });

})(jQuery);