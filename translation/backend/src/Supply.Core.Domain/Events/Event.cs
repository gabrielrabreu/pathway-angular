using MediatR;
using System;

namespace Supply.Core.Domain.Events
{
    public abstract class Event : Message, INotification
    {
        protected Event(Guid aggregateId) : base(aggregateId) { }
    }
}
