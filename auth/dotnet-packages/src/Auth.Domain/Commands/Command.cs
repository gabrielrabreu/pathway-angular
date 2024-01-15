using Auth.Domain.Events;
using FluentValidation.Results;
using MediatR;
using System;

namespace Auth.Domain.Commands
{
    public abstract class Command : Message, IRequest<bool>
    {
        public DateTime Timestamp { get; }
        public ValidationResult ValidationResult { get; set; }

        protected Command(Guid aggregateId) : base(aggregateId)
        {
            Timestamp = DateTime.Now;
        }

        public abstract bool IsValid();
    }
}
