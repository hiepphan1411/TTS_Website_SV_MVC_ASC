using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class LichTheoTuanController : Controller
    {
        // GET: LichTheoTuan
        [ActionName("Lich-theo-tuan")]
        public ActionResult LichTheoTuan()
        {
            return View("LichTheoTuan");
        }

        // URL: /LichTheoTuan/GetData
        public ActionResult GetData()
        {
            string path = Server.MapPath("~/App_Data/lich-theo-tuan.json");
            string json = System.IO.File.ReadAllText(path);

            return Content(json, "application/json");
        }
    }
}