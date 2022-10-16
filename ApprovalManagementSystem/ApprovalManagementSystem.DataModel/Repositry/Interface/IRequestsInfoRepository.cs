using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IRequestsInfoRepository
    {
        Task<ICollection<RequestsInfo>> GetRequestsInfo();
        Task<RequestsInfo> GEtRequestById(int requestId);
        Task<bool> RequestExists(int requestId);
        Task<bool> CreateRequest(RequestsInfo request);
        Task<bool> Save();
        Task<bool> DeleteRequest(RequestsInfo request);

        Task<ICollection<CompleteRequestDetailsDto>> getRequestsByMangaerId(int managerId);
        Task<ICollection<CompleteRequestDetailsDto>> GetRequestsByUserId(int userId);
    }
}
