using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using ApprovalManagementSystem.ServiceModel.DTO.Response;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IUserDetailsService
    {
        Task<ICollection<UserDetail>> GetAllUserDetails();

        Task<UserDetail> GetUserById(int id);
        Task<UserDetail> GetUserByUsername(string username);

        Task<bool> UserExist(int userId);
        Task<bool> CreateUser(UserDetail userDetail);
        Task<bool> UpdateUser(UserDetail userDetail);

        Task<string> AuthenticateUser(loginDto userDetail);
        Task<userCompleteDetailsDto> CompleteUsersDetail(int userId);

    }
}
