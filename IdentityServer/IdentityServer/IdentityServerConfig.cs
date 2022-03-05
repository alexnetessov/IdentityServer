using System;

namespace IdentityServer
{
    public class IdentityServerConfig
    {
        public IdentityServerConfig()
        {
            DbConnectionString = Environment.GetEnvironmentVariable("USERS_DB_CONNECTION_STRING");
        }

        public string DbConnectionString { get; }
    }
}
