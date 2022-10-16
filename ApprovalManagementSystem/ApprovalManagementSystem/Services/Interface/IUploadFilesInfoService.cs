using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IUploadFilesInfoService
    {
        Task<ICollection<UploadFilesInfo>> GetUploadFiles();

        Task<UploadFilesInfo> GetUploadFile(int id);

        Task<UploadFilesInfo> UploadFileExists(int id);
        Task<bool> UpdateUploadFile(UploadFilesInfo uploadFile);
        Task<bool> DeleteUploadFile(UploadFilesInfo uploadFilesInfo);
        Task<bool> PostUploadFiles(UploadFilesInfo uploadFilesInfo);
    }
}
