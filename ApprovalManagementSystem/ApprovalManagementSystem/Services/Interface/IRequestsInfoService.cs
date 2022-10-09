using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IRequestsInfoService
    {
        ICollection<RequestsInfo> GetRequestsInfo();
        RequestsInfo GEtRequestById(int requestId);
        bool RequestExists(int requestId);
        bool CreateRequest(RequestsInfo request);
        bool Save();
        bool DeleteRequest(RequestsInfo request);
    }
}
