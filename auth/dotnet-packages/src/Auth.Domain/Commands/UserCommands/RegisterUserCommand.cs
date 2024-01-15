using Auth.Domain.Validators.UserValidators;
using System;

namespace Auth.Domain.Commands.UserCommands
{
    public class RegisterUserCommand : UserCommand<RegisterUserCommand>
    {
        public RegisterUserCommand()
            : base(Guid.Empty) { }

        public override bool IsValid()
        {
            ValidationResult = new RegisterUserCommandValidator().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
