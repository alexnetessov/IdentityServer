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
    [Route("api/v0/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(_mapper.Map<IEnumerable<UserDto>>(users));
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetUser(Guid id)
        {
            var user = await _userService.GetUserById(id);
            return Ok(_mapper.Map<UserDto>(user));
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDto user)
        {
            var id = await _userService.AddUser(_mapper.Map<User>(user));
            return Ok(id);
        }

        [HttpPut]
        public async Task<IActionResult> ChangeUser([FromBody] UserDto user)
        {
            await _userService.UpdateUser(_mapper.Map<User>(user));
            return Ok();
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            await _userService.DeleteUser(id);
            return Ok();
        }
    }
}
