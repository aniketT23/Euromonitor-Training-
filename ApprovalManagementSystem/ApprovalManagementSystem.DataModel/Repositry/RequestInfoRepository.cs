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

        public bool CreateRequest(RequestsInfo request)
        {
            _approvalManagementSystemContext.Add(request);
            
            return Save();
        }

        public bool DeleteRequest(RequestsInfo request)
        {
            throw new NotImplementedException();
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

        public bool Save()
        {
            var saved = _approvalManagementSystemContext.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
