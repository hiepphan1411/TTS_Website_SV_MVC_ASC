using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class LichTheoTuanController : Controller
    {
        public ActionResult Index()
        {
            return View("LichTheoTuan");
        }

        public ActionResult GetData()
        {
            string filePath = Server.MapPath("~/App_Data/LichTheoTuan/lich-theo-tuan.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }

        
    }
}