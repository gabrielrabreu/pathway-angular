using Auth.Domain.Notifications;
using MediatR;
using System.Threading.Tasks;

namespace Auth.Domain.Mediator
{
    public class MediatorHandler : IMediatorHandler
    {
        private readonly IMediator _mediator;

        public MediatorHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task RaiseDomainNotificationAsync<T>(T notification) where T : DomainNotification
        {
            await _mediator.Publish(notification);
        }
    }
}
