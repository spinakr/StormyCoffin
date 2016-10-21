using Castle.Windsor;
using Castle.Windsor.Installer;
using System;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Mvc;
using System.Web.Routing;
using Newtonsoft.Json.Serialization;
using StormyCoffin.Web.Infrastructure;

namespace StormyCoffin.Web
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            ConfigureCastleWindsor();
            UseCamelCaseJsonFormatting();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
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

            // Create ASP.NET MVC controllers
            var controllerFactory = new WindsorMvcControllerFactory(container.Kernel);
            ControllerBuilder.Current.SetControllerFactory(controllerFactory);

            // Create ASP.NET Web API controllers
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpControllerActivator), new WindsorHttpControllerActivator(container.Kernel));
        }
    }
}
