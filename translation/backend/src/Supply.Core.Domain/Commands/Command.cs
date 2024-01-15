using FluentValidation.Results;
using MediatR;
using Supply.Core.Domain.Events;
using System;

namespace Supply.Core.Domain.Commands
{
    public abstract class Command : Message, IRequest<ValidationResult>
    {
        public ValidationResult ValidationResult { get; protected set; }

        protected Command(Guid aggregateId) : base(aggregateId) { }

        public abstract bool IsValid();
    }
}
