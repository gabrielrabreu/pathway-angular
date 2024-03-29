﻿using FluentValidation.Results;
using Supply.Application.DTOs.VehicleDTOs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Supply.Application.Interfaces
{
    public interface IVehicleAppService
    {
        Task<IEnumerable<VehicleDTO>> GetAll();
        Task<VehicleDTO> GetById(Guid id);

        Task<ValidationResult> Add(AddVehicleDTO addVehicleDTO);
        Task<ValidationResult> Update(UpdateVehicleDTO updateVehicleDTO);
        Task<ValidationResult> Remove(Guid id);
    }
}
