using System;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Newtonsoft.Json.Serialization;
using StormyCoffin.Api.Infrastructure;

namespace StormyCoffin.Api
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            ConfigureCastleWindsor();
            UseCamelCaseJsonFormatting();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        private void UseCamelCaseJsonFormatting()
        {
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        private void ConfigureCastleWindsor()
        {
            var container = new WindsorContainer();
            container.Install(FromAssembly.This());

            // Create ASP.NET Web API controllers
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator), new WindsorHttpControllerActivator(container.Kernel));
        }
    }
}
