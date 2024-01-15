using Auth.Domain.Entities;
using Auth.Domain.Repositories;
using Auth.Infra.Data.Common;
using Auth.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Auth.Infra.Data.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(CovenantDbContext context) : base(context) { }

        public async Task<User> FindByEmailAndPasswordAsync(string email, string password)
        {
            var user = await DbSet.AsNoTracking().SingleOrDefaultAsync(u => u.Email == email);

            if (user != null)
            {
                if (SecurePasswordHasher.Verify(password, user.Password))
                {
                    return user;
                }
            }

            return null;
        }

        public async Task<User> FindByEmailAsync(string email)
        {
            return await DbSet.AsNoTracking().SingleOrDefaultAsync();
        }

        public override async Task AddAsync(User user)
        {
            user.Password = SecurePasswordHasher.Hash(user.Password);

            DbSet.Add(user);
            await SaveChangesAsync();
        }
    }
}
