using IdentityServer.Data;
using IdentityServer.Data.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityServer.Services.Exceptions;

namespace IdentityServer.Services
{
    public sealed class GroupService : IGroupService
    {
        private readonly IdentityContext _context;

        public GroupService(IdentityContext context)
        {
            _context = context;
        }

        public IEnumerable<Group> GetAllGroups()
        {
            return _context.Groups.AsNoTracking();
        }

        public async Task<Group> GetGroupById(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            return await _context.Groups.AsNoTracking()
                .FirstOrDefaultAsync(g => g.Id == id);
        }

        public async Task<Guid> AddGroup(Group group)
        {
            if (group == null)
            {
                throw new ArgumentException();
            }

            group.Id = new Guid();

            _context.Groups.Add(group);
            await _context.SaveChangesAsync();

            return group.Id;
        }

        public async Task<bool> UpdateGroup(Group group)
        {
            if (group == null)
            {
                throw new ArgumentException();
            }

            var existentGroup = await _context.Groups
                .FirstOrDefaultAsync(g => g.Id == group.Id);

            if (existentGroup == null)
            {
                throw new NotFoundException($"Group {group.Id} not found");
            }

            existentGroup.Name = group.Name;

            _context.Groups.Update(existentGroup);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteGroup(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            var existentGroup = await _context.Groups
                .FirstOrDefaultAsync(g => g.Id == id);

            if (existentGroup == null)
            {
                throw new NotFoundException($"Group {id} not found");
            }

            _context.Groups.Remove(existentGroup);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
