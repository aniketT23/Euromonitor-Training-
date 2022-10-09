using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IRequestsInfoService
    {
        ICollection<RequestsInfo> GetRequestsInfo();
        bool CreateRequest(RequestsInfo request);
    }
}
