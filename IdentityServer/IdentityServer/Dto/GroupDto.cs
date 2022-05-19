using System;
using System.Text.Json.Serialization;

namespace IdentityServer.Dto
{
    public class GroupDto
    {
        [JsonPropertyName("Id")]
        public Guid Id { get; set; }

        [JsonPropertyName("Name")]
        public string Name { get; set; }

        [JsonPropertyName("CreationDate")]
        public DateTime CreationDate { get; set; }
    }
}
