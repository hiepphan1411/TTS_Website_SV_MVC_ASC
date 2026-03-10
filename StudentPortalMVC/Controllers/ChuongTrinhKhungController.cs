using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Mvc;
using StudentPortalMVC.Models;

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

        /*public ActionResult GetCTKData()
        {
            string filePath = Server.MapPath("~/App_Data/ChuongTrinhKhung/ctk-dataset.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }*/

        public ActionResult GetCTKData()
        {
            using (var context = new StudentPortalDbContext())
            {
                var data = context.Database.SqlQuery<SP_WEB_XemChuongTrinhKhung>(
                    "SELECT * FROM tmpCTK"
                ).ToList();

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
