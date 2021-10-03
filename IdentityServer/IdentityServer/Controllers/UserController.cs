using IdentityServer.Data;
using IdentityServer.Data.Model;
using IdentityServer.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IdentityContext _identityContext;

        public UserController(IdentityContext identityContext)
        {
            _identityContext = identityContext;
        }

        [HttpGet("{username}")]
        public IActionResult GetUser(string userName)
        {
            var user = _identityContext.Users.FirstOrDefault(u => u.Id == userName);

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
                UserName = user.Login,
                Password = user.Password
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

            var existingUser = _identityContext.Users.FirstOrDefault(u => u.UserName == user.Login);

            if (existingUser == null)
            {
                return NotFound();
            }

            existingUser.Email = user.Email ?? existingUser.Email;
            existingUser.Password = user.Password ?? existingUser.Password;
            existingUser.FirstName = user.FirstName ?? existingUser.FirstName;
            existingUser.UserName = user.Login ?? existingUser.UserName;

            _identityContext.Users.Update(existingUser);
            await _identityContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{username}")]
        public async Task<IActionResult> DeleteUser(string userName)
        {
            if (string.IsNullOrWhiteSpace(userName))
            {
                return BadRequest();
            }

            var user = _identityContext.Users.FirstOrDefault(u => u.UserName == userName);

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
