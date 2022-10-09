using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IUploadFilesInfoService
    {
        ICollection<UploadFilesInfo> GetUploadFiles();

        bool PostUploadFiles(UploadFilesInfo uploadFilesInfo);
    }
}
