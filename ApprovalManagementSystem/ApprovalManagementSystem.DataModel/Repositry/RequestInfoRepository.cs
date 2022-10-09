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
             _approvalManagementSystemContext.SaveChanges();
            return true;
        }

        public ICollection<RequestsInfo> GetRequestsInfo()
        {
            return _approvalManagementSystemContext.RequestsInfos.ToList();
        }
    }
}
