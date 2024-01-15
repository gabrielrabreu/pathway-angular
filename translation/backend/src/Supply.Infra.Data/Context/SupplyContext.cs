using Microsoft.EntityFrameworkCore;
using Supply.Core.Domain.Interfaces;
using Supply.Domain.Entities;
using Supply.Infra.Data.Mappings;
using System.Threading.Tasks;

namespace Supply.Infra.Data.Context
{
    public class SupplyContext : DbContext, IUnitOfWork
    {
        public DbSet<Vehicle> Vehicles { get; set; }

        public SupplyContext(DbContextOptions<SupplyContext> options) : base(options) { }

        public async Task<bool> Commit()
        {
            return await SaveChangesAsync() > 0;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new VehicleMapping());

            base.OnModelCreating(modelBuilder);
        }
    }
}
