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
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Dashboard", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
