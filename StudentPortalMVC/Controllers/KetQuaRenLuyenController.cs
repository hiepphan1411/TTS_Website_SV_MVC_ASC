using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class KetQuaRenLuyenController : Controller
    {
        // GET: KetQuaRenLuyen
        public ActionResult Index()
        {
            return View("KetQuaRenLuyen");
        }

        public ActionResult GetData()
        {
            string filePath = Server.MapPath("~/App_Data/ket-qua-ren-luyen.json");
            string json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }

    }
}