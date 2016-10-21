using System.Configuration;
using System.IO;
using System.Reflection;
using System.Text;
using Serilog;
using Serilog.Enrichers;
using Serilog.Formatting.Json;
using Serilog.Sinks.RollingFile;
using SerilogWeb.Classic;

namespace IfInsurance.Anderson.Web.Infrastructure
{

    public class LogConfig
    {
        public static void ConfigureLogging()
        {
            const int retainedFileCountLimit = 31;

            var logDirectory = ConfigurationManager.AppSettings["LogDirectory"];
            var applicationName = ConfigurationManager.AppSettings["Global.ApplicationName"];
            var applicationVersion = Assembly.GetExecutingAssembly().GetName().Version;
            var logFileNameFormat = $"{applicationName}-{applicationVersion}-{{Date}}.log";
            var pathFormat = Path.Combine(logDirectory, logFileNameFormat);

            ApplicationLifecycleModule.IsEnabled = false; // Disable logging of all requests

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .Enrich.FromLogContext()
                .Enrich.With<MachineNameEnricher>()
                .Enrich.With<ProcessIdEnricher>()
                .Enrich.With<ThreadIdEnricher>()
                .Enrich.WithProperty("ApplicationName", applicationName)
                .Enrich.WithProperty("ApplicationVersion", applicationVersion)
                .Enrich.WithProperty("Environment", ConfigurationManager.AppSettings.Get("Global.Environment.Name"))
                .WriteTo.Sink(new RollingFileSink(pathFormat, new JsonFormatter(renderMessage: true), null, retainedFileCountLimit, Encoding.UTF8))
                .CreateLogger();
        }
    }

}
