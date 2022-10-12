using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class RequestInfoRepository : IRequestsInfoRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;

        public RequestInfoRepository(ApprovalManagementSystemContext approvalManagementSystemContext)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
        }

        public async Task<bool> CreateRequest(RequestsInfo request)
        {
            _approvalManagementSystemContext.Add(request);
            
            return await Save();
        }

        public async Task<bool> DeleteRequest(RequestsInfo request)
        {
            _approvalManagementSystemContext.Remove(request);
            return await Save();
        }

        public RequestsInfo GEtRequestById(int requestId)
        {
            return _approvalManagementSystemContext.RequestsInfos.Where(r => r.Requestid == requestId).FirstOrDefault();
        }

        public ICollection<RequestsInfo> GetRequestsInfo()
        {
            return _approvalManagementSystemContext.RequestsInfos.ToList();
        }

        public bool RequestExists(int requestId)
        {
            return _approvalManagementSystemContext.RequestsInfos.Any(r => r.Requestid == requestId);
        }

        public async Task<bool> Save()
        {
            var saved =await  _approvalManagementSystemContext.SaveChangesAsync();
            return  saved > 0 ? true : false;
        }
    }
}
