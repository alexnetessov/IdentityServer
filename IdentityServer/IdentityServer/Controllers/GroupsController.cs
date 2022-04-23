using IdentityServer.Data;
using IdentityServer.Data.Model;
using IdentityServer.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [Route("api/v0/groups")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private readonly IdentityContext _identityContext;

        public GroupsController(IdentityContext identityContext)
        {
            _identityContext = identityContext;
        }

        [HttpGet]
        public IActionResult GetGroups()
        {
            var groups = _identityContext.Groups
                .Select(g => new GroupDto
                {
                    Id = g.Id,
                    Name = g.Name,
                    CreationDate = g.CreationDate
                });

            return Ok(groups);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGroupById(Guid id)
        {
            var group = await _identityContext.Groups.Where(g => g.Id == id)
                .Select(g => new GroupDto
                {
                    Id = g.Id,
                    Name = g.Name,
                    CreationDate = g.CreationDate
                }).FirstOrDefaultAsync();

            if (group == null)
            {
                return BadRequest();
            }

            return Ok(group);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup([FromBody] GroupDto group)
        {
            if (group == null)
            {
                return BadRequest();
            }

            var newGroup = new Group
            {
                Id = new Guid(),
                Name = group.Name
            };

            _identityContext.Groups.Add(newGroup);
            await _identityContext.SaveChangesAsync();
            return Ok(newGroup.Id);
        }

        [HttpPut]
        public async Task<IActionResult> ChangeGroup([FromBody] GroupDto group)
        {
            if (group == null)
            {
                return BadRequest();
            }

            var existingGroup = await _identityContext.Groups.FirstOrDefaultAsync(g => g.Id == group.Id);

            if (existingGroup == null)
            {
                return NotFound();
            }

            existingGroup.Name = group.Name;

            _identityContext.Groups.Update(existingGroup);
            await _identityContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteGroup(Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest();
            }

            var group = await _identityContext.Groups.FirstOrDefaultAsync(g => g.Id == id);

            if (group == null)
            {
                return NotFound();
            }

            _identityContext.Groups.Remove(group);
            await _identityContext.SaveChangesAsync();

            return Ok();
        }
    }
    
}
