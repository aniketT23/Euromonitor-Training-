using ApprovalManagementSystem.Api.Mapper;
using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.ConfigureDomainServices(configuartion: IConfiguration);
//builder.Configuration.SetBasePath(Directory.GetCurrentDirectory());
builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(MappingProfiles));
//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IManagerDetailsRepository, ManagerDetailsRepository>();
builder.Services.AddScoped<IManagerDetailsService, ManagerDetailsService>();
builder.Services.AddScoped<IRequestsInfoService, RequestsInfoService>();
builder.Services.AddScoped<IRequestsInfoRepository, RequestInfoRepository>();
builder.Services.AddScoped<IUploadFilesInfoRepository, UploadFilesInfoRepository>();
builder.Services.AddScoped<IUploadFilesInfoService, UploadFileInfoService>();
builder.Services.AddScoped<IUserDetailsRepository, UserDetailsRepository>();
builder.Services.AddScoped<IUserDetailsService, UserDetailsService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
//Conexting SQL Server
builder.Services.AddDbContext<ApprovalManagementSystemContext>
   (options =>
   {
       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
   });

//Authorization
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });








var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:7037")
);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
