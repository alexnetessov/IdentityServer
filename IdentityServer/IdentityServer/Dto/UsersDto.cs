using System;
using System.Text.Json.Serialization;

namespace IdentityServer.Dto
{
    public class UsersDto
    {
        [JsonPropertyName("Id")]
        public Guid Id { get; set; }

        [JsonPropertyName("UserName")]
        public string UserName { get; set; }

        [JsonPropertyName("CreationDateUtc")]
        public DateTime CreationDateUtc { get; set; }
    }
}
