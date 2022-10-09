using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IUserDetailsService
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
