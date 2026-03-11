using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortalMVC.Models
{
    public class SP_WEB_XemChuongTrinhKhung
    {
        public long Id { get; set; }
        public byte? HocKy { get; set; }
        public int? SoTCBatBuoc { get; set; }
        public int? SoTCTuChon { get; set; }
        public string MaMonHoc { get; set; }
        public string MaHocPhan { get; set; }
        public string TenMonHoc { get; set; }
        public byte? DVHT { get; set; }
        public string SoTinChi { get; set; }
        public int? SoDVHTTuChon { get; set; }
        public int? SoTietLyThuyet { get; set; }
        public int? SoTietThucHanh { get; set; }
        public int? SoTietTHBT { get; set; }
        public bool? IsLyThuyet { get; set; }
        public bool? IsBatBuoc { get; set; }
        public string HocPhanTruoc { get; set; }
        public string HocPhanTienQuyet { get; set; }
        public string HocPhanSongHanh { get; set; }
        public string MaHocPhanTuongDuong { get; set; }
        public bool? KhongTinhDiemTBC { get; set; }
        public int? SoNhomTuChon { get; set; }
        public int? IDDangKyHocPhan { get; set; }
        public decimal? DiemTongKet { get; set; }
        public bool? IsDat { get; set; }
        public bool? IsDuSTCNhomTC { get; set; }
        public int? IDKhoiKienThuc { get; set; }
        public string TenKhoiKienThuc { get; set; }
        public int? IDDeCuongMonHoc { get; set; }
        public string UrlDeCuongMonHoc { get; set; }
        public int? IDHinhThucThi { get; set; }
        public string TenHinhThucThi { get; set; }
        public int? IDLoaiHinhGiangDay { get; set; }
        public string TenLoaiHinhGiangDay { get; set; }
        public int? IDDeCuongHocPhan { get; set; }
        public int? TrangThaiHocTap { get; set; }
    }
}