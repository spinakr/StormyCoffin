using System;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dispatcher;
using Castle.MicroKernel;

namespace StormyCoffin.Api.Infrastructure
{
    public class WindsorHttpControllerActivator : IHttpControllerActivator
    {
        private readonly IKernel _kernel;

        public WindsorHttpControllerActivator(IKernel kernel)
        {
            _kernel = kernel;
        }

        public IHttpController Create(HttpRequestMessage request, HttpControllerDescriptor controllerDescriptor, Type controllerType)
        {
            var controller = (IHttpController)_kernel.Resolve(controllerType);
            request.RegisterForDispose(new Release(() => _kernel.ReleaseComponent(controller)));
            return controller;
        }
    }

    public class Release : IDisposable
    {
        private readonly Action _release;

        public Release(Action release)
        {
            _release = release;
        }

        public void Dispose()
        {
            _release();
        }
    }
}