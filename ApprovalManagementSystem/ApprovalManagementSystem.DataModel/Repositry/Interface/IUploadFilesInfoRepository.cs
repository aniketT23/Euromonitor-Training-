using ApprovalManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IUploadFilesInfoRepository
    {
        Task<ICollection<UploadFilesInfo>> GetUploadFiles();

        Task<UploadFilesInfo> GetUploadFile(int id);

        Task<UploadFilesInfo> UploadFileExists(int id);
        Task<bool> UpdateUploadFile(UploadFilesInfo uploadFile);
        Task<bool> DeleteUploadFile(UploadFilesInfo uploadFilesInfo);
        Task<bool> PostUploadFiles(UploadFilesInfo uploadFilesInfo);
    }
}
