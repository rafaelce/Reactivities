using Application.Activities;
using Application.Core;
using Application.Interfaces;
using Application.Photos;
using FluentValidation;
using FluentValidation.AspNetCore;
using Infrastructure.Photos;
using Infrastructure.Security;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
        IConfiguration config)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            //!ativa o uso do contexto da aplicação. (SQL Server)
            //     services.AddDbContext<DataContext>(
            //        opt => opt.UseSqlServer(
            //            Configuration.GetConnectionString("MSSQLContext")
            //        )
            //    );

            //!ativa o uso do contexto da aplicação. (MySql)

            services.AddDbContext<DataContext>(options =>
            {
                options.UseMySql(config.GetConnectionString("MySqlConnection"),
                   new MySqlServerVersion(new Version()));
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy(name: "CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod()
                    .AllowAnyHeader()
                    .WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddFluentValidationAutoValidation();
            services.AddValidatorsFromAssemblyContaining<Create>();

            services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));

            return services;
        }
    }
}