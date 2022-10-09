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

        bool CreateRequest(RequestsInfo request);
    }
}
