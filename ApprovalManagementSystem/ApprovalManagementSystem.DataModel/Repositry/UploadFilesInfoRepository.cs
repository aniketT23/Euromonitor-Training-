using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class UploadFilesInfoRepository : IUploadFilesInfoRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;

        public UploadFilesInfoRepository(ApprovalManagementSystemContext approvalManagementSystemContext)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
        }
        public ICollection<UploadFilesInfo> GetUploadFiles()
        {
            return _approvalManagementSystemContext.UploadFilesInfos.ToList();
        }

        public bool PostUploadFiles(UploadFilesInfo uploadFilesInfo)
        {
            _approvalManagementSystemContext.Add(uploadFilesInfo);
            _approvalManagementSystemContext.SaveChanges();
            return true;
        }
    }
}
