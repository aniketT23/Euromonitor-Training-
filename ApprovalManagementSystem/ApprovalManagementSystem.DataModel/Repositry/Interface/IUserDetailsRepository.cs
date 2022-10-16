using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using ApprovalManagementSystem.ServiceModel.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IUserDetailsRepository
    {
        Task<ICollection<UserDetail>> GetAllUserDetails();

        Task<UserDetail> GetUserById(int id);
        Task<UserDetail> GetUserByUsername(string username);

        Task<bool> UserExist(int userId);
        Task<bool> CreateUser(UserDetail userDetail);
        Task<bool> UpdateUser(UserDetail userDetail);

        Task<string> AuthenticateUser(loginDto userDetail);

        Task<bool> Save();

        Task<userCompleteDetailsDto> CompleteUsersDetail(int userId);
        
    }
}
