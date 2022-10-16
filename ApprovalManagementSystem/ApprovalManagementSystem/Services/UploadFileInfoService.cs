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

        public async  Task<bool> DeleteUploadFile(UploadFilesInfo uploadFilesInfo)
        {
            throw new NotImplementedException();
        }

        public async  Task<UploadFilesInfo> GetUploadFile(int id)
        {
            throw new NotImplementedException();
        }

        public async  Task<ICollection<UploadFilesInfo>> GetUploadFiles()
        {
            return await  _uploadFilesInfoRepository.GetUploadFiles();
        }

        public async Task<bool> PostUploadFiles(UploadFilesInfo uploadFilesInfo)
        {
            return await _uploadFilesInfoRepository.PostUploadFiles(uploadFilesInfo);
        }

        public async Task<bool> UpdateUploadFile(UploadFilesInfo uploadFile)
        {
            throw new NotImplementedException();
        }

        public async  Task<UploadFilesInfo> UploadFileExists(int id)
        {
            throw new NotImplementedException();
        }

       

       
    }
}
