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
                name: "ThanhToanTrucTuyen",
                url: "thanh-toan-truc-tuyen",
                defaults: new { controller = "ThanhToanTrucTuyen", action = "Index" }
            );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
