using IdentityServer.Data;
using IdentityServer.Data.Model;
using IdentityServer.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [Route("api/v0/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IdentityContext _identityContext;

        public UserController(IdentityContext identityContext)
        {
            _identityContext = identityContext;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _identityContext.Users
                .Select(u => new UsersDto
                {
                    Id = u.Id,
                    UserName = u.UserName,
                    CreationDateUtc = u.CreationDateUtc

                });
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(string id)
        {
            var user = _identityContext.Users
                .Where(u => u.Id == id)
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    UserName = u.UserName,
                    LastName = u.LastName,
                    FirstName = u.FirstName, 
                    Email = u.Email,
                    CreationDateUtc = u.CreationDateUtc
                })
                .FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDto user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var newUser = new User
            {
                Id = Guid.NewGuid().ToString(),
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Password = user.Password,
                CreationDateUtc = DateTime.UtcNow
            };

            _identityContext.Users.Add(newUser);
            await _identityContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> ChangeUser([FromBody] UserDto user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var existingUser = _identityContext.Users.FirstOrDefault(u => u.Id == user.Id);

            if (existingUser == null)
            {
                return NotFound();
            }

            existingUser.Email = user.Email ?? existingUser.Email;
            existingUser.Password = user.Password ?? existingUser.Password;
            existingUser.FirstName = user.FirstName ?? existingUser.FirstName;
            existingUser.UserName = user.UserName ?? existingUser.UserName;

            _identityContext.Users.Update(existingUser);
            await _identityContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return BadRequest();
            }

            var user = _identityContext.Users.FirstOrDefault(u => u.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            _identityContext.Users.Remove(user);
            await _identityContext.SaveChangesAsync();
            return Ok();
        }
    }
}
