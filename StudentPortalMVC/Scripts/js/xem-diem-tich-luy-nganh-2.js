; (function ($) {
    'use strict';
    //Data demo
    var academicResultsData = [
        {
            hocKy: 'HK1', namHoc: '2022-2023',
            monHoc: [
                { stt: 1, maLHP: '2223001020', tenMonHoc: 'Nhập môn Tin học', soTinChi: 3, tichCuc: 8.5, tk1: 8.0, tk2: 8.5, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 2, maLHP: '2223001021', tenMonHoc: 'Toán cao cấp 1', soTinChi: 3, tichCuc: 7.5, tk1: 7.0, tk2: 8.0, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 3.0, diemChu: 'B', xepLoai: 'Khá' },
                { stt: 3, maLHP: '2223001022', tenMonHoc: 'Tiếng Anh cơ bản 1', soTinChi: 3, tichCuc: 8.0, tk1: 8.5, tk2: 8.0, tieuLuan1: 8.5, tieuLuan2: '-', diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.15, diemTrungBinhTichLuyHe10: 8.15, diemTrungBinhHe4: 3.52, diemTrungBinhTichLuyHe4: 3.45, tinChiDangKy: 15, tinChiTichLuy: 15, xepLoaiHocKy: 'Khá' }
        },
        {
            hocKy: 'HK2', namHoc: '2022-2023',
            monHoc: [
                { stt: 1, maLHP: '2223002023', tenMonHoc: 'Kỹ năng giao tiếp chuyên ngành', soTinChi: 2, tichCuc: 8.5, tk1: 9.0, tk2: 8.5, tieuLuan1: 8.0, tieuLuan2: 8.5, diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 2, maLHP: '2223002024', tenMonHoc: 'Giáo dục Quốc phòng và An ninh 1', soTinChi: 3, tichCuc: 9.0, tk1: 8.5, tk2: 9.0, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 4.0, diemChu: 'A', xepLoai: 'Xuất sắc' },
                { stt: 3, maLHP: '2223002025', tenMonHoc: 'Lập trình căn bản', soTinChi: 3, tichCuc: 8.0, tk1: 8.5, tk2: 8.0, tieuLuan1: 8.5, tieuLuan2: 9.0, diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.6, diemTrungBinhTichLuyHe10: 8.38, diemTrungBinhHe4: 3.89, diemTrungBinhTichLuyHe4: 3.75, tinChiDangKy: 16, tinChiTichLuy: 31, xepLoaiHocKy: 'Giỏi' }
        },
        {
            hocKy: 'HK1', namHoc: '2023-2024',
            monHoc: [
                { stt: 1, maLHP: '2324001026', tenMonHoc: 'Lập trình hướng đối tượng', soTinChi: 3, tichCuc: 9.0, tk1: 8.5, tk2: 9.0, tieuLuan1: 9.0, tieuLuan2: 8.5, diemHe4: 4.0, diemChu: 'A+', xepLoai: 'Xuất sắc' },
                { stt: 2, maLHP: '2324001027', tenMonHoc: 'Cấu trúc dữ liệu và giải thuật', soTinChi: 3, tichCuc: 8.5, tk1: 9.0, tk2: 8.5, tieuLuan1: 8.0, tieuLuan2: 8.5, diemHe4: 4.0, diemChu: 'A', xepLoai: 'Xuất sắc' },
                { stt: 3, maLHP: '2324001028', tenMonHoc: 'Cơ sở dữ liệu', soTinChi: 3, tichCuc: 8.0, tk1: 8.5, tk2: 8.0, tieuLuan1: 8.5, tieuLuan2: '-', diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 4, maLHP: '2324001029', tenMonHoc: 'Xác suất thống kê', soTinChi: 3, tichCuc: 7.5, tk1: 8.0, tk2: 7.5, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 3.0, diemChu: 'B', xepLoai: 'Khá' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.67, diemTrungBinhTichLuyHe10: 8.48, diemTrungBinhHe4: 3.8, diemTrungBinhTichLuyHe4: 3.76, tinChiDangKy: 18, tinChiTichLuy: 49, xepLoaiHocKy: 'Giỏi' }
        },
        {
            hocKy: 'HK2', namHoc: '2023-2024',
            monHoc: [
                { stt: 1, maLHP: '2324002030', tenMonHoc: 'Phát triển ứng dụng Web', soTinChi: 3, tichCuc: 8.5, tk1: 8.0, tk2: 8.5, tieuLuan1: 9.0, tieuLuan2: 8.5, diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 2, maLHP: '2324002031', tenMonHoc: 'Mạng máy tính', soTinChi: 3, tichCuc: 8.0, tk1: 8.5, tk2: 8.0, tieuLuan1: 8.0, tieuLuan2: '-', diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 3, maLHP: '2324002032', tenMonHoc: 'Hệ quản trị cơ sở dữ liệu', soTinChi: 2, tichCuc: 8.5, tk1: 9.0, tk2: 8.5, tieuLuan1: 8.5, tieuLuan2: 9.0, diemHe4: 4.0, diemChu: 'A', xepLoai: 'Xuất sắc' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.5, diemTrungBinhTichLuyHe10: 8.49, diemTrungBinhHe4: 3.9, diemTrungBinhTichLuyHe4: 3.82, tinChiDangKy: 17, tinChiTichLuy: 66, xepLoaiHocKy: 'Giỏi' }
        },
        {
            hocKy: 'HK1', namHoc: '2024-2025',
            monHoc: [
                { stt: 1, maLHP: '2425001033', tenMonHoc: 'Công nghệ phần mềm', soTinChi: 3, tichCuc: 9.0, tk1: 8.5, tk2: 9.0, tieuLuan1: 9.0, tieuLuan2: 9.0, diemHe4: 4.0, diemChu: 'A+', xepLoai: 'Xuất sắc' },
                { stt: 2, maLHP: '2425001034', tenMonHoc: 'Trí tuệ nhân tạo', soTinChi: 3, tichCuc: 8.5, tk1: 9.0, tk2: 8.5, tieuLuan1: 8.5, tieuLuan2: 9.0, diemHe4: 4.0, diemChu: 'A', xepLoai: 'Xuất sắc' },
                { stt: 3, maLHP: '2425001035', tenMonHoc: 'Kiến trúc máy tính', soTinChi: 2, tichCuc: 8.5, tk1: 8.0, tk2: 8.5, tieuLuan1: 8.5, tieuLuan2: '-', diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.9, diemTrungBinhTichLuyHe10: 8.56, diemTrungBinhHe4: 3.89, diemTrungBinhTichLuyHe4: 3.8, tinChiDangKy: 18, tinChiTichLuy: 84, xepLoaiHocKy: 'Giỏi' }
        },
        {
            hocKy: 'HK2', namHoc: '2024-2025',
            monHoc: [
                { stt: 1, maLHP: '2425002036', tenMonHoc: 'Nhập môn Tin học', soTinChi: 2, tichCuc: 8.5, tk1: 8.5, tk2: 9.0, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 4.0, diemChu: 'A+', xepLoai: 'Xuất sắc' },
                { stt: 2, maLHP: '2425002037', tenMonHoc: 'Kỹ năng giao tiếp chuyên ngành', soTinChi: 2, tichCuc: 8.5, tk1: 8.5, tk2: 8.0, tieuLuan1: 8.0, tieuLuan2: 8.0, diemHe4: 3.0, diemChu: 'B', xepLoai: 'Khá' },
                { stt: 3, maLHP: '2425002038', tenMonHoc: 'Giáo dục Quốc phòng và An ninh 1', soTinChi: 2, tichCuc: 8.5, tk1: 8.5, tk2: 9.0, tieuLuan1: 8.0, tieuLuan2: '-', diemHe4: 4.0, diemChu: 'A+', xepLoai: 'Xuất sắc' },
                { stt: 4, maLHP: '2425002039', tenMonHoc: 'Toán cao cấp 1', soTinChi: 2, tichCuc: 9.0, tk1: 10.0, tk2: 9.0, tieuLuan1: '-', tieuLuan2: '-', diemHe4: 4.0, diemChu: 'A+', xepLoai: 'Xuất sắc' },
                { stt: 5, maLHP: '2425002040', tenMonHoc: 'Hệ điều hành', soTinChi: 3, tichCuc: 8.0, tk1: 8.5, tk2: 8.0, tieuLuan1: 7.5, tieuLuan2: 8.0, diemHe4: 3.5, diemChu: 'B+', xepLoai: 'Khá' },
                { stt: 6, maLHP: '2425002041', tenMonHoc: 'Lập trình Java nâng cao', soTinChi: 3, tichCuc: 8.8, tk1: 9.0, tk2: 8.5, tieuLuan1: 9.0, tieuLuan2: 8.5, diemHe4: 4.0, diemChu: 'A', xepLoai: 'Xuất sắc' }
            ],
            tongKetHocKy: { diemTrungBinhHocKy: 8.7, diemTrungBinhTichLuyHe10: 8.6, diemTrungBinhHe4: 3.7, diemTrungBinhTichLuyHe4: 3.75, tinChiDangKy: 12, tinChiTichLuy: 96, xepLoaiHocKy: 'Giỏi' }
        }
    ];

    var overallInfo = {
        gpaTichLuy: 3.75,
        xepLoai: 'Giỏi',
        tongTinChiHoanThanh: 142,
        tongTinChiYeuCau: 162,
        diemRenLuyen: 85,
        diemRenLuyenXepLoai: 'Khá',
        diemTrungBinhHe10: 8.4,
        xepLoaiTichLuyHe10: 'Giỏi',
        xepLoaiTichLuyHe10Sub: 'Xuất sắc'
    };

    function getGradeBadgeClass(diemChu) {
        if (diemChu === 'A+' || diemChu === 'A') return 'excellent';
        if (diemChu === 'B+' || diemChu === 'B') return 'good';
        if (diemChu === 'C+' || diemChu === 'C') return 'average';
        return 'poor';
    }

    function renderOverallSummary() {
        var $cards = $('.summary-card');

        $cards.filter('.primary').find('.card-value').html(
            '<span class="primary">' + overallInfo.gpaTichLuy + '</span>' +
            '<span class="card-scale">/4.0</span>'
        );
        $cards.filter('.primary').find('.card-badge span').text('Xếp loại: ' + overallInfo.xepLoai);

        $cards.eq(1).find('.card-value').html(
            '<span>' + overallInfo.tongTinChiHoanThanh + '</span>' +
            '<span class="card-scale">/' + overallInfo.tongTinChiYeuCau + '</span>'
        );

        $cards.eq(2).find('.card-value').html(
            '<span>' + overallInfo.diemRenLuyen + '</span>' +
            '<span class="card-scale">/100</span>'
        );
        $cards.eq(2).find('.card-sub-label').text(overallInfo.diemRenLuyenXepLoai);

        $cards.eq(3).find('.card-value').text(overallInfo.diemTrungBinhHe10);

        $cards.eq(4).find('.card-value').text(overallInfo.xepLoaiTichLuyHe10);
        $cards.eq(4).find('.card-sub-label').text(overallInfo.xepLoaiTichLuyHe10Sub);
    }

    function renderTable() {
        var $tbody = $('#tableBody').empty();
        var latest = academicResultsData[academicResultsData.length - 1];

        var rows = $.map(latest.monHoc, function (item) {
            var cls = getGradeBadgeClass(item.diemChu);
            return '<tr>' +
                '<td class="text-center">' + item.stt + '</td>' +
                '<td class="text-center">' + item.maLHP + '</td>' +
                '<td class="ps-4">' + item.tenMonHoc + '</td>' +
                '<td class="text-center">' + item.soTinChi + '</td>' +
                '<td class="text-center">' + item.tichCuc + '</td>' +
                '<td class="text-center">' + item.tk1 + '</td>' +
                '<td class="text-center">' + item.tk2 + '</td>' +
                '<td class="text-center">' + item.tieuLuan1 + '</td>' +
                '<td class="text-center">' + item.tieuLuan2 + '</td>' +
                '<td class="text-center">' + item.diemHe4 + '</td>' +
                '<td class="text-center"><span class="grade-badge ' + cls + '">' + item.diemChu + '</span></td>' +
                '<td class="text-center"><span class="grade-badge ' + cls + '">' + item.xepLoai + '</span></td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
    }

    $(function () {
        renderOverallSummary();
        renderTable();
    });

})(jQuery);