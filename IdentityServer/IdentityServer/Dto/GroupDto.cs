using System;
using System.Text.Json.Serialization;

namespace IdentityServer.Dto
{
    public class GroupDto
    {
        [JsonPropertyName(nameof(Id))]
        public Guid Id { get; set; }

        [JsonPropertyName(nameof(Name))]
        public string Name { get; set; }

        [JsonPropertyName(nameof(CreationDate))]
        public DateTime CreationDate { get; set; }
    }
}
