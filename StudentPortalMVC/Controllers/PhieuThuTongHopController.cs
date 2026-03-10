using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class PhieuThuTongHopController : Controller
    {
        // GET: PhieuThuTongHop
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetDataPhieuThuTongHop()
        {
            string filePath = Server.MapPath("~/App_Data/PhieuThuTongHop/phieu-thu-tong-hop.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }
    }
}