using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace picFlow.Controllers
{


    public class Data
    {
        public Data(string stringas) {
            dataString = stringas;}
        public string dataString { get; set; }
    }

    [ApiController]
    [Route("API/[controller]")]
    public class ExampleController : Controller
    {
        [HttpGet]
        [Route("route1")]
        public Data ReturnString()
        {
            return new Data("LABAAS RIMAAIIA");
        }
    }
}
