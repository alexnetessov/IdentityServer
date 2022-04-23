using System;

namespace IdentityServer.Data.Model
{
    public class Group :AuditableEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
    }
}
