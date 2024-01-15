using FluentValidation.Results;
using Supply.Core.Domain.Commands;
using Supply.Core.Domain.Events;
using System.Threading.Tasks;

namespace Supply.Core.Domain.Mediator
{
    public interface IMediatorHandler
    {
        Task PublishEvent<T>(T @event) where T : Event;
        Task<ValidationResult> SendCommand<T>(T command) where T : Command;
    }
}
