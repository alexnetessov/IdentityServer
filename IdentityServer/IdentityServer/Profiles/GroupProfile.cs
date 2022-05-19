using AutoMapper;
using IdentityServer.Data.Model;
using IdentityServer.Dto;

namespace IdentityServer.Profiles
{
    public class GroupProfile : Profile
    {
        public GroupProfile()
        {
            CreateMap<Group, GroupDto>();
            CreateMap<GroupDto, Group>();
        }
    }
}
