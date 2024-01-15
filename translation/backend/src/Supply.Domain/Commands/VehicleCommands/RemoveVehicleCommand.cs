using Supply.Core.Domain.Commands;
using Supply.Domain.Validators.VehicleValidators;
using System;

namespace Supply.Domain.Commands.VehicleCommands
{
    public class RemoveVehicleCommand : Command
    {
        public RemoveVehicleCommand(Guid id) : base(id) { }

        public override bool IsValid()
        {
            ValidationResult = new RemoveVehicleCommandValidator().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
