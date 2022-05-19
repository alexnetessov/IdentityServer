using System;
using AutoMapper;
using IdentityServer.Data.Model;
using IdentityServer.Dto;

namespace IdentityServer.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<User, UsersDto>();
            CreateMap<UserDto, User>();
        }
    }
}
