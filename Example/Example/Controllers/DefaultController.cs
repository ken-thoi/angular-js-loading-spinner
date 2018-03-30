using System.Threading;
using System.Web.Http;

namespace Example.Controllers
{
    public class DefaultController : ApiController
    {
        public IHttpActionResult Get()
        {
            Thread.Sleep(3000);
            //return NotFound(); // Returns a NotFoundResult
            return Ok("Ken Thoi");  // Returns an OkNegotiatedContentResult
        }
    }
}
