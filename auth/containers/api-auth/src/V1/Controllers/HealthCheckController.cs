using Microsoft.AspNetCore.Mvc;

namespace Auth.Api.V1.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}")]
    public class HealthCheckController : ControllerBase
    {
        [HttpGet()]
        public ActionResult Get()
        {
            System.Console.WriteLine($"HealthCheckController/Get - UserAgent: {HttpContext.Request.Headers["User-Agent"]} - IP: {HttpContext.Connection.RemoteIpAddress.MapToIPv4()}");

            return Ok();
        }
    }
}
