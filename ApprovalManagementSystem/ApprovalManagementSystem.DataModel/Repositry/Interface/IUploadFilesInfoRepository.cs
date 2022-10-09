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

        bool PostUploadFiles(UploadFilesInfo uploadFilesInfo);
    }
}
