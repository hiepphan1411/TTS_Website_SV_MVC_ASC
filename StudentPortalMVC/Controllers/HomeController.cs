using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Index", "Dashboard");
        }
    }
}
