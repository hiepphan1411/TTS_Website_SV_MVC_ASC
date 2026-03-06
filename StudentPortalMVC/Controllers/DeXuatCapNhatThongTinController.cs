using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DeXuatCapNhatThongTinController : Controller
    {
        // GET: DeXuatCapNhatThongTin
        public ActionResult Index()
        {
            return View("DeXuatCapNhatThongTin");
        }
    }
}