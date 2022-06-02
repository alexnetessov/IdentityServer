using IdentityServer.Data;
using IdentityServer.Data.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityServer.Services.Exceptions;

namespace IdentityServer.Services
{
    public sealed class UserService : IUserService
    {
        private readonly IdentityContext _context;

        public UserService(IdentityContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.AsNoTracking();
        }

        public async Task<User> GetUserById(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            return await _context.Users.AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<Guid> AddUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentException();
            }

            user.Id = new Guid();
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user.Id;
        }

        public async Task<bool> UpdateUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentException();
            }

            var existentUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == user.Id);

            if (existentUser == null)
            {
                throw new NotFoundException($"User {user.Id} not found");
            }

            existentUser.UserName = user.UserName;
            existentUser.FirstName = user.FirstName;
            existentUser.LastName = user.LastName;
            existentUser.Email = user.Email;

            _context.Users.Update(existentUser);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteUser(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            var existentUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);

            if (existentUser == null)
            {
                throw new NotFoundException($"User {id} not found");
            }

            _context.Users.Remove(existentUser);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
