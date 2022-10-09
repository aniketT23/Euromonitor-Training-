using ApprovalManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IRequestsInfoRepository
    {
        ICollection<RequestsInfo> GetRequestsInfo();
        RequestsInfo GEtRequestById(int requestId);
        bool RequestExists(int requestId);
        bool CreateRequest(RequestsInfo request);
        bool Save();
        bool DeleteRequest(RequestsInfo request);
    }
}
