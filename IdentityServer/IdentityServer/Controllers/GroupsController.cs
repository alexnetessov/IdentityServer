using AutoMapper;
using IdentityServer.Data.Model;
using IdentityServer.Dto;
using IdentityServer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [Route("api/v0/groups")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private readonly IGroupService _groupService;
        private readonly IMapper _mapper;

        public GroupsController(IGroupService groupService, IMapper mapper)
        {
            _groupService = groupService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetGroups()
        {
            var groups = _groupService.GetAllGroups();
            return Ok(_mapper.Map<IEnumerable<GroupDto>>(groups));
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetGroupById(Guid id)
        {
            var group = await _groupService.GetGroupById(id);
            return Ok(_mapper.Map<GroupDto>(group));
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup([FromBody] GroupDto group)
        {
            var id = await _groupService.AddGroup(_mapper.Map<Group>(group));
            return Ok(id);
        }

        [HttpPut]
        public async Task<IActionResult> ChangeGroup([FromBody] GroupDto group)
        {
            await _groupService.UpdateGroup(_mapper.Map<Group>(group));
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteGroup(Guid id)
        {
            await _groupService.DeleteGroup(id);
            return Ok();
        }
    }
    
}
