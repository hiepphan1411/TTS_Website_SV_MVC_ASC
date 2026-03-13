(function ($) {
  "use strict";

  //Data demo
  var paymentData = [
    {
      id: 1,
      type: "TN",
      name: "Học phí tốt nghiệp",
      credit: null,
      obligate: true,
      amount: 1000000,
    },
    {
      id: 2,
      type: "001549",
      name: "Kiến trúc và Thiết kế Phần mềm",
      credit: 4,
      obligate: false,
      amount: 3380000,
    },
    {
      id: 3,
      type: "003147",
      name: "Công nghệ mới trong phát triển ứng dụng CNTT",
      credit: 3,
      obligate: "Tùy chọn",
      amount: 2630000,
    },
    {
      id: 4,
      type: "003098",
      name: "Thực tập doanh nghiệp",
      credit: 5,
      obligate: false,
      amount: 3750000,
    },
    {
      id: 5,
      type: "BHYT2026",
      name: "Thu bảo hiểm y tế năm 2026",
      credit: null,
      obligate: false,
      amount: 632000,
    },
  ];

  var paymentData2 = [
    {
      id: 1,
      code: "KT2301",
      name: "Thu đoàn phí năm học 2025 - 2026",
      type: "Lệ phí",
      qty: 1,
      price: 24000,
    },
    {
      id: 2,
      code: "KT2001",
      name: "Thu hội phí năm học 2025 - 2026",
      type: "Lệ phí",
      qty: 2,
      price: 24000,
    },
  ];

  var countdownInterval;

  function getServiceRows() {
    return $("#serviceTableBody tr");
  }

  function renderPaymentTable(filterType) {
    var $tbody = $("#tableBody");
    if (!$tbody.length) return;

    var data = filterType
      ? $.grep(paymentData, function (item) {
          return item.type === filterType;
        })
      : paymentData;

    var rows = $.map(data, function (item, index) {
      var badgeClass = item.obligate ? "required" : "optional";
      var badgeText = item.obligate ? "Bắt buộc" : "Tùy chọn";
      return `
        <tr data-code="${item.type}" data-name="${item.name}" data-amount="${item.amount}">
            <td class="text-center">${index + 1}</td>
            <td class="ps-2 fw-bold">${item.type}</td>
            <td class="ps-2">${item.name}</td>
            <td class="text-center">${item.credit || "-"}</td>
            <td class="text-center">
                <span class="status-badge ${badgeClass}">${badgeText}</span>
            </td>
            <td class="text-end">
                <span class="amount">${item.amount.toLocaleString("vi-VN")}</span>
            </td>
            <td class="action-cell">
                <button class="select-btn">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </td>
        </tr>
        `;
    });

    $tbody.html(rows.join(""));
  }

  function renderPaymentTableForService(filterType) {
    var $tbody = $("#serviceTableBody");
    if (!$tbody.length) return;

    var data = filterType
      ? $.grep(paymentData2, function (item) {
          return item.type === filterType;
        })
      : paymentData2;

    var rows = $.map(data, function (item, index) {
      var typeHtml =
        item.type === "Lệ phí"
          ? '<span class="status-badge required">Lệ phí</span>'
          : '<span class="status-badge optional">... phí</span>';
      var amount = item.price * item.qty;
      return `
        <tr data-code="${item.code}" data-name="${item.name}" data-amount="${amount}">
            <td class="text-center">${index + 1}</td>
            <td class="ps-2 fw-bold">${item.code}</td>
            <td class="ps-2">${item.name}</td>
            <td class="text-center">${typeHtml}</td>
            <td class="text-center">${item.qty || 0}</td>
            <td class="text-end">
                <span class="amount">${item.price.toLocaleString("vi-VN")}</span>
            </td>
            <td class="text-end">
                <span class="amount">${amount.toLocaleString("vi-VN")}</span>
            </td>
            <td class="action-cell">
                <button class="select-btn">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </td>
        </tr>
        `;
    });

    $tbody.html(rows.join(""));
  }

  function toggleSelect($btn) {
    var $row = $btn.closest("tr");
    var isSelected = $row.hasClass("selected");

    if (isSelected) {
      $row.removeClass("selected");
      $btn.removeClass("selected").html('<i class="fas fa-arrow-right"></i>');
    } else {
      $row.addClass("selected");
      $btn.addClass("selected").html('<i class="fas fa-check"></i>');
    }

    updateSelectedItems();
  }

  function updateSelectedItems() {
    var $allRows = getServiceRows();
    var $selectedRows = $allRows.filter(".selected");
    var $selectAllBtn = $(".select-all-btn");

    $("#selectedCount").text($selectedRows.length);

    if ($selectedRows.length === $allRows.length && $allRows.length > 0) {
      $selectAllBtn
        .text("Bỏ chọn tất cả")
        .addClass("btn-removeAll")
        .addClass("selected")
        .removeClass("btn-disabled");
    } else {
      $selectAllBtn
        .text("Chọn tất cả")
        .removeClass("btn-removeAll")
        .removeClass("selected");
    }

    var $list = $("#selectedItemsList").empty();
    var $total = $("#selectedItemsTotal");

    if ($selectedRows.length === 0) {
      $list.html(
        '<div class="empty-selection">' +
          '<i class="fas fa-shopping-cart"></i>' +
          "<div>Chưa chọn khoản nào</div></div>",
      );
      $("#paymentBtn").prop("disabled", true);
      $total.hide();
      return;
    }

    $("#paymentBtn").prop("disabled", false);
    $total.css("display", "flex");

    var sum = 0;
    $selectedRows.each(function () {
      var $row = $(this);
      var amount = parseInt($row.data("amount"), 10);
      var code = $row.data("code");
      var name = $row.data("name");
      sum += amount;

      $list.append(`
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

    $("#selectedTotalAmount").text(sum.toLocaleString("vi-VN") + "₫");
    return sum;
  }

  function removeSelectedItem(code) {
    var $row = $('#serviceTableBody tr[data-code="' + code + '"]');
    if ($row.length) toggleSelect($row.find(".select-btn"));
  }

  function selectAllItems() {
    var $allRows = getServiceRows();
    var allSelected =
      $allRows.length > 0 && $allRows.filter(":not(.selected)").length === 0;

    $allRows.each(function () {
      var $row = $(this);
      var $btn = $row.find(".select-btn");
      if (allSelected) {
        $row.removeClass("selected");
        $btn.removeClass("selected").html('<i class="fas fa-arrow-right"></i>');
      } else if (!$row.hasClass("selected")) {
        $row.addClass("selected");
        $btn.addClass("selected").html('<i class="fas fa-check"></i>');
      }
    });

    updateSelectedItems();
  }

  function discardAllItems() {
    getServiceRows().each(function () {
      $(this)
        .removeClass("selected")
        .find(".select-btn")
        .removeClass("selected")
        .html('<i class="fas fa-arrow-right"></i>');
    });
    updateSelectedItems();
  }

  function calculateTotal() {
    var total = 0;
    getServiceRows()
      .filter(".selected")
      .each(function () {
        total += parseInt($(this).data("amount"), 10);
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
          alert("Giao dịch đã hết hạn!");
          $("#qrModal").removeClass("active");
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      $("#minutes").text(String(minutes).padStart(2, "0"));
      $("#seconds").text(String(seconds).padStart(2, "0"));
    }, 1000);
  }

  $(function () {
    renderPaymentTable();
    renderPaymentTableForService();
    updateSelectedItems();

    $(document).on("click", ".select-btn", function () {
      toggleSelect($(this));
    });

    $(document).on("click", ".remove-item-btn", function () {
      removeSelectedItem($(this).data("code"));
    });

    $(document).on("click", ".select-all-btn", selectAllItems);
    $(document).on("click", ".discard-all-btn", discardAllItems);

    $(document).on("click", ".method-option", function () {
      $(".method-option").removeClass("selected");
      $(this)
        .addClass("selected")
        .find('input[type="radio"]')
        .prop("checked", true);

      var method = $(this).data("method");
      var btnText = {
        vietqr: '<i class="fas fa-qrcode"></i> Thanh toán QR-Code',
      };
      if (btnText[method]) $("#paymentBtn").html(btnText[method]);
    });

    $(document).on("click", "[data-copy]", function () {
      var text = $(this).data("copy");
      navigator.clipboard.writeText(text).then(function () {
        alert("Đã sao chép: " + text);
      });
    });

    $("#paymentBtn").on("click", function () {
      var total = calculateTotal();
      $("#totalPayment").text(total.toLocaleString("vi-VN") + " VNĐ");
      startCountdown();
    });
  });
})(jQuery);
