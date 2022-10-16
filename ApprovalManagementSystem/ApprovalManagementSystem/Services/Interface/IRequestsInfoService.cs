using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IRequestsInfoService
    {
        Task<ICollection<RequestsInfo>> GetRequestsInfo();
        Task<RequestsInfo> GEtRequestById(int requestId);
        Task<bool> RequestExists(int requestId);
        Task<bool> CreateRequest(RequestsInfo request);
       
        Task<bool> DeleteRequest(RequestsInfo request);
        Task<ICollection<CompleteRequestDetailsDto>> getRequestsByMangaerId(int managerId);
        Task<ICollection<CompleteRequestDetailsDto>> GetRequestsByUserId(int userId);
    }
}
