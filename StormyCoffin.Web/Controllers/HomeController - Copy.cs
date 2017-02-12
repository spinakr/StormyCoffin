using System.Web.Http;

namespace StormyCoffin.Web.Controllers
{
    [RoutePrefix("api")]
    public class HomeController : ApiController
    {

        [HttpGet]
        [Route("ping")]
        public string Ping()
        {
            return "pong";
        }
    }
}