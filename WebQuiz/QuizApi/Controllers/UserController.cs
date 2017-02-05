using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuizApi.Models;

namespace QuizApi.Controllers
{
    [RoutePrefix("user")]
    public class UserController : BaseController
    {
        [Route("current")]
        public HttpResponseMessage GetCurrent(int version)
        {

            ValidateApiVersionAndState(version);
            List<User> users = new List<User>()
            {
                new User{ Email = "MelCaro@gmail.com", FirstName = "Mel", LastName = "Caro", DateOfBirth = new DateTime(1990, 9, 6), MonthlySalary = "50000.00" },
                new User{ Email = "JohnDoe@gmail.com", FirstName = "John", LastName = "Doe", DateOfBirth = new DateTime(1991, 9, 6), MonthlySalary = "100000.00" },
                new User{ Email = "AnneKibby@gmail.com", FirstName = "Anne", LastName = "Kibby", DateOfBirth = new DateTime(1992, 9, 6), MonthlySalary = "75000.00" },
            };
            return Request.CreateResponse(HttpStatusCode.OK, users);
            
        }
    }
}