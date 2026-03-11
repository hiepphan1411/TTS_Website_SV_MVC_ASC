using System.IO;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class TinTucController : Controller
    {
        // GET: TinTuc
        public ActionResult Index()
        {
            return View();
        }
    }
}