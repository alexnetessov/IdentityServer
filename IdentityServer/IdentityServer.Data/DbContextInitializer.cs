using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace IdentityServer.Data
{
    public static class DbContextInitializer
    {
        public static void Initialize(IServiceCollection services, string connectionString)
        {
            services.AddDbContext<IdentityContext>(option =>
                option.UseNpgsql(connectionString, o => o.MigrationsAssembly("IdentityServer.Data")));
        }
    }
}
