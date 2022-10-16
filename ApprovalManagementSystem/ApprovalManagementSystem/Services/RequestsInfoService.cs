using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using ApprovalManagementSystem.ServiceModel.DTO.Request;

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

        public async Task<RequestsInfo> GEtRequestById(int requestId)
        {
            return await _requestsInfoRepository.GEtRequestById(requestId);
        }

        public async Task<ICollection<CompleteRequestDetailsDto>> getRequestsByMangaerId(int managerId)
        {
            return await _requestsInfoRepository.getRequestsByMangaerId(managerId);
        }

        public async Task<ICollection<CompleteRequestDetailsDto>> GetRequestsByUserId(int userId)
        {
            return await _requestsInfoRepository.GetRequestsByUserId(userId);
        }

        public async Task<ICollection<RequestsInfo>> GetRequestsInfo()
        {
            return await _requestsInfoRepository.GetRequestsInfo();
        }

        public async Task<bool> RequestExists(int requestId)
        {
            return await (_requestsInfoRepository.RequestExists(requestId));
        }

      
    }
}
