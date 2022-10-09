using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;

namespace ApprovalManagementSystem.Api.Services
{
    public class RequestsInfoService : IRequestsInfoService
    {
        private readonly IRequestsInfoRepository _requestsInfoRepository;

        public RequestsInfoService(IRequestsInfoRepository requestsInfoRepository)
        {
            _requestsInfoRepository = requestsInfoRepository;
        }

        public bool CreateRequest(RequestsInfo request)
        {
            return _requestsInfoRepository.CreateRequest(request);
        }

        public ICollection<RequestsInfo> GetRequestsInfo()
        {
            return _requestsInfoRepository.GetRequestsInfo();
        }
    }
}
