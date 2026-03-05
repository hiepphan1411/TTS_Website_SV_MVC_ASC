using System.IO;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class ChuongTrinhKhungController : Controller
    {
        // GET: /ChuongTrinhKhung/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetProgressData()
        {
            string filePath = Server.MapPath("~/App_Data/ChuongTrinhKhung/chuong-trinh-khung.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }

        public ActionResult GetHocKyData()
        {
            string filePath = Server.MapPath("~/App_Data/ChuongTrinhKhung/hoc-ky.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }

        public ActionResult GetKhoiKienThucData()
        {
            string filePath = Server.MapPath("~/App_Data/ChuongTrinhKhung/khoi-kien-thuc.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }
    }
}
