using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace StudentPortalMVC.Models.repository
{
    public class ChuongTrinhKhungRepository
    {
        private readonly string _connectionString;

        public ChuongTrinhKhungRepository()
        {
            _connectionString = ConfigurationManager.ConnectionStrings["StudentPortalDb"].ConnectionString;
        }

        // Lấy danh sách CCK 
        public List<SP_WEB_XemChuongTrinhKhung> GetAll()
        {
            var result = new List<SP_WEB_XemChuongTrinhKhung>();

            const string sql = @"
        SELECT [TrangThaiHocTap], [Id], [HocKy], [SoTCBatBuoc], [SoTCTuChon],
               [MaMonHoc], [MaHocPhan], [TenMonHoc], [DVHT], [SoTinChi],
               [SoDVHTTuChon], [SoTietLyThuyet], [SoTietThucHanh], [SoTietTHBT],
               [IsLyThuyet], [IsBatBuoc], [HocPhanTruoc], [HocPhanTienQuyet],
               [HocPhanSongHanh], [MaHocPhanTuongDuong], [KhongTinhDiemTBC],
               [SoNhomTuChon], [IDDangKyHocPhan], [DiemTongKet], [IsDat],
               [IsDuSTCNhomTC], [IDKhoiKienThuc], [TenKhoiKienThuc],
               [IDDeCuongMonHoc], [UrlDeCuongMonHoc], [IDHinhThucThi],
               [TenHinhThucThi], [IDLoaiHinhGiangDay], [TenLoaiHinhGiangDay],
               [IDDeCuongHocPhan]
        FROM   dbo.tmpCTK
        ORDER  BY [HocKy], [IsBatBuoc] DESC, [Id]";

            using (var conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                using (var cmd = new SqlCommand(sql, conn))
                {
                    cmd.CommandType = CommandType.Text;   

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            result.Add(MapRow(reader));
                        }
                    }
                }
            }

            return result;
        }

        // map data
        private static SP_WEB_XemChuongTrinhKhung MapRow(SqlDataReader r)
        {
            return new SP_WEB_XemChuongTrinhKhung
            {
                TrangThaiHocTap = r["TrangThaiHocTap"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["TrangThaiHocTap"]),
                Id = Convert.ToInt64(r["Id"]),
                HocKy = r["HocKy"] == DBNull.Value ? (byte?)null : Convert.ToByte(r["HocKy"]),
                SoTCBatBuoc = r["SoTCBatBuoc"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoTCBatBuoc"]),
                SoTCTuChon = r["SoTCTuChon"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoTCTuChon"]),
                MaMonHoc = r["MaMonHoc"] as string,
                MaHocPhan = r["MaHocPhan"] as string,
                TenMonHoc = r["TenMonHoc"] as string,
                DVHT = r["DVHT"] == DBNull.Value ? (byte?)null : Convert.ToByte(r["DVHT"]),
                SoTinChi = r["SoTinChi"] as string,
                SoDVHTTuChon = r["SoDVHTTuChon"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoDVHTTuChon"]),
                SoTietLyThuyet = r["SoTietLyThuyet"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoTietLyThuyet"]),
                SoTietThucHanh = r["SoTietThucHanh"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoTietThucHanh"]),
                SoTietTHBT = r["SoTietTHBT"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoTietTHBT"]),
                IsLyThuyet = r["IsLyThuyet"] == DBNull.Value ? (bool?)null : Convert.ToBoolean(r["IsLyThuyet"]),
                IsBatBuoc = r["IsBatBuoc"] == DBNull.Value ? (bool?)null : Convert.ToBoolean(r["IsBatBuoc"]),
                HocPhanTruoc = r["HocPhanTruoc"] as string,
                HocPhanTienQuyet = r["HocPhanTienQuyet"] as string,
                HocPhanSongHanh = r["HocPhanSongHanh"] as string,
                MaHocPhanTuongDuong = r["MaHocPhanTuongDuong"] as string,
                KhongTinhDiemTBC = r["KhongTinhDiemTBC"] == DBNull.Value ? (bool?)null : Convert.ToBoolean(r["KhongTinhDiemTBC"]),
                SoNhomTuChon = r["SoNhomTuChon"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["SoNhomTuChon"]),
                IDDangKyHocPhan = r["IDDangKyHocPhan"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDDangKyHocPhan"]),
                DiemTongKet = r["DiemTongKet"] == DBNull.Value ? (decimal?)null : Convert.ToDecimal(r["DiemTongKet"]),
                IsDat = r["IsDat"] == DBNull.Value ? (bool?)null : Convert.ToBoolean(r["IsDat"]),
                IsDuSTCNhomTC = r["IsDuSTCNhomTC"] == DBNull.Value ? (bool?)null : Convert.ToBoolean(r["IsDuSTCNhomTC"]),
                IDKhoiKienThuc = r["IDKhoiKienThuc"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDKhoiKienThuc"]),
                TenKhoiKienThuc = r["TenKhoiKienThuc"] as string,
                IDDeCuongMonHoc = r["IDDeCuongMonHoc"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDDeCuongMonHoc"]),
                UrlDeCuongMonHoc = r["UrlDeCuongMonHoc"] as string,
                IDHinhThucThi = r["IDHinhThucThi"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDHinhThucThi"]),
                TenHinhThucThi = r["TenHinhThucThi"] as string,
                IDLoaiHinhGiangDay = r["IDLoaiHinhGiangDay"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDLoaiHinhGiangDay"]),
                TenLoaiHinhGiangDay = r["TenLoaiHinhGiangDay"] as string,
                IDDeCuongHocPhan = r["IDDeCuongHocPhan"] == DBNull.Value ? (int?)null : Convert.ToInt32(r["IDDeCuongHocPhan"]),
            };
        }
    }
}

