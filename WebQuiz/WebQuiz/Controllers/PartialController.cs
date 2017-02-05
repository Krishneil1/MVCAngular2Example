using System.Web.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace WebQuiz.Controllers
{
    public class PartialController : Controller
    {
        // GET: Partial
        public ActionResult Main()
        {
            return View();
        }

        // GET: Partial
        public ActionResult Default()
        {
            return View();
        }

        //GET: Partial
        public ActionResult Profile()
        {
            return View();
        }
        public ActionResult User()
        {
            return View();
        }
    }
}