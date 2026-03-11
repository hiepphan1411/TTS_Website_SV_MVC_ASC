using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DanhGiaRenLuyenLopController : Controller
    {
        // GET: DanhGiaRenLuyenLop
        public ActionResult Index()
        {
            return View("DanhGiaRenLuyenLop");
        }
    }
}