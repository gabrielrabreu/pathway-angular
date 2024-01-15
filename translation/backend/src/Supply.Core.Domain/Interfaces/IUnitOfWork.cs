using System.Threading.Tasks;

namespace Supply.Core.Domain.Interfaces
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}
