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
        ICollection<UploadFilesInfo> GetUploadFiles();

        UploadFilesInfo GetUploadFile(int id);

        Task<UploadFilesInfo> UploadFileExists(int id);
        bool UpdateUploadFile(UploadFilesInfo uploadFile);
        bool DeleteUploadFile(UploadFilesInfo uploadFilesInfo);
        bool PostUploadFiles(UploadFilesInfo uploadFilesInfo);
    }
}
