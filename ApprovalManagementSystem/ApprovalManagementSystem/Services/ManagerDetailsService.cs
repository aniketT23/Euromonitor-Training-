using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;

namespace ApprovalManagementSystem.Api.Services
{
    public class ManagerDetailsService : IManagerDetailsService
    {
        private readonly IManagerDetailsRepository _managerDetailsRepository;


        public ManagerDetailsService(IManagerDetailsRepository managerDetailsRepository)
        {
            _managerDetailsRepository = managerDetailsRepository;
        }

        public bool CreateManagerDetail(ManagerDetail managerDetail)
        {
           return  _managerDetailsRepository.CreateManagerDetail(managerDetail);
        }

        public async Task<ManagerDetail> GetManagerDetailsAsync(int managerId)
        {
            return await _managerDetailsRepository.GetManagerDetailsAsync(managerId);
        }

        public async Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(string managerCode)
        {
           return await _managerDetailsRepository.GetManagerDetailsByuserCodeAsync(managerCode);
        }

        public ICollection<ManagerDetail> GetManagersDetailsAsync()
        {
            return _managerDetailsRepository.GetManagersDetailsAsync();
        }

        public async Task<bool> ManagerExistsAsync(int managerId)
        {
            return await _managerDetailsRepository.ManagerExistsAsync(managerId);
        }

        public bool Save()
        {
            return  _managerDetailsRepository.Save();
        }
    }
}
