using System.IO;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DanhSachHoSoCaNhanController : Controller
    {
        // GET: DanhSachHoSoCaNhan
        public ActionResult Index()
        {
            return View();
        }
    }
}