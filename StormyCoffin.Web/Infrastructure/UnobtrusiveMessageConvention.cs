using System;
using NServiceBus;

namespace StormyCoffin.Web.Infrastructure
{
    public class UnobtrusiveMessageConvention 
    {
        public static void Configure(BusConfiguration configuration)
        {
            configuration.Conventions().DefiningCommandsAs(CommandDefinition);
            configuration.Conventions().DefiningEventsAs(EventDefinition);
        }

        private static bool EventDefinition(Type t)
        {
            var isEventType = typeof(IEvent).IsAssignableFrom(t);
            var isUnobtrusive = t.Namespace != null && (t.Namespace.EndsWith("Messages.Events") || t.Namespace.EndsWith("Messages.Sales.Events"));

            return isEventType || isUnobtrusive;
        }

        private static bool CommandDefinition(Type t)
        {
            var isCommandType = typeof(ICommand).IsAssignableFrom(t);
            var isUnobtrusive = t.Namespace != null && (t.Namespace.EndsWith("Messages.Commands") || t.Namespace.EndsWith("Messages.Sales.Commands"));

            return isCommandType || isUnobtrusive;
        }
    }
}