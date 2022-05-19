using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityServer.Data.Model;

namespace IdentityServer.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();

        Task<User> GetUserById(Guid id);

        Task<Guid> AddUser(User user);

        Task<bool> UpdateUser(User user);

        Task<bool> DeleteUser(Guid id);
    }
}