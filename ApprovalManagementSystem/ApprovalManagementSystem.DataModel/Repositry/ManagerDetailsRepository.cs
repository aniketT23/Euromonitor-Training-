using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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
           

            return Save();
        }

        public async Task<ManagerDetail> GetManagerDetailsAsync(int managerCode)
        {
            //var data =  (from u in _approvalManagementSystemContext.UserDetails
            //            join m in _approvalManagementSystemContext.ManagerDetails
            //            on u.ManagerCode equals m.Id
            //            select new UserDetail
            //            {
            //                UserId = u.UserId,
            //                Firstname = u.Firstname,
            //                Lastname = u.Lastname,
            //                Contact = u.Contact,
            //                ManagerCode = m.Id
            //            }).ToListAsync();

            //return  data.Where(m => m.ManagerCode == managerId).FirstOrDefaultAsync();
            return await _approvalManagementSystemContext.ManagerDetails.Where(m => m.Id == managerCode).FirstOrDefaultAsync();
        }

        public async Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(int managerID)
        {
            return await _approvalManagementSystemContext.ManagerDetails.Where(m => m.ManagerId == managerID).FirstOrDefaultAsync();
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
