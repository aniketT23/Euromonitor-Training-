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

        public async  Task<bool> CreateRequest(RequestsInfo request)
        {
            return await _requestsInfoRepository.CreateRequest(request);
        }

        public async Task<bool> DeleteRequest(RequestsInfo request)
        {
            return await _requestsInfoRepository.DeleteRequest(request);
        }

        public RequestsInfo GEtRequestById(int requestId)
        {
            return _requestsInfoRepository.GEtRequestById(requestId);
        }

        public ICollection<RequestsInfo> GetRequestsInfo()
        {
            return _requestsInfoRepository.GetRequestsInfo();
        }

        public bool RequestExists(int requestId)
        {
            return (_requestsInfoRepository.RequestExists(requestId));
        }

      
    }
}
