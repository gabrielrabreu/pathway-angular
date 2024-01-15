using FluentValidation.Results;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Supply.Application.Interfaces;
using Supply.Application.Services;
using Supply.Core.Domain.Mediator;
using Supply.Domain.CommandHandlers;
using Supply.Domain.Commands.VehicleCommands;
using Supply.Domain.Interfaces;
using Supply.Infra.Data.Context;
using Supply.Infra.Data.Repositories;

namespace Supply.Infra.CrossCutting.IoC
{
    public static class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Application
            services.AddScoped<IVehicleAppService, VehicleAppService>();

            // Domain Bus (Mediator)
            services.AddScoped<IMediatorHandler, MediatorHandler>();

            // Domain - Commands
            services.AddScoped<IRequestHandler<AddVehicleCommand, ValidationResult>, VehicleCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateVehicleCommand, ValidationResult>, VehicleCommandHandler>();
            services.AddScoped<IRequestHandler<RemoveVehicleCommand, ValidationResult>, VehicleCommandHandler>();

            // Infra - Data
            services.AddScoped<IVehicleRepository, VehicleRepository>();
            services.AddScoped<SupplyContext>();
        }
    }
}
