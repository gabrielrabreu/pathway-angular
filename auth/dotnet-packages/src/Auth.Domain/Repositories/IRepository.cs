using Auth.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Auth.Domain.Repositories
{
    public interface IRepository<TEntity> : IDisposable where TEntity : Entity
    {
        Task AddAsync(TEntity entity);
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<int> SaveChangesAsync();
    }
}
