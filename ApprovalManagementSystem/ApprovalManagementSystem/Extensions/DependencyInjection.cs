using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using ApprovalManagementSystem.DataModel.Repositry;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ApprovalManagementSystem.Api.Extensions
{
    public static class DependencyInjection
    {
        public static void ConfigureDomainServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IManagerDetailsRepository, ManagerDetailsRepository>();
            services.AddScoped<IManagerDetailsService, ManagerDetailsService>();
            services.AddScoped<IRequestsInfoService, RequestsInfoService>();
            services.AddScoped<IRequestsInfoRepository, RequestInfoRepository>();
            services.AddScoped<IUploadFilesInfoRepository, UploadFilesInfoRepository>();
            services.AddScoped<IUploadFilesInfoService, UploadFileInfoService>();
            services.AddScoped<IUserDetailsRepository, UserDetailsRepository>();
            services.AddScoped<IUserDetailsService, UserDetailsService>();

        }
    }
}
