using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using NServiceBus;
using NServiceBus.Logging;

namespace StormyCoffin.Web.Infrastructure.Installers
{
    public class NserviceBusInstaller : IWindsorInstaller
    {
        private static ISendOnlyBus _bus;
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            InitBus();
            container.Register(Component.For<ISendOnlyBus>().Instance(_bus).LifestyleSingleton());
        }

        private static void InitBus()
        {
            if (_bus != null)
                return;
         

            var busConfiguration = new BusConfiguration();
            busConfiguration.UseContainer<WindsorBuilder>();
            UnobtrusiveMessageConvention.Configure(busConfiguration);
            _bus = Bus.CreateSendOnly(busConfiguration);
        }
    }
}