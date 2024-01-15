using Auth.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Auth.Infra.Data.Contexts
{
    public class CovenantDbContext : DbContext
    {
        public CovenantDbContext(DbContextOptions<CovenantDbContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
    }
}
