using FluentValidation.Results;
using MediatR;
using Supply.Core.Domain.CommandHandlers;
using Supply.Core.Domain.Mediator;
using Supply.Core.Domain.Validators;
using Supply.Domain.Commands.VehicleCommands;
using Supply.Domain.Entities;
using Supply.Domain.Interfaces;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Supply.Domain.CommandHandlers
{
    public class VehicleCommandHandler : CommandHandler,
        IRequestHandler<AddVehicleCommand, ValidationResult>,
        IRequestHandler<UpdateVehicleCommand, ValidationResult>,
        IRequestHandler<RemoveVehicleCommand, ValidationResult>
    {
        private readonly IMediatorHandler _mediatorHandler;
        private readonly IVehicleRepository _vehicleRepository;

        public VehicleCommandHandler(IMediatorHandler mediatorHandler, 
                                     IVehicleRepository vehicleRepository)
        {
            _mediatorHandler = mediatorHandler;
            _vehicleRepository = vehicleRepository;
        }

        public async Task<ValidationResult> Handle(AddVehicleCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid())
            {
                return request.ValidationResult;
            }

            var vehicle = new Vehicle(request.Plate);

            if ((await _vehicleRepository.Search(x => x.Plate == vehicle.Plate)).Any())
            {
                AddError(DomainMessages.AlreadyInUse.Format("Plate").Message);
                return ValidationResult;
            }

            _vehicleRepository.Add(vehicle);

            return await Commit(_vehicleRepository.UnitOfWork);
        }

        public async Task<ValidationResult> Handle(UpdateVehicleCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid())
            {
                return request.ValidationResult;
            }

            var vehicle = await _vehicleRepository.GetById(request.AggregateId);
            if (vehicle == null)
            {
                AddError(DomainMessages.NotFound.Format("Vehicle").Message);
                return ValidationResult;
            }

            if ((await _vehicleRepository.Search(x => x.Plate == request.Plate && x.Id != request.AggregateId)).Any())
            {
                AddError(DomainMessages.AlreadyInUse.Format("Plate").Message);
                return ValidationResult;
            }

            vehicle.UpdatePlate(request.Plate);
            _vehicleRepository.Update(vehicle);

            return await Commit(_vehicleRepository.UnitOfWork);
        }

        public async Task<ValidationResult> Handle(RemoveVehicleCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid())
            {
                return request.ValidationResult;
            }

            var vehicle = await _vehicleRepository.GetById(request.AggregateId);
            if (vehicle == null)
            {
                AddError(DomainMessages.NotFound.Format("Vehicle").Message);
                return ValidationResult;
            }

            _vehicleRepository.Remove(vehicle);

            return await Commit(_vehicleRepository.UnitOfWork);
        }
    }
}
