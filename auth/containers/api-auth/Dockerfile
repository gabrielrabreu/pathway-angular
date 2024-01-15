#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["containers/api-auth/src/Auth.Api.csproj", "containers/api-auth/src/"]
COPY ["dotnet-packages/src/Auth.Domain/Auth.Domain.csproj", "dotnet-packages/src/Auth.Domain/"]
COPY ["dotnet-packages/src/Auth.Application/Auth.Application.csproj", "dotnet-packages/src/Auth.Application/"]
COPY ["dotnet-packages/src/Auth.Infra.Data/Auth.Infra.Data.csproj", "dotnet-packages/src/Auth.Infra.Data/"]
COPY ["dotnet-packages/tests/Auth.Application.Tests/Auth.Application.Tests.csproj", "dotnet-packages/tests/Auth.Application.Tests/"]
RUN dotnet restore "containers/api-auth/src/Auth.Api.csproj"
RUN dotnet restore "dotnet-packages/tests/Auth.Application.Tests/Auth.Application.Tests.csproj"
COPY . .
RUN dotnet test "dotnet-packages/tests/Auth.Application.Tests/Auth.Application.Tests.csproj"
WORKDIR /src/containers/api-auth/src
RUN dotnet build "Auth.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Auth.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Auth.Api.dll"]