using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DangKyMuonPhongController : Controller
    {
        // GET: DangKyMuonPhong
        public ActionResult Index()
        {
            return View("DangKyMuonPhong");
        }
    }
}