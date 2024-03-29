﻿using Auth.Domain.Events;
using MediatR;
using System;

namespace Auth.Domain.Notifications
{
    public class DomainNotification : Message, INotification
    {
        public DateTime Timestamp { get; }
        public Guid DomainNotificationId { get; private set; }
        public string Key { get; }
        public string Value { get; }

        public DomainNotification(string key, string value)
        {
            Timestamp = DateTime.UtcNow;
            DomainNotificationId = Guid.NewGuid();
            Key = key;
            Value = value;
        }
    }
}
