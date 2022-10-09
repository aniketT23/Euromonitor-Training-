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

        public bool DeleteRequest(RequestsInfo request)
        {
            throw new NotImplementedException();
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

        public bool Save()
        {
            return _requestsInfoRepository.Save();
        }
    }
}
