using System;
using System.Threading;
using System.Threading.Tasks;
using IdentityServer.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Data
{
    public sealed class IdentityContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Group> Groups { get; set; }

        public IdentityContext(DbContextOptions<IdentityContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.UserName).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Password).IsRequired();

            modelBuilder.Entity<User>().HasIndex(u => u.UserName).IsUnique();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new())
        {
            foreach (var entity in ChangeTracker.Entries<AuditableEntity>())
            {
                switch (entity.State)
                {
                    case EntityState.Added:
                        entity.Entity.CreationDate = DateTime.UtcNow;
                        break;
                    case EntityState.Modified:
                        entity.Entity.ModificationDate = DateTime.UtcNow;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
