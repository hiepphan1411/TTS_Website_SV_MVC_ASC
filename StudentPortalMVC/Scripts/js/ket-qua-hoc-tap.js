(function ($) {
  "use strict";

  var academicResultsData = [
    {
      hocKy: "HK1",
      namHoc: "2022-2023",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420300200907",
          tenMonHoc: "Nhập môn Tin học",
          soTinChi: 2,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [8.5, 8.0, 9.0, 10],
            thucHanh: [],
            cuoiKy: 8.0,
            diemTK: 8.3,
            diemHe10: 8.3,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 7.8,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },

        {
          stt: 2,
          maMonHoc: "420300323966",
          tenMonHoc: "Toán cao cấp 1",
          soTinChi: 3,
          diem: {
            giuaKy: 7.5,
            thuongXuyen: [7.0, 8.0],
            thucHanh: [],
            cuoiKy: 8.5,
            diemTK: 8.0,
            diemHe10: 8.0,
            diemHe4: 3.0,
            diemChu: "B",
          },
          diemTBLop: 7.5,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.15,
        diemTrungBinhTichLuyHe10: 8.15,
        diemTrungBinhHe4: 3.52,
        diemTrungBinhTichLuyHe4: 3.45,
        tinChiDangKy: 15,
        tinChiTichLuy: 15,
        xepLoaiHocKy: "Khá",
      },
    },
    {
      hocKy: "HK2",
      namHoc: "2022-2023",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420301032589",
          tenMonHoc: "Kỹ năng giao tiếp chuyên ngành",
          soTinChi: 2,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [8.5, 9.0],
            thucHanh: [8.0, 8.5],
            cuoiKy: 8.0,
            diemTK: 8.4,
            diemHe10: 8.4,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 8.0,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
        {
          stt: 2,
          maMonHoc: "420300324383",
          tenMonHoc: "Giáo dục Quốc phòng và An ninh 1",
          soTinChi: 3,
          diem: {
            giuaKy: 9.0,
            thuongXuyen: [8.5],
            thucHanh: [8.0],
            cuoiKy: 9.0,
            diemTK: 8.8,
            diemHe10: 8.8,
            diemHe4: 4.0,
            diemChu: "A",
          },
          diemTBLop: 8.5,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.6,
        diemTrungBinhTichLuyHe10: 8.38,
        diemTrungBinhHe4: 3.89,
        diemTrungBinhTichLuyHe4: 3.75,
        tinChiDangKy: 16,
        tinChiTichLuy: 31,
        xepLoaiHocKy: "Xuất sắc",
      },
    },
    {
      hocKy: "HK1",
      namHoc: "2023-2024",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420300200907",
          tenMonHoc: "Lập trình hướng đối tượng",
          soTinChi: 3,
          diem: {
            giuaKy: 9.0,
            thuongXuyen: [9.0, 8.5],
            thucHanh: [9.0, 8.5, 9.0],
            cuoiKy: 9.0,
            diemTK: 9.0,
            diemHe10: 9.0,
            diemHe4: 4.0,
            diemChu: "A+",
          },
          diemTBLop: 8.2,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
        {
          stt: 2,
          maMonHoc: "420300200908",
          tenMonHoc: "Cấu trúc dữ liệu và giải thuật",
          soTinChi: 3,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [8.5, 9.0],
            thucHanh: [8.0, 8.5],
            cuoiKy: 9.0,
            diemTK: 8.7,
            diemHe10: 8.7,
            diemHe4: 4.0,
            diemChu: "A",
          },
          diemTBLop: 8.3,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
        {
          stt: 3,
          maMonHoc: "420300200909",
          tenMonHoc: "Cơ sở dữ liệu",
          soTinChi: 3,
          diem: {
            giuaKy: 8.0,
            thuongXuyen: [8.0, 8.5],
            thucHanh: [8.5],
            cuoiKy: 8.5,
            diemTK: 8.3,
            diemHe10: 8.3,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 7.9,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.67,
        diemTrungBinhTichLuyHe10: 8.48,
        diemTrungBinhHe4: 3.8,
        diemTrungBinhTichLuyHe4: 3.76,
        tinChiDangKy: 18,
        tinChiTichLuy: 49,
        xepLoaiHocKy: "Giỏi",
      },
    },
    {
      hocKy: "HK2",
      namHoc: "2023-2024",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420301032589",
          tenMonHoc: "Phát triển ứng dụng Web",
          soTinChi: 3,
          diem: {
            giuaKy: 4.5,
            thuongXuyen: [8.5, 8.0],
            thucHanh: [9.0, 8.5, 8.0],
            cuoiKy: 4.0,
            diemTK: 8.4,
            diemHe10: 8.4,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 8.1,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
        {
          stt: 2,
          maMonHoc: "420301032590",
          tenMonHoc: "Mạng máy tính",
          soTinChi: 3,
          diem: {
            giuaKy: 8.0,
            thuongXuyen: [8.5, 8.0],
            thucHanh: [8.0],
            cuoiKy: 8.5,
            diemTK: 8.3,
            diemHe10: 8.3,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 7.8,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
        {
          stt: 3,
          maMonHoc: "420301032591",
          tenMonHoc: "Hệ quản trị cơ sở dữ liệu",
          soTinChi: 2,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [9.0],
            thucHanh: [8.5, 9.0],
            cuoiKy: 9.0,
            diemTK: 8.8,
            diemHe10: 8.8,
            diemHe4: 4.0,
            diemChu: "A",
          },
          diemTBLop: 8.4,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.5,
        diemTrungBinhTichLuyHe10: 8.49,
        diemTrungBinhHe4: 3.9,
        diemTrungBinhTichLuyHe4: 3.82,
        tinChiDangKy: 17,
        tinChiTichLuy: 66,
        xepLoaiHocKy: "Trung bình",
      },
    },
    {
      hocKy: "HK1",
      namHoc: "2024-2025",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420301032592",
          tenMonHoc: "Công nghệ phần mềm",
          soTinChi: 3,
          diem: {
            giuaKy: 9.0,
            thuongXuyen: [9.0, 8.5],
            thucHanh: [9.0, 9.0],
            cuoiKy: 9.5,
            diemTK: 9.2,
            diemHe10: 9.2,
            diemHe4: 4.0,
            diemChu: "A+",
          },
          diemTBLop: 8.5,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
        {
          stt: 2,
          maMonHoc: "420301032593",
          tenMonHoc: "Trí tuệ nhân tạo",
          soTinChi: 3,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [9.0, 8.5],
            thucHanh: [8.5, 9.0],
            cuoiKy: 9.0,
            diemTK: 8.8,
            diemHe10: 8.8,
            diemHe4: 4.0,
            diemChu: "A",
          },
          diemTBLop: 8.3,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
        {
          stt: 3,
          maMonHoc: "420301032594",
          tenMonHoc: "Kiến trúc máy tính",
          soTinChi: 2,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [8.5, 8.0],
            thucHanh: [8.5],
            cuoiKy: 9.0,
            diemTK: 8.6,
            diemHe10: 8.6,
            diemHe4: 3.5,
            diemChu: "B+",
          },
          diemTBLop: 8.0,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.9,
        diemTrungBinhTichLuyHe10: 8.56,
        diemTrungBinhHe4: 3.89,
        diemTrungBinhTichLuyHe4: 3.8,
        tinChiDangKy: 18,
        tinChiTichLuy: 84,
        xepLoaiHocKy: "Khá",
      },
    },
    {
      hocKy: "HK2",
      namHoc: "2024-2025",
      monHoc: [
        {
          stt: 1,
          maMonHoc: "420300200907",
          tenMonHoc: "Nhập môn Tin học",
          soTinChi: 2,
          diem: {
            giuaKy: 1.0,
            thuongXuyen: [8.5, 8.5],
            thucHanh: [],
            cuoiKy: 9.0,
            diemTK: 0.0,
            diemHe10: 0.0,
            diemHe4: 0.0,
            diemChu: "F",
          },
          diemTBLop: 7.9,
          xepLoai: "Kém",
          trangThai: "Không đạt",
        },
        {
          stt: 2,
          maMonHoc: "420301032589",
          tenMonHoc: "Kỹ năng giao tiếp chuyên ngành",
          soTinChi: 2,
          diem: {
            giuaKy: 8.5,
            thuongXuyen: [8.5, 8.5],
            thucHanh: [8.0, 8.0, 7.5],
            cuoiKy: 8.0,
            diemTK: 8.1,
            diemHe10: 7.9,
            diemHe4: 3.0,
            diemChu: "B",
          },
          diemTBLop: 7.5,
          xepLoai: "Khá",
          trangThai: "Đạt",
        },
        {
          stt: 3,
          maMonHoc: "420300324383",
          tenMonHoc: "Giáo dục Quốc phòng và An ninh 1",
          soTinChi: 2,
          diem: {
            giuaKy: 6.0,
            thuongXuyen: [8.5, 8.5],
            thucHanh: [6.0],
            cuoiKy: 6.0,
            diemTK: 6.25,
            diemHe10: 6.25,
            diemHe4: 2.5,
            diemChu: "C+",
          },
          diemTBLop: 8.2,
          xepLoai: "Trung bình",
          trangThai: "Đạt",
        },
        {
          stt: 4,
          maMonHoc: "420300323966",
          tenMonHoc: "Toán cao cấp 1",
          soTinChi: 2,
          diem: {
            giuaKy: 9.0,
            thuongXuyen: [10.0, 9.0],
            thucHanh: [],
            cuoiKy: 9.0,
            diemTK: 9.3,
            diemHe10: 9.1,
            diemHe4: 4.0,
            diemChu: "A+",
          },
          diemTBLop: 8.6,
          xepLoai: "Xuất sắc",
          trangThai: "Đạt",
        },
        {
          stt: 5,
          maMonHoc: "420300323966",
          tenMonHoc: "Kinh tế chính trị Mác - Lênin",
          soTinChi: 2,
          diem: {
            giuaKy: 6,
            thuongXuyen: [10.0, 9.0],
            thucHanh: [],
            cuoiKy: 3,
            diemTK: 5.2,
            diemHe10: 5.2,
            diemHe4: 1.5,
            diemChu: "D+",
          },
          diemTBLop: 8.6,
          xepLoai: "Trung bình yếu",
          trangThai: "Đạt",
        },
      ],
      tongKetHocKy: {
        diemTrungBinhHocKy: 8.7,
        diemTrungBinhTichLuyHe10: 8.6,
        diemTrungBinhHe4: 3.7,
        diemTrungBinhTichLuyHe4: 3.75,
        tinChiDangKy: 12,
        tinChiTichLuy: 96,
        xepLoaiHocKy: "Giỏi",
      },
    },
  ];

  var overallInfo = {
    gpaTichLuy: 3.75,
    xepLoai: "Giỏi",
    tongTinChiHoanThanh: 142,
    tongTinChiYeuCau: 162,
    diemRenLuyen: 85,
    diemRenLuyenXepLoai: "Khá",
    diemTrungBinhHe10: 8.4,
  };

  // State

  var currentView = "current";
  var isInitialLoad = true;
  var currentFilter = "all";
  var currentSelectedSemesterIndex = null;
  var resizeTimer = null;

  $(function () {
    renderOverallSummary();
    renderSemesterTabs();
    renderCurrentSemester();
    populateSemesterSelect();
    initCharts();
    bindEvents();
    isInitialLoad = false;
  });

  function bindEvents() {
    $(document).on("click", ".semester-tabs .semester-tab", function () {
      $(".semester-tab").removeClass("active");
      $(this).addClass("active");

      if ($(this).data("view") === "all") {
        currentView = "all";
        currentSelectedSemesterIndex = null;
        renderAllSemesters();
        createGradeComparisonChart(academicResultsData.length - 1);
      } else {
        currentView = parseInt($(this).data("semester"), 10);
        renderSemester(currentView);
        createGradeComparisonChart(currentView);
      }
    });
    $(document).on("click", ".action-btn", function () {
      $(".action-btn").removeClass("active");
      $(this).addClass("active");

      currentFilter =
        $(this).text().trim().indexOf("Cần cải thiện") !== -1
          ? "needImprovement"
          : "all";

      if (currentView === "all") {
        renderAllSemesters();
      } else if (typeof currentView === "number") {
        renderSemester(currentView);
      }
    });

    $(document).on("change", "#semesterChartSelect", function () {
      createGradeComparisonChart(parseInt($(this).val(), 10));
    });

    $(window).on("resize.ketQuaHocTap", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var gradeChart = $("#gradeDistChart").data("kendoChart");
        if (gradeChart) gradeChart.resize(true);
        var gpaChart = $("#gpaTrendChart").data("kendoChart");
        if (gpaChart) gpaChart.resize(true);
      }, 250);
    });
  }

  // Card tổng quan
  function renderOverallSummary() {
    var $cards = $(".summary-card");

    $(".summary-card.primary .card-value").html(
      overallInfo.gpaTichLuy + '<span class="card-scale">/4.0</span>',
    );
    $(".summary-card.primary .card-badge span").text(
      "Xếp loại: " + overallInfo.xepLoai,
    );

    $cards.eq(1).find(".card-value").text(overallInfo.diemTrungBinhHe10);

    $cards
      .eq(2)
      .find(".card-value")
      .html(
        overallInfo.tongTinChiHoanThanh +
          '<span class="card-scale">/' +
          overallInfo.tongTinChiYeuCau +
          "</span>",
      );

    $cards
      .eq(3)
      .find(".card-value")
      .html(overallInfo.diemRenLuyen + '<span class="card-scale">/100</span>');

    $cards
      .eq(3)
      .find(".card-badge")
      .html(
        '<i class="fas fa-star"></i>' +
          '<span class="fw-semibold">Xếp loại: ' +
          overallInfo.diemRenLuyenXepLoai +
          "</span>",
      );
  }

  // Lọc theo học kỳ
  function renderSemesterTabs() {
    var recentSemesters = academicResultsData.slice(-3);
    var parts = [
      '<button class="btn-view-all semester-tab" data-view="all">' +
        '<i class="fas fa-list"></i><span>Xem tất cả</span></button>',
    ];

    $.each(recentSemesters, function (i, semester) {
      var isLatest = i === recentSemesters.length - 1;
      var semesterIndex = $.inArray(semester, academicResultsData);
      parts.push(
        '<button class="semester-tab' +
          (isLatest ? " active" : "") +
          '" data-semester="' +
          semesterIndex +
          '">' +
          '<div class="tab-title">' +
          semester.hocKy +
          " (" +
          semester.namHoc +
          ")</div>" +
          '<div class="tab-subtitle">' +
          (isLatest
            ? "Học kỳ hiện tại"
            : "GPA: " + semester.tongKetHocKy.diemTrungBinhTichLuyHe4) +
          "</div></button>",
      );
    });

    $(".semester-tabs").html(parts.join(""));
  }

  // Bảng

  function resetTableStructure() {
    $(".table-section").html(
      '<div class="table-header">' +
        "<h3>Bảng điểm chi tiết</h3>" +
        '<div class="table-actions">' +
        '<button class="action-btn active" hidden><i class="fas fa-check-circle"></i> Tất cả</button>' +
        '<button class="action-btn" hidden><i class="fa-solid fa-triangle-exclamation"></i> Cần cải thiện</button>' +
        "</div></div>" +
        '<div class="table-container"></div>',
    );
  }

  function renderCurrentSemester() {
    renderSemester(academicResultsData.length - 1);
  }

  function renderSemester(index) {
    var semester = academicResultsData[index];
    currentSelectedSemesterIndex = index;

    if ($(".semester-table-wrapper").length > 0) {
      resetTableStructure();
    }

    var $statNums = $(".stat-card .stat-number");
    $statNums.eq(0).text(semester.monHoc.length);
    $statNums.eq(1).text(semester.tongKetHocKy.tinChiDangKy);
    $statNums.eq(2).text(semester.tongKetHocKy.diemTrungBinhTichLuyHe4);
    $statNums.eq(3).text(semester.tongKetHocKy.diemTrungBinhHocKy);

    $(".table-header h3").text(
      "Bảng điểm chi tiết - " + semester.hocKy + " (" + semester.namHoc + ")",
    );

    renderTable(semester);
  }

  function renderAllSemesters() {
    var totalMonHoc = 0;
    $.each(academicResultsData, function (_, s) {
      totalMonHoc += s.monHoc.length;
    });

    var $statNums = $(".stat-card .stat-number");
    $statNums.eq(0).text(totalMonHoc);
    $statNums.eq(1).text(overallInfo.tongTinChiHoanThanh);
    $statNums.eq(2).text(overallInfo.gpaTichLuy);
    $statNums.eq(3).text(overallInfo.diemTrungBinhHe10);

    var parts = [
      '<div class="table-header">' +
        "<h3>Bảng điểm chi tiết - Tất cả học kỳ</h3>" +
        '<div class="table-actions">' +
        '<button class="action-btn active" hidden><i class="fas fa-check-circle"></i> Tất cả</button>' +
        '<button class="action-btn" hidden><i class="fa-solid fa-triangle-exclamation"></i> Cần cải thiện</button>' +
        "</div></div>" +
        '<div class="semester-sections-table">',
    ];

    $.each(academicResultsData, function (_, semester) {
      var cols = getMaxColumns(semester);
      var hasVisible =
        currentFilter === "all" ||
        $.grep(semester.monHoc, function (m) {
          return m.diem.diemTK < 7;
        }).length > 0;

      if (!hasVisible) return;

      var rows = [];
      $.each(semester.monHoc, function (i, mon) {
        var row = renderTableRow(
          mon,
          i + 1,
          cols.maxThuongXuyen,
          cols.maxThucHanh,
        );
        if (row) rows.push(row);
      });

      parts.push(
        `<div class="semester-table-wrapper">
              <div style="background-color:var(--primary-color); padding:16px 24px; min-width:100%; ">
                  <h4 style="color:white;margin:0;font-size:18px;font-weight:600;">
                  ${semester.hocKy} (${semester.namHoc})
                  </h4>
              </div>
              <div class="table-container" style="margin-top:0;">
                  <table class="results-table">
                      ${renderTableHeader(cols.maxThuongXuyen, cols.maxThucHanh)}
                  <tbody>
                      ${rows.join("")}
                  </tbody>
                  </table>
              </div>
              ${renderSemesterSummary(semester)}
          </div>`,
      );
    });

    parts.push("</div>");
    $(".table-section").html(parts.join(""));
  }

  function getMaxColumns(data) {
    var maxThuongXuyen = 0,
      maxThucHanh = 0;
    var arr = $.isArray(data) ? data : [data];
    $.each(arr, function (_, semester) {
      $.each(semester.monHoc, function (_, mon) {
        maxThuongXuyen = Math.max(maxThuongXuyen, mon.diem.thuongXuyen.length);
        maxThucHanh = Math.max(maxThucHanh, mon.diem.thucHanh.length);
      });
    });
    return { maxThuongXuyen: maxThuongXuyen, maxThucHanh: maxThucHanh };
  }

  function renderTableHeader(maxThuongXuyen, maxThucHanh) {
    var txCols = "",
      thCols = "";
    for (var i = 1; i <= maxThuongXuyen; i++) txCols += "<th>" + i + "</th>";
    for (var j = 1; j <= maxThucHanh; j++) thCols += "<th>" + j + "</th>";

    return `
        <thead>
          <tr>
            <th rowspan="2" style="width:30px;min-width:30px;max-width:30px;">STT</th>
            <th rowspan="2" style="width:100px;min-width:100px;max-width:100px;">Mã môn học</th>
            <th rowspan="2" style="width:200px;min-width:200px;">Tên môn học</th>
            <th rowspan="2" style="width:40px;min-width:40px;max-width:40px;">Số TC</th>
            <th rowspan="2" style="width:55px;min-width:55px;max-width:55px;">Giữa kỳ</th>
            ${
              maxThuongXuyen > 0
                ? `<th colspan="${maxThuongXuyen}" style="text-align:center; width:100px; min-width:70px;">Thường xuyên</th>`
                : "<th>Thường xuyên</th>"
            }
            ${
              maxThucHanh > 0
                ? `<th colspan="${maxThucHanh}" style="text-align:center; width:100px; min-width:70px;">Thực hành</th>`
                : ""
            }
            <th rowspan="2" style="width: 55px; min-width: 55px; max-width: 55px;">Cuối kỳ</th>
            <th rowspan="2" style="width: 85px; min-width: 85px; max-width: 85px;">Điểm tổng kết</th>
            <th rowspan="2" style="width: 85px; min-width: 85px; max-width: 85px;">Thang điểm 4</th>
            <th rowspan="2" style="width: 50px; min-width: 50px; max-width: 50px;">Điểm chữ</th>
            <th rowspan="2" style="width: 80px; min-width: 80px; max-width: 80px;">Xếp loại</th>
            <th rowspan="2" style="width: 100px; min-width: 100px; max-width: 100px;">Đạt</th>
          </tr>
          <tr>
            ${txCols}
            ${thCols}
          </tr>
        </thead>
       `;
  }

  function renderTable(semester) {
    var cols = getMaxColumns(semester);
    var rows = [];
    var visibleCount = 0;

    $.each(semester.monHoc, function (i, mon) {
      var row = renderTableRow(
        mon,
        i + 1,
        cols.maxThuongXuyen,
        cols.maxThucHanh,
      );
      if (row) {
        visibleCount++;
        rows.push(row);
      }
    });

    if (visibleCount === 0) {
      rows.push(
        `<tr>
          <td colspan="${12 + cols.maxThuongXuyen + cols.maxThucHanh}" style="text-align: center; padding: 40px; color: #666;"></td>
            <i class="fas fa-check-circle" style="font-size:48px; color:var(--success-color); margin-bottom:16px;"></i>
            <p style="font-size: 16px; margin: 0;">Không có môn nào cần cải thiện</p>
          </td>
        </tr>
        `,
      );
    }

    var html = `<div style="background-color: var(--primary-blue); padding: 16px 24px; min-width: 1100px;">
      <h4 style="color: white; margin: 0; font-size: 18px; font-weight: 600;">
      ${semester.hocKy} (${semester.namHoc})
      </h4>
    </div>
      <table class="results-table">
        ${renderTableHeader(cols.maxThuongXuyen, cols.maxThucHanh)}
        <tbody>
          ${rows.join("")}
        </tbody>
      </table>
      ${renderSemesterSummary(semester)}
    `;

    $(".table-container").html(html);
  }

  function renderTableRow(mon, stt, maxThuongXuyen, maxThucHanh) {
    if (currentFilter === "needImprovement" && mon.diem.diemTK >= 7) return "";

    var badgeClass = getGradeBadgeClass(mon.diem.diemChu);
    var txCells = "",
      thCells = "";

    for (var i = 0; i < maxThuongXuyen; i++) {
      var s = mon.diem.thuongXuyen[i];
      txCells +=
        '<td class="text-center"' +
        scoreStyle(s) +
        ">" +
        (s !== undefined ? s : "-") +
        "</td>";
    }
    for (var j = 0; j < maxThucHanh; j++) {
      var t = mon.diem.thucHanh[j];
      thCells +=
        '<td class="text-center"' +
        scoreStyle(t) +
        ">" +
        (t !== undefined ? t : "-") +
        "</td>";
    }

    return `
        <tr class=${mon.trangThai === "Đạt" ? "" : "improvement-row"}>
          <td class="text-center">${stt}</td>
          <td class="text-center">${mon.maMonHoc}</td>
          <td class="subject-name">${mon.tenMonHoc}</td>
          <td class="text-center">${mon.soTinChi}</td>
          <td class="text-center"${scoreStyle(mon.diem.giuaKy)}>${mon.diem.giuaKy || "-"}</td>
          ${txCells}
          ${thCells}
          <td class="text-center"${scoreStyle(mon.diem.cuoiKy)}>${mon.diem.cuoiKy || "-"}</td>
          <td class="text-center">${mon.diem.diemTK.toFixed(2)}</td>
          <td class="text-center">${mon.diem.diemHe4.toFixed(2)}</td>
          <td class="text-center"><span class="grade-badge ${badgeClass}">${mon.diem.diemChu}</span></td>
          <td class="text-center"><span class="ranking-badge ${badgeClass}">${mon.xepLoai}</span></td>
          <td class="text-center"><span class="status-badge ${mon.trangThai === "Đạt" ? "passed" : "failed"}">${mon.trangThai}</span></td>
        </tr>
      `;
  }

  function renderSemesterSummary(semester) {
    var rankingClass = getRankingClass(semester.tongKetHocKy.xepLoaiHocKy);
    var tk = semester.tongKetHocKy;

    return `
        <div class="semester-summary">
          <div class="semester-summary-title">Tổng kết học kỳ ${semester.hocKy} (${semester.namHoc})</div>
          <div class="summary-stats">
            ${makeStat("award", "ĐIỂM TB HK", tk.diemTrungBinhHocKy)}
            ${makeStat("calendar-alt", "ĐTB TÍCH LŨY (HỆ 10)", tk.diemTrungBinhTichLuyHe10)}
            ${makeStat("chart-line", "ĐTB TÍCH LŨY (HỆ 4)", tk.diemTrungBinhTichLuyHe4)}
            ${makeStat("book", "TC ĐÃ ĐĂNG KÝ", tk.tinChiDangKy)}
            ${makeStat("check-circle", "TC ĐÃ TÍCH LŨY", tk.tinChiTichLuy)}
            <div class="summary-stat ranking-highlight ${rankingClass}">
              <div class="summary-stat-icon"><i class="fas fa-award"></i></div>
              <div class="summary-stat-content">
                <div class="summary-stat-label">XẾP LOẠI HK</div>
                <div class="summary-stat-value">${tk.xepLoaiHocKy}</div>
              </div>
            </div>
          </div>
        </div>
      `;
  }

  function makeStat(icon, label, value) {
    return `
        <div class="summary-stat">
          <div class="summary-stat-icon"><i class="fas fa-${icon}"></i></div>
          <div class="summary-stat-content">
            <div class="summary-stat-label">
              ${label}
            </div>
            <div class="summary-stat-value">
              ${value}
            </div>
          </div>
        </div>
      `;
  }

  // Kendo
  function initCharts() {
    createGradeComparisonChart();
    createGpaTrendChart();
  }

  function populateSemesterSelect() {
    var $select = $("#semesterChartSelect");
    if (!$select.length) return;

    var opts = $.map(academicResultsData, function (semester, index) {
      var isLatest = index === academicResultsData.length - 1;
      return `<option value="${index}"${isLatest ? " selected" : ""}>${semester.hocKy} (${semester.namHoc})</option>`;
    });

    $select.html(opts.join(""));
  }

  function createGradeComparisonChart(semesterIndex) {
    var $container = $("#gradeDistChart");
    if (!$container.length) return;

    var existing = $container.data("kendoChart");
    if (existing) {
      existing.destroy();
      $container.empty();
    }

    if (semesterIndex == null) {
      semesterIndex =
        currentSelectedSemesterIndex != null
          ? currentSelectedSemesterIndex
          : academicResultsData.length - 1;
    }

    var semester = academicResultsData[semesterIndex];
    $("#semesterChartSelect").val(semesterIndex);

    var labels = $.map(semester.monHoc, function (m) {
      return m.tenMonHoc.length > 20
        ? m.tenMonHoc.substring(0, 20) + "..."
        : m.tenMonHoc;
    });
    var studentGrades = $.map(semester.monHoc, function (m) {
      return m.diem.diemTK;
    });
    var classAverages = $.map(semester.monHoc, function (m) {
      return m.diemTBLop;
    });

    $container.kendoChart({
      legend: {
        position: "top",
        labels: {
          font: "12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
        },
      },
      chartArea: { background: "transparent" },
      seriesDefaults: { overlay: { gradient: "none" } },
      series: [
        {
          type: "column",
          name: "Điểm của bạn",
          data: studentGrades,
          color: "#3a74f0",
          border: { width: 0 },
        },
        {
          type: "line",
          name: "Điểm TB lớp",
          data: classAverages,
          color: "#FF9800",
          width: 3,
          style: "smooth",
          markers: {
            visible: true,
            size: 8,
            background: "#FF9800",
            border: { color: "#fff", width: 2 },
          },
        },
      ],
      categoryAxis: {
        categories: labels,
        labels: { rotation: -45, font: "10px sans-serif" },
        title: {
          text: "Môn học",
          font: "bold 12px sans-serif",
          margin: { top: 8 },
        },
        majorGridLines: { visible: false },
        line: { visible: false },
      },
      valueAxis: {
        min: 0,
        max: 10,
        majorUnit: 1,
        title: { text: "Điểm", font: "bold 12px sans-serif" },
        majorGridLines: { color: "#f0f0f0", visible: true },
      },
      tooltip: {
        visible: true,
        shared: true,
        background: "white",
        border: { color: "#dee2e6", width: 1 },
        sharedTemplate: function (data) {
          var studentVal = null,
            classVal = null;
          $.each(data.points, function (_, p) {
            if (p.series.name === "Điểm của bạn") studentVal = p.value;
            if (p.series.name === "Điểm TB lớp") classVal = p.value;
          });
          var idx = data.points[0].categoryIx;
          var fullName = semester.monHoc[idx]
            ? semester.monHoc[idx].tenMonHoc
            : data.points[0].category;
          var html = `
            <div style="padding: 6px 10px; background: white; color: #505050; border-radius: 8px; font-size: 12px; min-width: 160px;">
              <div style="font-weight: 700; margin-bottom: 6px; border-bottom: 1px solid #eee; padding-bottom: 4px;"></div>
                ${fullName}
              </div>
          `;
          $.each(data.points, function (_, p) {
            html += `
              <div style="margin: 2px 0;">
                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${p.series.color}; margin-right: 5px;"></span>${p.series.name}: <strong>${p.value.toFixed(2)}</strong></div>
            `;
          });
          if (studentVal !== null && classVal !== null) {
            var diff = (studentVal - classVal).toFixed(2);
            var color = diff >= 0 ? "#4caf50" : "#f15464";
            html += `
              <div style="margin-top: 6px; border-top: 1px solid #eee; padding-top: 4px; color: ${color}; font-weight: 600;">Chênh lệch: ${diff >= 0 ? "+" : ""}${diff}</div>
            `;
          }
          return html + "</div>";
        },
      },
    });
  }

  function createGpaTrendChart() {
    var $container = $("#gpaTrendChart");
    if (!$container.length) return;

    var existing = $container.data("kendoChart");
    if (existing) {
      existing.destroy();
      $container.empty();
    }

    var labels = $.map(academicResultsData, function (s) {
      return s.hocKy + "/" + s.namHoc.split("-")[0].slice(-2);
    });
    var gpaHocKy = $.map(academicResultsData, function (s) {
      return s.tongKetHocKy.diemTrungBinhHe4;
    });
    var gpaTichLuy = $.map(academicResultsData, function (s) {
      return s.tongKetHocKy.diemTrungBinhTichLuyHe4;
    });

    $container.kendoChart({
      legend: {
        position: "top",
        labels: {
          font: "13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
        },
      },
      chartArea: { background: "transparent" },
      seriesDefaults: { overlay: { gradient: "none" } },
      series: [
        {
          type: "area",
          name: "GPA Học kỳ",
          data: gpaHocKy,
          color: "#3a74f0",
          opacity: 0.15,
          line: { color: "#3a74f0", width: 2, style: "smooth" },
          markers: {
            visible: true,
            size: 8,
            background: "#3a74f0",
            border: { color: "#fff", width: 2 },
          },
        },
        {
          type: "area",
          name: "GPA Tích lũy",
          data: gpaTichLuy,
          color: "#4caf50",
          opacity: 0.15,
          line: { color: "#4caf50", width: 2, style: "smooth" },
          markers: {
            visible: true,
            size: 8,
            background: "#4caf50",
            border: { color: "#fff", width: 2 },
          },
        },
      ],
      categoryAxis: {
        categories: labels,
        majorGridLines: { visible: false },
        labels: { font: "12px sans-serif" },
        line: { visible: false },
      },
      valueAxis: {
        min: 3.0,
        max: 4.0,
        majorUnit: 0.2,
        labels: { format: "{0:N1}", font: "12px sans-serif" },
        majorGridLines: { color: "#f0f0f0", visible: true },
      },
      tooltip: {
        visible: true,
        shared: true,
        background: "white",
        border: { color: "#3a74f0", width: 1 },
        sharedTemplate: function (data) {
          var idx = data.points[0].categoryIx;
          var sem = academicResultsData[idx];
          var label = sem
            ? sem.hocKy + " (" + sem.namHoc + ")"
            : data.points[0].category;
          var html = `
            <div style="padding: 6px 10px; background: white; color: #505050; border-radius: 8px; font-size: 13px; min-width: 180px;">
              <div style="font-weight: 700; margin-bottom: 6px; border-bottom: 1px solid #eee; padding-bottom: 4px;">${label}</div>
            `;
          $.each(data.points, function (_, p) {
            var v = p.value;
            var rank =
              v >= 3.6
                ? "Xuất sắc"
                : v >= 3.2
                  ? "Giỏi"
                  : v >= 2.5
                    ? "Khá"
                    : v >= 2.0
                      ? "Trung bình"
                      : "Yếu";
            html += `
              <div style="margin: 2px 0;">
                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${p.series.color}; margin-right: 5px;"></span>${p.series.name}: <strong>${v.toFixed(2)}</strong> <span style="opacity: 0.75; font-size: 11px;">(${rank})</span>
              </div>
            `;
          });
          return html + "</div>";
        },
      },
    });
  }

  function getGradeBadgeClass(diemChu) {
    if (diemChu === "A+" || diemChu === "A") return "excellent";
    if (diemChu === "B+" || diemChu === "B") return "good";
    if (diemChu === "C+" || diemChu === "C") return "average";
    if (diemChu === "D" || diemChu === "D+") return "below-average";
    return "poor";
  }

  function scoreStyle(score) {
    return score != null && score !== undefined && score <= 5.0 && score !== "-"
      ? ' style="color:red;font-weight:600;"'
      : "";
  }

  function getRankingClass(xepLoai) {
    var r = xepLoai.toLowerCase();
    if (r.indexOf("xuất sắc") !== -1) return "excellent";
    if (r.indexOf("giỏi") !== -1) return "good";
    if (r.indexOf("khá") !== -1) return "fair";
    if (r.indexOf("trung bình yếu") !== -1 || r.indexOf("tb yếu") !== -1)
      return "below-average";
    if (r.indexOf("trung bình") !== -1 || r.indexOf("tb") !== -1)
      return "average";
    if (r.indexOf("yếu") !== -1 || r.indexOf("kém") !== -1) return "poor";
    return "fair";
  }

  function scrollToTable() {
    if (isInitialLoad) return;
    setTimeout(function () {
      var $table = $(".table-section");
      if ($table.length) {
        $("html, body").animate({ scrollTop: $table.offset().top }, 400);
      }
    }, 500);
  }
})(jQuery);
