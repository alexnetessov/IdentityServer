FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["IdentityServer/IdentityServer.csproj", "IdentityServer/"]
COPY ["IdentityServer.Data/IdentityServer.Data.csproj", "IdentityServer.Data/"]
COPY ["IdentityServer.Services/IdentityServer.Services.csproj", "IdentityServer.Services/"]
RUN dotnet restore "IdentityServer/IdentityServer.csproj"
COPY . .
WORKDIR "/src/IdentityServer"
RUN dotnet build "IdentityServer.csproj" -c Release -o /app/build

FROM build AS publish
#RUN dotnet dev-certs https
RUN dotnet publish "IdentityServer.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IdentityServer.dll"]