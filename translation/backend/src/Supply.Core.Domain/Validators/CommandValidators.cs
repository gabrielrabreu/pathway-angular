using FluentValidation;
using Supply.Core.Domain.Commands;

namespace Supply.Core.Domain.Validators
{
    public abstract class CommandValidator<T> : AbstractValidator<T> where T : Command
    {
        protected CommandValidator()
        {
        }
    }
}
