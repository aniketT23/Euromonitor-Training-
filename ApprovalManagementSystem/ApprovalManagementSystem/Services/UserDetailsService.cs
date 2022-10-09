using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;

namespace ApprovalManagementSystem.Api.Services
{
    public class UserDetailsService : IUserDetailsService
    {
        private readonly IUserDetailsRepository _userDetailsRepository;

        public UserDetailsService(IUserDetailsRepository userDetailsRepository)
        {
            _userDetailsRepository = userDetailsRepository;
        }
        public bool CreateUser(UserDetail userDetail)
        {
            return _userDetailsRepository.CreateUser(userDetail);
        }

        public ICollection<UserDetail> GetAllUserDetails()
        {
            return _userDetailsRepository.GetAllUserDetails();  
        }

        public UserDetail GetUserById(int id)
        {
            return _userDetailsRepository.GetUserById(id);
        }

        public UserDetail GetUserByUsername(string username)
        {
            return (_userDetailsRepository.GetUserByUsername(username));
        }

        public bool Save()
        {
            return _userDetailsRepository.Save();
        }

        public bool UpdateUser(UserDetail userDetail)
        {
            return _userDetailsRepository.UpdateUser(userDetail);
        }

        public bool UserExist(int userId)
        {
            return _userDetailsRepository.UserExist(userId);
        }
    }
}
