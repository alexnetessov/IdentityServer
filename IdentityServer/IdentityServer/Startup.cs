using System;
using System.Text.RegularExpressions;
using IdentityServer.Data;
using IdentityServer.Middleware;
using IdentityServer.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace IdentityServer
{
    public class Startup
    {
        private readonly IdentityServerConfig _config;
        private readonly Regex _corsOrigin = new("localhost", RegexOptions.Compiled | RegexOptions.IgnoreCase);

        public Startup()
        {
            _config = new IdentityServerConfig();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = nameof(IdentityServer), Version = "v1" });
            });

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IGroupService, GroupService>();
            DbContextInitializer.Initialize(services, _config.DbConnectionString);
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", nameof(IdentityServer));
                    c.RoutePrefix = string.Empty;
                });
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto | ForwardedHeaders.XForwardedHost
            });

            app.UseMiddleware<ErrorHandlerMiddleware>();

            app.UseRouting();

            app.UseCors(builder =>
                builder.SetIsOriginAllowed(x => _corsOrigin.IsMatch(x)).AllowAnyHeader().AllowAnyMethod());

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
