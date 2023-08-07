using Application.Interfaces;
using Infrastructure.Photos;
using Infrastructure.Security;

namespace API.Extensions
{
    public class DependencyContainer
    {
        public static void RegisterServices(IServiceCollection services)
        {
            //Serviços
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddScoped<IPhotoAccessor, PhotoAccessor>();
        }
    }
}