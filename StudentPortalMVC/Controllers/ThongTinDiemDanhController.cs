using System.IO;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class ThongTinDiemDanhController : Controller
    {
        // GET: /ThongTinDiemDanh/
        public ActionResult Index()
        {
            return View();
        }
    }
}