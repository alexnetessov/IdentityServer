using IdentityServer.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Data
{
    public sealed class IdentityContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public IdentityContext(DbContextOptions<IdentityContext> options)
        : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.UserName).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Password).IsRequired();

            modelBuilder.Entity<User>().HasIndex(u => u.UserName).IsUnique();
        }
    }
}
