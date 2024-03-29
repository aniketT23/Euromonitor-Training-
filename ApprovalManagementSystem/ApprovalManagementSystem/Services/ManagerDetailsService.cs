﻿using ApprovalManagementSystem.Api.Services.Interface;
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

        public async Task<bool> CreateManagerDetail(ManagerDetail managerDetail)
        {
           return await _managerDetailsRepository.CreateManagerDetail(managerDetail);
        }

        public async Task<ManagerDetail> GetManagerDetailsAsync(int managerCode)
        {
            return await _managerDetailsRepository.GetManagerDetailsAsync(managerCode);
        }

        public async Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(int managerId)
        {
           return await _managerDetailsRepository.GetManagerDetailsByuserCodeAsync(managerId);
        }

        public async Task<ICollection<ManagerDetail>> GetManagersDetailsAsync()
        {
            return await  _managerDetailsRepository.GetManagersDetailsAsync();
        }

        public async Task<bool> ManagerExistsAsync(int managerCode)
        {
            return await _managerDetailsRepository.ManagerExistsAsync(managerCode);
        }

        public async  Task<bool> UpdateManagerDetails(int managerCode,ManagerDetail managerDetail)
        {
           return await _managerDetailsRepository.UpdateManagerDetails(managerCode,managerDetail);  
        }
    }
}
