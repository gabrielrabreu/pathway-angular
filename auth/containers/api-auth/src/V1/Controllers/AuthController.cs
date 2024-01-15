using Auth.Api.Controllers;
using Auth.Application.Interfaces;
using Auth.Application.ViewModels;
using Auth.Domain.Mediator;
using Auth.Domain.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Auth.Api.V1.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}")]
    public class AuthController : MainController
    {
        private readonly IUserAppService _userAppService;

        public AuthController(INotificationHandler<DomainNotification> notifications,
                              IMediatorHandler mediatorHandler,
                              IUserAppService userAppService) : base(notifications, mediatorHandler)
        {
            _userAppService = userAppService;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginUserViewModel loginUser)
        {
            System.Console.WriteLine($"AuthController/Login - UserAgent: {HttpContext.Request.Headers["User-Agent"]} - IP: {HttpContext.Connection.RemoteIpAddress.MapToIPv4()}");

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            return CustomResponse(await _userAppService.LoginAsync(loginUser));
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterUserViewModel registerUser)
        {
            System.Console.WriteLine($"AuthController/Register - UserAgent: {HttpContext.Request.Headers["User-Agent"]} - IP: {HttpContext.Connection.RemoteIpAddress.MapToIPv4()}");

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _userAppService.RegisterAsync(registerUser);

            if (ValidOperation())
            {
                return await Login(new LoginUserViewModel() { Email = registerUser.Email, Password = registerUser.Password });
            }

            return CustomResponse();
        }
    }
}
