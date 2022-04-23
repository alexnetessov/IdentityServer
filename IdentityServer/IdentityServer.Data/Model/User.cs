using System;

namespace IdentityServer.Data.Model
{
    public class User : AuditableEntity
    {
        public Guid Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string Email { get; set; }
    }
}
