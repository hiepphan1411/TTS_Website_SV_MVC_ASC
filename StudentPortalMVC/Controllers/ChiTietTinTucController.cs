using System.IO;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class ChiTietTinTucController : Controller
    {
        // GET: ChiTietTinTuc
        public ActionResult Index()
        {
            return View();
        }
    }
}