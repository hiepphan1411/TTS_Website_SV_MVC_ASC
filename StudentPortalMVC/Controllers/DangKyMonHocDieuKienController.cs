using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DangKyMonHocDieuKienController : Controller
    {
        // GET: DangKyMonHocDieuKien
        public ActionResult Index()
        {
            return View("DangKyMonHocDieuKien");
        }
    }
}