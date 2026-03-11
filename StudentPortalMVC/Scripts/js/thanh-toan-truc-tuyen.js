$(function () {

    let countdownInterval;

    function toggleSelect(button) {

        const row = $(button).closest("tr");
        const isSelected = row.hasClass("selected");

        if (isSelected) {
            row.removeClass("selected");
            $(button).removeClass("selected").html('<i class="fas fa-arrow-right"></i>');
        } else {
            row.addClass("selected");
            $(button).addClass("selected").html('<i class="fas fa-check"></i>');
        }

        updateSelectedItems();
    }

    function updateSelectedItems() {

        const selectedRows = $("tbody tr.selected");
        const allRows = $("tbody tr");

        const selectedItemsList = $("#selectedItemsList");
        const selectedCount = $("#selectedCount");
        const selectedItemsTotal = $("#selectedItemsTotal");
        const selectedTotalAmount = $("#selectedTotalAmount");
        const selectAllBtn = $(".select-all-btn");

        selectedCount.text(selectedRows.length);
        selectedItemsList.empty();

        if (selectedRows.length === allRows.length && allRows.length > 0) {
            selectAllBtn.text("Bỏ chọn tất cả").addClass("btn-removeAll").removeClass("btn-disabled");
        } else {
            selectAllBtn.text("Chọn tất cả").removeClass("btn-removeAll btn-disabled selected");
        }

        let total = 0;

        if (selectedRows.length === 0) {

            selectedItemsList.html(`
                <div class="empty-selection">
                    <i class="fas fa-shopping-cart"></i>
                    <div>Chưa chọn khoản nào</div>
                </div>
            `);

            $("#paymentBtn").prop("disabled", true);
            selectedItemsTotal.hide();

        } else {

            $("#paymentBtn").prop("disabled", false);
            selectedItemsTotal.show();

            selectedRows.each(function () {

                const amount = parseInt($(this).data("amount"));
                const code = $(this).data("code");
                const name = $(this).data("name");

                total += amount;

                selectedItemsList.append(`
                    <div class="selected-item" data-code="${code}">
                        <div class="selected-item-info">
                            <div class="selected-item-name">${name}</div>
                            <div class="selected-item-code">Mã: ${code}</div>
                        </div>
                        <div class="selected-item-amount">${amount.toLocaleString("vi-VN")}₫</div>
                        <button class="remove-item-btn" data-code="${code}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `);
            });

            selectedTotalAmount.text(total.toLocaleString("vi-VN") + "₫");
        }

        return total;
    }

    function selectAllItems() {

        const allRows = $("tbody tr");

        const allSelected = allRows.toArray().every(row =>
            $(row).hasClass("selected")
        );

        allRows.each(function () {

            const button = $(this).find(".select-btn");
            const isSelected = $(this).hasClass("selected");

            if (allSelected) {

                if (isSelected) {
                    $(this).removeClass("selected");
                    button.removeClass("selected")
                        .html('<i class="fas fa-arrow-right"></i>');
                }

            } else {

                if (!isSelected) {
                    $(this).addClass("selected");
                    button.addClass("selected")
                        .html('<i class="fas fa-check"></i>');
                }

            }

        });

        updateSelectedItems();
    }

    function calculateTotal() {

        let total = 0;

        $("tbody tr.selected").each(function () {
            total += parseInt($(this).data("amount"));
        });

        return total;
    }

    function startCountdown() {

        let minutes = 30;
        let seconds = 0;

        clearInterval(countdownInterval);

        countdownInterval = setInterval(function () {

            if (seconds === 0) {

                if (minutes === 0) {

                    clearInterval(countdownInterval);
                    alert("Giao dịch đã hết hạn!");
                    closeModal();
                    return;
                }

                minutes--;
                seconds = 59;

            } else {
                seconds--;
            }

            $("#minutes").text(minutes.toString().padStart(2, "0"));
            $("#seconds").text(seconds.toString().padStart(2, "0"));

        }, 1000);
    }

    window.closeModal = function () {
        $("#qrModal").removeClass("active");
    };

    window.copyToClipboard = function (text) {

        navigator.clipboard.writeText(text).then(function () {
            alert("Đã sao chép: " + text);
        });
    };

    $(document).on("click", ".select-btn", function () {
        toggleSelect(this);
    });

    $(document).on("click", ".remove-item-btn", function () {

        const code = $(this).data("code");
        const row = $(`tbody tr[data-code="${code}"]`);

        if (row.length) {
            toggleSelect(row.find(".select-btn"));
        }

    });

    $(".select-all-btn").click(function () {
        selectAllItems();
    });

    $(".method-option").click(function () {

        $(".method-option").removeClass("selected");

        $(this).addClass("selected");

        $(this).find("input[type='radio']").prop("checked", true);

        const method = $(this).data("method");

        const btnText = {
            vietqr: '<i class="fas fa-qrcode"></i> Thanh toán QR-Code'
        };

        $("#paymentBtn").html(btnText[method]);
    });

    $("#paymentBtn").click(function () {

        if ($(this).prop("disabled")) return;

        const total = calculateTotal();

        $("#totalPayment").text(
            total.toLocaleString("vi-VN") + " VNĐ"
        );

        startCountdown();
    });

    //$("tbody tr.selected").removeClass("selected");

    //$(".select-btn").removeClass("selected")
    //    .html('<i class="fas fa-arrow-right"></i>');

    //updateSelectedItems();

});