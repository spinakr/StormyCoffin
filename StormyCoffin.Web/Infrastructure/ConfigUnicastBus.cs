using System.Configuration;
using NServiceBus.Config;
using NServiceBus.Config.ConfigurationSource;

namespace StormyCoffin.Web.Infrastructure
{
    public class ConfigUnicastBus : IProvideConfiguration<UnicastBusConfig>
    {
        public UnicastBusConfig GetConfiguration()
        {
            var config = new UnicastBusConfig();
            var env = AppSettings.GetEnvironment();
            var server = AppSettings.GetHost();

            //config.MessageEndpointMappings.Add(new MessageEndpointMapping
            //{
            //    Messages = typeof(IAmMarkerForConseilMessages).Namespace,
            //    Endpoint = $"{env}_conseil@{server}"
            //});
                
            return config;
        }
    }

    internal static class AppSettings
    {
        internal static string GetHost()
        {
            return string.IsNullOrEmpty(ConfigurationManager.AppSettings["Environment.Host"]) ? "localhost" : ConfigurationManager.AppSettings["Environment.Host"];
        }
        internal static string GetEnvironment()
        {
            return string.IsNullOrEmpty(ConfigurationManager.AppSettings["Environment.ShortName"]) ? "wip" : ConfigurationManager.AppSettings["Environment.ShortName"];
        }

        internal const string ApplicationName = "stormycoffin";
    }
}