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

        public async Task<bool> CreateManagerDetail(ManagerDetail managerDetail)
        {
            await _approvalManagementSystemContext.AddAsync(managerDetail);   
           

            return await  Save();
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

        public async Task<ICollection<ManagerDetail>> GetManagersDetailsAsync()
        {
            return  _approvalManagementSystemContext.ManagerDetails.ToList();  
        }

        public async Task<bool> ManagerExistsAsync(int managerCode)
        {
            return await _approvalManagementSystemContext.ManagerDetails.AnyAsync(m => m.Id == managerCode);
        }

        public async Task<bool> Save()
        {
            var saved= await _approvalManagementSystemContext.SaveChangesAsync();
            return saved > 0 ? true : false;
        }

        public async Task<bool> UpdateManagerDetails(int managerCode,ManagerDetail managerDetail)
        {
            //_approvalManagementSystemContext.Update(managerDetail);

            var data = await GetManagerDetailsAsync(managerCode);
            if (data != null)
            {
                data.Id = managerCode;
                data.ManagerId = managerDetail.Id;
                data.ApproveLimit=managerDetail.ApproveLimit;
            }
            _approvalManagementSystemContext.Entry(data).State = EntityState.Modified;  

            return await Save();
        }
    }
}
