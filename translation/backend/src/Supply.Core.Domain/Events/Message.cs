﻿using System;

namespace Supply.Core.Domain.Events
{
    public abstract class Message
    {
        public string MessageType { get; protected set; }
        public Guid AggregateId { get; protected set; }
        public DateTime Timestamp { get; private set; }

        protected Message(Guid aggregateId)
        {
            AggregateId = aggregateId;
            MessageType = GetType().Name;
            Timestamp = DateTime.UtcNow;
        }
    }
}