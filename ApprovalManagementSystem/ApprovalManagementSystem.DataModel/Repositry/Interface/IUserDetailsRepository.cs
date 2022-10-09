using ApprovalManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
   public interface IUserDetailsRepository
    {
        ICollection<UserDetail> GetAllUserDetails();

        UserDetail GetUserById(int id);
        UserDetail GetUserByUsername(string username);

        bool UserExist(int userId);
        bool CreateUser(UserDetail userDetail);
        bool UpdateUser(UserDetail userDetail);
        bool Save();
    }
}
