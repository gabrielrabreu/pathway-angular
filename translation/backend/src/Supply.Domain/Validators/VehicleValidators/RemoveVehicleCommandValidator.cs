using FluentValidation;
using Supply.Core.Domain.Validators;
using Supply.Domain.Commands.VehicleCommands;

namespace Supply.Domain.Validators.VehicleValidators
{
    public class RemoveVehicleCommandValidator : CommandValidator<RemoveVehicleCommand>
    {
        public RemoveVehicleCommandValidator()
        {
            RuleFor(x => x.AggregateId)
                .NotEmpty()
                .WithMessage(DomainMessages.RequiredField.Format("Id").Message);
        }
    }
}
