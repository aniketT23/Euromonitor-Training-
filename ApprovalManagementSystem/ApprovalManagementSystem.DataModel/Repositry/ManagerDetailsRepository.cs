using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class ManagerDetailsRepository : IManagerDetailsRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;

        public ManagerDetailsRepository(ApprovalManagementSystemContext approvalManagementSystemContext)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
        }

        public bool CreateManagerDetail(ManagerDetail managerDetail)
        {
            _approvalManagementSystemContext.Add(managerDetail);
            _approvalManagementSystemContext.SaveChanges();

            return true;
        }

        public async Task<ManagerDetail> GetManagerDetailsAsync(int managerId)
        {
            return await _approvalManagementSystemContext.ManagerDetails.Where(m => m.Id == managerId).FirstOrDefaultAsync();
        }

        public async Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(string managerCode)
        {
            return await _approvalManagementSystemContext.ManagerDetails.FindAsync(managerCode);
        }

        public ICollection<ManagerDetail> GetManagersDetailsAsync()
        {
            return  _approvalManagementSystemContext.ManagerDetails.ToList();  
        }

        public async Task<bool> ManagerExistsAsync(int managerId)
        {
            return await _approvalManagementSystemContext.ManagerDetails.AnyAsync(m => m.Id == managerId);
        }

        public bool Save()
        {
            var saved= _approvalManagementSystemContext.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
