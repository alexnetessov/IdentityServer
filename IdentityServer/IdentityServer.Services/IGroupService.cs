using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityServer.Data.Model;

namespace IdentityServer.Services
{
    public interface IGroupService
    {
        IEnumerable<Group> GetAllGroups();

        Task<Group> GetGroupById(Guid id);

        Task<Guid> AddGroup(Group group);

        Task<bool> UpdateGroup(Group group);

        Task<bool> DeleteGroup(Guid id);
    }
}