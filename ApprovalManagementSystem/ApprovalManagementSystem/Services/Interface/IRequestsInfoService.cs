using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IRequestsInfoService
    {
        ICollection<RequestsInfo> GetRequestsInfo();
        RequestsInfo GEtRequestById(int requestId);
        bool RequestExists(int requestId);
        Task<bool> CreateRequest(RequestsInfo request);
       
        Task<bool> DeleteRequest(RequestsInfo request);
    }
}
