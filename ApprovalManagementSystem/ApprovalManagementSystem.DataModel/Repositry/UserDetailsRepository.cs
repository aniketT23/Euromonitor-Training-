using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class UserDetailsRepository : IUserDetailsRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;

        public UserDetailsRepository(ApprovalManagementSystemContext approvalManagementSystemContext)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
        }
        public bool CreateUser(UserDetail userDetail)
        {
            _approvalManagementSystemContext.Add(userDetail);
            return Save();
        }

        public ICollection<UserDetail> GetAllUserDetails()
        {
            return _approvalManagementSystemContext.UserDetails.ToList();
        }

        public UserDetail GetUserById(int id)
        {
            return _approvalManagementSystemContext.UserDetails.Where(u => u.UserId == id).FirstOrDefault();
        }

        public UserDetail GetUserByUsername(string email)
        {
            return _approvalManagementSystemContext.UserDetails.Where(u => u.Email == email).FirstOrDefault();
        }

        public bool Save()
        {
            var saved = _approvalManagementSystemContext.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateUser(UserDetail userDetail)
        {
            _approvalManagementSystemContext.Update(userDetail);
            return Save();
        }

        public bool UserExist(int userId)
        {
            return _approvalManagementSystemContext.UserDetails.Any(u=>u.UserId == userId);
        }
    }
}
