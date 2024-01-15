using Auth.Domain.Commands.UserCommands;
using FluentValidation;

namespace Auth.Domain.Validators.UserValidators
{
    public abstract class UserCommandValidator<T> : AbstractValidator<T> where T : UserCommand<T> { }
}
