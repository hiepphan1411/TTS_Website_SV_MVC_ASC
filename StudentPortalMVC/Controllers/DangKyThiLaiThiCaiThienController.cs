using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DangKyThiLaiThiCaiThienController : Controller
    {
        // GET: DangKyThiLaiThiCaiThien
        public ActionResult Index()
        {
            return View("DangKyThiLaiThiCaiThien");
        }
    }
}