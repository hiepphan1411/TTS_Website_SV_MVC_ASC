using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentPortalMVC.Controllers
{
    public class DeXuatXetTotNghiepController : Controller
    {
        // GET: DeXuatXetTotNghiep
        public ActionResult Index()
        {
            return View("DeXuatXetTotNghiep");
        }
    }
}