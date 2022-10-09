using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO;
using AutoMapper;
namespace ApprovalManagementSystem.Api.Mapper
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {
            CreateMap<ManagerDetail, ManagerDetailsDto>();
            CreateMap<ManagerDetailsDto,ManagerDetail> ();
            CreateMap<UploadFilesInfo, UploadFilesInfoDto>();
            CreateMap< UploadFilesInfoDto, UploadFilesInfo>();
          

        }
    }
}
