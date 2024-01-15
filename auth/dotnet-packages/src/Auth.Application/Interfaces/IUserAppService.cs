using Auth.Application.ViewModels;
using System;
using System.Threading.Tasks;

namespace Auth.Application.Interfaces
{
    public interface IUserAppService : IDisposable
    {
        Task<LoginResponseViewModel> LoginAsync(LoginUserViewModel loginUser);
        Task RegisterAsync(RegisterUserViewModel registerUser);
    }
}
