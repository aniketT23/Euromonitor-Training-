using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using Microsoft.EntityFrameworkCore;
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

        public async Task<bool> DeleteUploadFile(UploadFilesInfo uploadFilesInfo)
        {
            throw new NotImplementedException();
        }

        public async  Task<UploadFilesInfo> GetUploadFile(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<UploadFilesInfo>> GetUploadFiles()
        {
            return await _approvalManagementSystemContext.UploadFilesInfos.ToListAsync();
        }

        public async Task<bool> PostUploadFiles(UploadFilesInfo uploadFilesInfo)
        {
            await _approvalManagementSystemContext.AddAsync(uploadFilesInfo);
            await _approvalManagementSystemContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateUploadFile(UploadFilesInfo uploadFile)
        {
            throw new NotImplementedException();
        }

        public async Task<UploadFilesInfo> UploadFileExists(int id)
        {
            throw new NotImplementedException();
        }
    }
}
