using ApprovalManagementSystem.Api.Extensions;
using ApprovalManagementSystem.Api.Mapper;
using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Configuration.ConfigureDomainServices(configuration);
//builder.Configuration.SetBasePath(Directory.GetCurrentDirectory());
builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(MappingProfiles));
//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IManagerDetailsRepository, ManagerDetailsRepository>();
builder.Services.AddScoped<IManagerDetailsService, ManagerDetailsService>();
builder.Services.AddScoped<IRequestsInfoService, RequestsInfoService>();
builder.Services.AddScoped<IRequestsInfoRepository, RequestInfoRepository>();
builder.Services.AddScoped<IUploadFilesInfoRepository, UploadFilesInfoRepository>();
builder.Services.AddScoped<IUploadFilesInfoService,UploadFileInfoService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Conexting SQL Server
builder.Services.AddDbContext<ApprovalManagementSystemContext>
   (options =>
   {
       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
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

app.UseAuthorization();

app.MapControllers();

app.Run();
