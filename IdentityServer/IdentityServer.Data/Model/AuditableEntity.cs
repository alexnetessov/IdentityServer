using System;

namespace IdentityServer.Data.Model
{
    public class AuditableEntity
    {
        public DateTime CreationDate { get; set; }
        
        public DateTime ModificationDate { get; set; }
    }
}
