using AutoMapper;
using Auth.Application.ViewModels;
using Auth.Domain.Entities;

namespace Auth.Application.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<RegisterUserViewModel, User>();
        }
    }
}
