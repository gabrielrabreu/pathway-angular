using Auth.Domain.Entities;
using System;

namespace Auth.Domain.Commands.UserCommands
{
    public abstract class UserCommand<T> : Command
        where T : UserCommand<T>
    {
        public User Entity { get; set; }

        protected UserCommand(Guid aggregateId)
            : base(aggregateId) { }
    }
}
