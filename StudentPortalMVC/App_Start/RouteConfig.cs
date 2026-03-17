using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace StudentPortalMVC
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Dashboard",
                url: "dashboard",
                defaults: new { controller = "Dashboard", action = "Index" }
            );
            routes.MapRoute(
                name: "LichTheoTuan",
                url: "lich-theo-tuan",
                defaults: new { controller = "LichTheoTuan", action = "Index" }
            );
            routes.MapRoute(
                name: "HocBong",
                url: "hoc-bong",
                defaults: new { controller = "HocBong", action = "Index" }
            );
            routes.MapRoute(
                name: "KetQuaHocTap",
                url: "ket-qua-hoc-tap",
                defaults: new { controller = "KetQuaHocTap", action = "Index" }
            );
            routes.MapRoute(
                name: "ThanhToanTrucTuyen",
                url: "thanh-toan-truc-tuyen",
                defaults: new { controller = "ThanhToanTrucTuyen", action = "Index" }
            );
            routes.MapRoute(
                name: "TraCuuCongNo",
                url: "tra-cuu-cong-no",
                defaults: new { controller = "TraCuuCongNo", action = "Index" }
            );
            routes.MapRoute(
                name: "PhieuThuTongHop",
                url: "phieu-thu-tong-hop",
                defaults: new { controller = "PhieuThuTongHop", action = "Index" }
            );
            routes.MapRoute(
                name: "HopThuSinhVien",
                url: "hop-thu-sinh-vien",
                defaults: new { controller = "HopThuSinhVien", action = "Index" }
            );
            routes.MapRoute(
                name: "KetQuaHocTapNganh2",
                url: "ket-qua-hoc-tap-nganh-2",
                defaults: new { controller = "KetQuaHocTapNganh2", action = "Index" }
            );
            routes.MapRoute(
                name: "XemDiemTichLuyNganh2",
                url: "xem-diem-tich-luy-nganh-2",
                defaults: new { controller = "XemDiemTichLuyNganh2", action = "Index" }
            );
            routes.MapRoute(
                name: "DanhKyDanhGiaLaiHPHoanThi",
                url: "dang-ky-danh-gia-lai-hp-hoan-thi",
                defaults: new { controller = "DanhKyDanhGiaLaiHPHoanThi", action = "Index" }
            );

            routes.MapRoute(
                name: "ChiTietTinTuc",
                url: "chi-tiet-tin-tuc",
                defaults: new { controller = "ChiTietTinTuc", action = "Index" }
            );

            routes.MapRoute(
                name: "ChuongTrinhKhung",
                url: "chuong-trinh-khung",
                defaults: new { controller = "ChuongTrinhKhung", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyChuyenNganh",
                url: "dang-ky-chuyen-nganh",
                defaults: new { controller = "DangKyChuyenNganh", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyHoanThi",
                url: "dang-ky-hoan-thi",
                defaults: new { controller = "DangKyHoanThi", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyHocPhan",
                url: "dang-ky-hoc-phan",
                defaults: new { controller = "DangKyHocPhan", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyHocPhanNganh2",
                url: "dang-ky-hoc-phan-nganh2",
                defaults: new { controller = "DangKyHocPhanNganh2", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyMonHocDieuKien",
                url: "dang-ky-mon-hoc-dieu-kien",
                defaults: new { controller = "DangKyMonHocDieuKien", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyMuonPhong",
                url: "dang-ky-muon-phong",
                defaults: new { controller = "DangKyMuonPhong", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyNoiTru",
                url: "dang-ky-noi-tru",
                defaults: new { controller = "DangKyNoiTru", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyPhucKhao",
                url: "dang-ky-phuc-khao",
                defaults: new { controller = "DangKyPhucKhao", action = "Index" }
            );

            routes.MapRoute(
                name: "DangKyThiLaiThiCaiThien",
                url: "dang-ky-thi-lai-thi-cai-thien",
                defaults: new { controller = "DangKyThiLaiThiCaiThien", action = "Index" }
            );

            routes.MapRoute(
                name: "DanhGiaRenLuyenLop",
                url: "danh-gia-ren-luyen-lop",
                defaults: new { controller = "DanhGiaRenLuyenLop", action = "Index" }
            );

            routes.MapRoute(
                name: "DanhSachHoSoCaNhan",
                url: "danh-sach-ho-so-ca-nhan",
                defaults: new { controller = "DanhSachHoSoCaNhan", action = "Index" }
            );

            routes.MapRoute(
                name: "DeXuatBieuMau",
                url: "de-xuat-bieu-mau",
                defaults: new { controller = "DeXuatBieuMau", action = "Index" }
            );

            routes.MapRoute(
                name: "DeXuatCapNhatThongTin",
                url: "de-xuat-cap-nhat-thong-tin",
                defaults: new { controller = "DeXuatCapNhatThongTin", action = "Index" }
            );

            routes.MapRoute(
                name: "DeXuatChungChi",
                url: "de-xuat-chung-chi",
                defaults: new { controller = "DeXuatChungChi", action = "Index" }
            );

            routes.MapRoute(
                name: "DeXuatKhenThuong",
                url: "de-xuat-khen-thuong",
                defaults: new { controller = "DeXuatKhenThuong", action = "Index" }
            );

            routes.MapRoute(
                name: "DeXuatXetTotNghiep",
                url: "de-xuat-xet-tot-nghiep",
                defaults: new { controller = "DeXuatXetTotNghiep", action = "Index" }
            );

            routes.MapRoute(
                name: "DiemThuongSinhVien",
                url: "diem-thuong-sinh-vien",
                defaults: new { controller = "DiemThuongSinhVien", action = "Index" }
            );

            routes.MapRoute(
                name: "HoSoSinhVien",
                url: "ho-so-sinh-vien",
                defaults: new { controller = "HoSoSinhVien", action = "Index" }
            );

            routes.MapRoute(
                name: "GhiChuNhacNho",
                url: "ghi-chu-nhac-nho",
                defaults: new { controller = "GhiChuNhacNho", action = "Index" }
            );

            routes.MapRoute(
                name: "ChiTietKhaoSat",
                url: "chi-tiet-khao-sat",
                defaults: new { controller = "ChiTietKhaoSat", action = "Index" }
            );

            routes.MapRoute(
                name: "KetQuaRenLuyen",
                url: "ket-qua-ren-luyen",
                defaults: new { controller = "KetQuaRenLuyen", action = "Index" }
            );

            routes.MapRoute(
                name: "KhaiBaoBHYT",
                url: "khai-bao-bao-hiem-y-te",
                defaults: new { controller = "KhaiBaoBHYT", action = "Index" }
            );

            routes.MapRoute(
                name: "KhaoSatSuKien",
                url: "khao-sat-su-kien",
                defaults: new { controller = "KhaoSatSuKien", action = "Index" }
            );

            routes.MapRoute(
                name: "LichSuBHYT",
                url: "lich-su-khai-bao-bao-hiem-y-te",
                defaults: new { controller = "LichSuBHYT", action = "Index" }
            );

            routes.MapRoute(
                name: "LichToanTruong",
                url: "lich-toan-truong",
                defaults: new { controller = "LichToanTruong", action = "Index" }
            );

            routes.MapRoute(
                name: "LichTheoTienDo",
                url: "lich-theo-tien-do",
                defaults: new { controller = "LichTheoTienDo", action = "Index" }
            );

            routes.MapRoute(
                name: "LienHeGopY",
                url: "lien-he-gop-y",
                defaults: new { controller = "LienHeGopY", action = "Index" }
            );

            routes.MapRoute(
                name: "PhieuThuTrucTuyen",
                url: "phieu-thu-truc-tuyen",
                defaults: new { controller = "PhieuThuTrucTuyen", action = "Index" }
            );

            routes.MapRoute(
                name: "ThanhToanDichVu",
                url: "thanh-toan-dich-vu",
                defaults: new { controller = "ThanhToanDichVu", action = "Index" }
            );

            routes.MapRoute(
                name: "ThanhToanNoiTru",
                url: "thanh-toan-noi-tru",
                defaults: new { controller = "ThanhToanNoiTru", action = "Index" }
            );

            routes.MapRoute(
                name: "ThongTinDiemDanh",
                url: "thong-tin-diem-danh",
                defaults: new { controller = "ThongTinDiemDanh", action = "Index" }
            );

            routes.MapRoute(
                name: "ThongTinSinhVien",
                url: "thong-tin-sinh-vien",
                defaults: new { controller = "ThongTinSinhVien", action = "Index" }
            );

            routes.MapRoute(
                name: "TinTuc",
                url: "tin-tuc",
                defaults: new { controller = "TinTuc", action = "Index" }
            );

            routes.MapRoute(
                name: "TinTucChung",
                url: "tin-tuc-chung",
                defaults: new { controller = "TinTucChung", action = "Index" }
            );

            routes.MapRoute(
                name: "TinTucTheoLop",
                url: "tin-tuc-theo-lop",
                defaults: new { controller = "TinTucTheoLop", action = "Index" }
            );

            routes.MapRoute(
                name: "TuDanhGiaKetQuaRenLuyen",
                url: "tu-danh-gia-ket-qua-ren-luyen",
                defaults: new { controller = "TuDanhGiaKetQuaRenLuyen", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Dashboard", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
