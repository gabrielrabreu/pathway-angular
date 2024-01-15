using FluentValidation.Results;
using Supply.Core.Domain.Commands;
using Supply.Domain.Validators.VehicleValidators;
using System;

namespace Supply.Domain.Commands.VehicleCommands
{
    public class AddVehicleCommand : Command
    {
        public string Plate { get; }

        public AddVehicleCommand(string plate) : base(Guid.Empty)
        {
            Plate = plate;
        }

        public override bool IsValid()
        {
            ValidationResult = new AddVehicleCommandValidator().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
