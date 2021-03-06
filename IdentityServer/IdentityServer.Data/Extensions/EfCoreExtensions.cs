using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

namespace IdentityServer.Data.Extensions
{
    public static class EfCoreExtensions
    {
        public static IHost MigrateDatabase<T>(this IHost host) where T : DbContext
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    var db = services.GetRequiredService<T>();
                    db.Database.Migrate();
                }
                catch (Exception e)
                {
                    var logger = services.GetRequiredService<ILogger<IHost>>();
                    logger.LogError(e, "An error occurred while migrating the database.");
                }
            }

            return host;
        }
    }
}
