using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using ApprovalManagementSystem.ServiceModel.DTO.Response;

namespace ApprovalManagementSystem.Api.Services
{
    public class UserDetailsService : IUserDetailsService
    {
        private readonly IUserDetailsRepository _userDetailsRepository;

        public UserDetailsService(IUserDetailsRepository userDetailsRepository)
        {
            _userDetailsRepository = userDetailsRepository;
        }

        public async  Task<string> AuthenticateUser(loginDto userDetail)
        {
           return await _userDetailsRepository.AuthenticateUser(userDetail);
        }

        public async  Task<bool> CreateUser(UserDetail userDetail)
        {
            return await _userDetailsRepository.CreateUser(userDetail);
        }

        public async Task<ICollection<UserDetail>> GetAllUserDetails()
        {
            return await _userDetailsRepository.GetAllUserDetails();  
        }

        public async Task<UserDetail> GetUserById(int id)
        {
            return await _userDetailsRepository.GetUserById(id);
        }

        public async Task<UserDetail> GetUserByUsername(string username)
        {
            return await (_userDetailsRepository.GetUserByUsername(username));
        }

        public async Task<userCompleteDetailsDto> CompleteUsersDetail(int userId)
        {
            return await _userDetailsRepository.CompleteUsersDetail(userId);
        }

        public async Task<bool> UpdateUser(UserDetail userDetail)
        {
            return await  _userDetailsRepository.UpdateUser(userDetail);
        }

        public async Task<bool> UserExist(int userId)
        {
            return await _userDetailsRepository.UserExist(userId);
        }
    }
}
