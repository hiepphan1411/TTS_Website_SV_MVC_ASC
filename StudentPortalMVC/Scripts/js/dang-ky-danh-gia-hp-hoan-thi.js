; (function ($) {
    'use strict';

    var danhSachHocPhan = [
        {
            id: 1,
            maHocPhan: 'LTHDT01',
            tenHocPhan: 'Lập trình hướng đối tượng',
            tinChi: 3,
            hoanThi: { hocKy: 'HK1 2023-2024', hinhThucThi: 'Thi viết' },
            danhGiaLai: null
        },
        {
            id: 2,
            maHocPhan: 'CSDL01',
            tenHocPhan: 'Cơ sở dữ liệu',
            tinChi: 4,
            hoanThi: { hocKy: 'HK1 2023-2024', hinhThucThi: 'Thi thực hành' },
            danhGiaLai: {
                hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết',
                maLHP: 'CSDL01_01', lopDuKien: 'DHKTPM17A',
                ngayDangKy: '15/01/2024', trangThai: 1,
                phanHoi: 'Đồng ý', ngayPhanHoi: '18/01/2024', nguoiPhanHoi: 'Nguyễn Văn A'
            }
        },
        {
            id: 3,
            maHocPhan: 'KTMT01',
            tenHocPhan: 'Kiến trúc máy tính',
            tinChi: 3,
            hoanThi: { hocKy: 'HK1 2023-2024', hinhThucThi: 'Thi viết' },
            danhGiaLai: {
                hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết',
                maLHP: 'KTMT01_02', lopDuKien: 'DHKTPM17B',
                ngayDangKy: '20/01/2024', trangThai: 2,
                phanHoi: '', ngayPhanHoi: '', nguoiPhanHoi: ''
            }
        },
        {
            id: 4,
            maHocPhan: 'MMT01',
            tenHocPhan: 'Mạng máy tính',
            tinChi: 3,
            hoanThi: { hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết' },
            danhGiaLai: null
        }
    ];

    var danhSachHocPhanMo = [
        { id: 1, maHocPhan: 'LTHDT01', tenHocPhan: 'Lập trình hướng đối tượng', lopDuKien: 'DHKTPM17A', tinChi: 3, hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết' },
        { id: 2, maHocPhan: 'LTHDT01', tenHocPhan: 'Lập trình hướng đối tượng', lopDuKien: 'DHKTPM17B', tinChi: 3, hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết' },
        { id: 3, maHocPhan: 'CSDL01', tenHocPhan: 'Cơ sở dữ liệu', lopDuKien: 'DHKTPM17A', tinChi: 4, hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi thực hành' },
        { id: 4, maHocPhan: 'MMT01', tenHocPhan: 'Mạng máy tính', lopDuKien: 'DHKTPM17C', tinChi: 3, hocKy: 'HK2 2023-2024', hinhThucThi: 'Thi viết' }
    ];

    var hocPhanHienTai = null;

    function getStatusBadge(trangThai) {
        if (trangThai === 1) return '<span class="badge badge-completed">Đã duyệt</span>';
        if (trangThai === 2) return '<span class="badge badge-progress">Đang chờ</span>';
        return '<span class="badge badge-denied">Từ chối</span>';
    }

    function renderTable() {
        var $tbody = $('#tableBody');
        if (!$tbody.length) return;

        var rows = $.map(danhSachHocPhan, function (item, index) {
            var daDangKy = item.danhGiaLai !== null;
            var dgl = item.danhGiaLai || {};
            var status = daDangKy ? getStatusBadge(dgl.trangThai) : '';

            var actionBtn = daDangKy
                ? '<button class="icon icon-edit" data-id="' + item.id + '" title="Chỉnh sửa"><i class="fa-solid fa-pen-to-square"></i></button>' +
                '<button class="icon icon-delete" data-id="' + item.id + '" title="Xóa"><i class="fa-solid fa-xmark"></i></button>'
                : '<button class="icon icon-add" data-id="' + item.id + '" title="Đăng ký"><i class="fa-solid fa-plus"></i></button>';

            return '<tr>' +
                '<td class="text-center">' + (index + 1) + '</td>' +
                '<td class="text-center"><div class="d-flex gap-2 justify-content-center">' + actionBtn + '</div></td>' +
                '<td class="text-center">' + item.maHocPhan + '</td>' +
                '<td class="ps-4">' + item.tenHocPhan + '</td>' +
                '<td class="text-center">' + item.tinChi + '</td>' +
                '<td class="text-center">' + item.hoanThi.hocKy + '</td>' +
                '<td class="text-center">' + item.hoanThi.hinhThucThi + '</td>' +
                '<td class="text-center">' + (dgl.hocKy || '') + '</td>' +
                '<td class="text-center">' + (dgl.hinhThucThi || '') + '</td>' +
                '<td class="text-center">' + (dgl.maLHP || '') + '</td>' +
                '<td class="text-center">' + (dgl.lopDuKien || '') + '</td>' +
                '<td class="text-center">' + (dgl.ngayDangKy || '') + '</td>' +
                '<td class="text-center">' + status + '</td>' +
                '<td class="text-center">' + (dgl.phanHoi || '') + '</td>' +
                '<td class="text-center">' + (dgl.ngayPhanHoi || '') + '</td>' +
                '<td class="text-center">' + (dgl.nguoiPhanHoi || '') + '</td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
    }

    function renderTableOpenSubject() {
        var $tbody = $('#tableOpenSubject');
        if (!$tbody.length) return;

        var rows = $.map(danhSachHocPhanMo, function (item, index) {
            return '<tr>' +
                '<td class="text-center"><input type="checkbox" name="selectedSubject" value="' + item.id + '" /></td>' +
                '<td class="text-center">' + (index + 1) + '</td>' +
                '<td class="text-center">' + item.maHocPhan + '</td>' +
                '<td class="ps-4">' + item.tenHocPhan + '</td>' +
                '<td class="ps-4">' + item.lopDuKien + '</td>' +
                '<td class="text-center">' + item.tinChi + '</td>' +
                '<td class="text-center">' + item.hocKy + '</td>' +
                '<td class="text-center">' + item.hinhThucThi + '</td>' +
                '</tr>';
        });

        $tbody.html(rows.join(''));
    }

    function openModal(id) {
        hocPhanHienTai = null;
        $.each(danhSachHocPhan, function (_, item) {
            if (item.id === id) { hocPhanHienTai = item; return false; }
        });
        if (!hocPhanHienTai) return;

        $('#certificateModal').css('display', 'flex');
        $('#formModal')[0].reset();
        renderTableOpenSubject();
    }

    function closeModal() {
        $('#certificateModal').hide();
        hocPhanHienTai = null;
    }

    function submitForm() {
        var selectedPeriod = $('#period').val();
        var $selected = $('input[name="selectedSubject"]:checked');

        if (!selectedPeriod) {
            alert('Vui lòng chọn đợt!');
            return;
        }
        if ($selected.length === 0) {
            alert('Vui lòng chọn ít nhất một học phần!');
            return;
        }

        var firstId = parseInt($selected.first().val(), 10);
        var selectedHocPhan = null;
        $.each(danhSachHocPhanMo, function (_, item) {
            if (item.id === firstId) { selectedHocPhan = item; return false; }
        });

        if (hocPhanHienTai && selectedHocPhan) {
            hocPhanHienTai.danhGiaLai = {
                hocKy: selectedHocPhan.hocKy,
                hinhThucThi: selectedHocPhan.hinhThucThi,
                maLHP: selectedHocPhan.maHocPhan + '_01',
                lopDuKien: selectedHocPhan.lopDuKien,
                ngayDangKy: new Date().toLocaleDateString('vi-VN'),
                trangThai: 2,
                phanHoi: '', ngayPhanHoi: '', nguoiPhanHoi: ''
            };
            renderTable();
            closeModal();
            alert('Đăng ký thành công!');
        }
    }

    function editItem(id) {
        var item = null;
        $.each(danhSachHocPhan, function (_, hp) {
            if (hp.id === id) { item = hp; return false; }
        });
        if (!item || !item.danhGiaLai) return;

        alert('Chỉnh sửa đăng ký cho học phần: ' + item.tenHocPhan + '\n' +
            'Lớp dự kiến: ' + item.danhGiaLai.lopDuKien + '\n' +
            'Trạng thái: ' + item.danhGiaLai.trangThai);

        openModal(id);
    }

    function deleteItem(id) {
        var item = null;
        $.each(danhSachHocPhan, function (_, hp) {
            if (hp.id === id) { item = hp; return false; }
        });
        if (!item) return;

        if (confirm('Bạn có chắc chắn muốn xóa đăng ký học phần: ' + item.tenHocPhan + '?')) {
            item.danhGiaLai = null;
            renderTable();
            alert('Đã xóa đăng ký thành công!');
        }
    }

    $(function () {
        renderTable();

        $(document).on('click', '.content-wrapper .btn-add', function () {
            var period = $('#periodSelect').val();
            console.log('Tìm kiếm theo đợt:', period);
            renderTable();
        });

        $(document).on('click', '.content-wrapper .btn-refresh', function () {
            $('#periodSelect').val('');
            renderTable();
        });

        $(document).on('click', '.icon-add', function () {
            openModal(parseInt($(this).data('id'), 10));
        });

        $(document).on('click', '.icon-edit', function () {
            editItem(parseInt($(this).data('id'), 10));
        });

        $(document).on('click', '.icon-delete', function () {
            deleteItem(parseInt($(this).data('id'), 10));
        });

        $(document).on('click', '.modal-close, .modal-footer .btn-refresh', function () {
            closeModal();
        });

        $(document).on('click', '.modal-footer .btn-add', function () {
            submitForm();
        });

        $(document).on('change', '#selectAllSubjects', function () {
            $('input[name="selectedSubject"]').prop('checked', $(this).prop('checked'));
        });

        $(document).on('click', '#certificateModal', function (e) {
            if ($(e.target).is('#certificateModal')) {
                closeModal();
            }
        });
    });

})(jQuery);