using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class TuDanhGiaKetQuaRenLuyenController : Controller
    {
        // GET: TuDanhGiaKetQuaRenLuyen
        public ActionResult Index()
        {
            return View("TuDanhGiaKetQuaRenLuyen");
        }
    }
}