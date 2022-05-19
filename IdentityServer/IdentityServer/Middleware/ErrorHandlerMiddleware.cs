using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using IdentityServer.Services.Exceptions;

namespace IdentityServer.Middleware
{
    public sealed class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                context.Response.StatusCode = e switch
                {
                    NotFoundException _ => (int)HttpStatusCode.NotFound,
                    ArgumentException _ => (int)HttpStatusCode.BadRequest,
                    _ => (int)HttpStatusCode.InternalServerError
                };
                var result = JsonSerializer.Serialize(new { message = e.Message });
                await context.Response.WriteAsync(result);
            }
        }
    }
}
