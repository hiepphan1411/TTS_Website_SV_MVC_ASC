using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DangKyHoanThiController : Controller
    {
        // GET: DangKyHoanThi
        public ActionResult Index()
        {
            return View("DangKyHoanThi");
        }
    }
}