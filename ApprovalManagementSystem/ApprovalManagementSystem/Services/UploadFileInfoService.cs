using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;

namespace ApprovalManagementSystem.Api.Services
{
    public class UploadFileInfoService : IUploadFilesInfoService
    {
        private readonly IUploadFilesInfoRepository _uploadFilesInfoRepository;

        public UploadFileInfoService(IUploadFilesInfoRepository uploadFilesInfoRepository)
        {
            _uploadFilesInfoRepository = uploadFilesInfoRepository;
        }
        public ICollection<UploadFilesInfo> GetUploadFiles()
        {
            return _uploadFilesInfoRepository.GetUploadFiles();
        }

        public bool PostUploadFiles(UploadFilesInfo uploadFilesInfo)
        {
            return _uploadFilesInfoRepository.PostUploadFiles(uploadFilesInfo);
        }
    }
}
