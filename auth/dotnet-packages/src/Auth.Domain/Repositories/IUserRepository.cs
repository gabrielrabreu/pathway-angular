using Auth.Domain.Entities;
using System.Threading.Tasks;

namespace Auth.Domain.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> FindByEmailAndPasswordAsync(string email, string password);
        Task<User> FindByEmailAsync(string email);
    }
}
