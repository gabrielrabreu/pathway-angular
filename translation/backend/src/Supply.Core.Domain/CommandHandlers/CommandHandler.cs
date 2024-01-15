using FluentValidation.Results;
using Supply.Core.Domain.Interfaces;
using Supply.Core.Domain.Validators;
using System.Threading.Tasks;

namespace Supply.Core.Domain.CommandHandlers
{
    public abstract class CommandHandler
    {
        protected ValidationResult ValidationResult;

        protected CommandHandler()
        {
            ValidationResult = new ValidationResult();
        }

        protected void AddError(string message)
        {
            ValidationResult.Errors.Add(new ValidationFailure(string.Empty, message));
        }

        protected async Task<ValidationResult> Commit(IUnitOfWork uow)
        {
            if (!await uow.Commit())
            {
                AddError(DomainMessages.CommitFailed.Message);
            }

            return ValidationResult;
        }
    }
}
