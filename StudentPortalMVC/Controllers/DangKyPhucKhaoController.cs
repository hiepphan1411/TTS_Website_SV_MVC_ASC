using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DangKyPhucKhaoController : Controller
    {
        // GET: DangKyPhucKhao
        public ActionResult Index()
        {
            return View("DangKyPhucKhao");
        }
    }
}