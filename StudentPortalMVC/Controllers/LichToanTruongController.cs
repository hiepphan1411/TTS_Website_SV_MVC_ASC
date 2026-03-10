using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class LichToanTruongController : Controller
    {
        // GET: LichToanTruong
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetDataLichToanTruong()
        {
            string filePath = Server.MapPath("~/App_Data/LichToanTruong/lich-toan-truong.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }
    }
}