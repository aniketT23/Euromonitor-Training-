using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using ApprovalManagementSystem.ServiceModel.DTO.Response;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class UserDetailsRepository : IUserDetailsRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;
        private readonly IConfiguration _configuration;

        public UserDetailsRepository(ApprovalManagementSystemContext approvalManagementSystemContext, IConfiguration configuration)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
            _configuration = configuration;
        }

        public async Task<string> AuthenticateUser(loginDto loginDetail)
        {
            var userDetails = await _approvalManagementSystemContext.UserDetails
                .Where(u => u.Email == loginDetail.Email && u.Password == loginDetail.Password).FirstOrDefaultAsync();
            if (userDetails != null)
            {
                var user = new UserDetail
                {
                    Email = userDetails.Email,
                    Password = userDetails.Password,
                    Firstname = userDetails.Firstname,
                    Lastname = userDetails.Lastname,
                    UserId = userDetails.UserId,
                    ManagerCode = userDetails.ManagerCode,
                    Designation = userDetails.Designation,
                    Contact = userDetails.Contact,

                };
                string token = CreateToken(userDetails,user.UserId);

                return token;

            }
            else
            {
                return "InValid Credentials";
            }

        }

        private string CreateToken(UserDetail userDetail, int userId)
        {
             List<Claim> claims;
            if (UserIsManager(userId) == true)
            {
                claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, userDetail.Email),
                new Claim(ClaimTypes.Role, "Manager"),
                new Claim(ClaimTypes.Role, "User"),


            };
            }
            else
            {
                claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, userDetail.Email),
                new Claim(ClaimTypes.Role, "User"),


            };
            }


            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
               _configuration.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        public async Task<bool> CreateUser(UserDetail userDetail)
        {
            await _approvalManagementSystemContext.AddAsync(userDetail);
            return await Save();
        }

        public async Task<ICollection<UserDetail>> GetAllUserDetails()
        {



            return await _approvalManagementSystemContext.UserDetails.ToListAsync();
        }

        public async Task<UserDetail> GetUserById(int id)
        {
            return await _approvalManagementSystemContext.UserDetails.Where(u => u.UserId == id).FirstOrDefaultAsync();
        }

        public async Task<UserDetail> GetUserByUsername(string email)
        {
            return await _approvalManagementSystemContext.UserDetails.Where(u => u.Email == email).FirstOrDefaultAsync();
        }

        public async Task<userCompleteDetailsDto> CompleteUsersDetail(int userId)
        {
            var userData = (from u in _approvalManagementSystemContext.UserDetails
                            join m in _approvalManagementSystemContext.ManagerDetails on u.ManagerCode equals m.Id
                            join v in _approvalManagementSystemContext.UserDetails on m.ManagerId equals v.UserId

                            select new userCompleteDetailsDto
                            {
                                Firstname = u.Firstname,
                                Lastname = u.Lastname,
                                UserId = u.UserId,
                                Email = u.Email,
                                Designation = u.Designation,
                                Password = u.Password,
                                Contact = u.Contact,
                                Gender = u.Gender,
                                ManagerCode = u.ManagerCode,
                                managerName = v.Firstname,
                                ManagerId = m.ManagerId,


                            }

                   ).Where(u => u.UserId == userId).FirstOrDefaultAsync();


            return await userData;
        }

        public async Task<bool> Save()
        {
            var saved = await _approvalManagementSystemContext.SaveChangesAsync();
            return saved > 0 ? true : false;
        }

        public async Task<bool> UpdateUser(UserDetail userDetail)
        {
            _approvalManagementSystemContext.Update(userDetail);
            return await Save();
        }

        public async Task<bool> UserExist(int userId)
        {
            return await _approvalManagementSystemContext.UserDetails.AnyAsync(u => u.UserId == userId);
        }

        private bool UserIsManager(int userId)
        {
            var mangaer = _approvalManagementSystemContext.ManagerDetails.Where(m => m.ManagerId == userId).FirstOrDefault();
            var managerCode = mangaer.Id;
            var userIsManager = _approvalManagementSystemContext.UserDetails.Where(u => u.ManagerCode == managerCode).FirstOrDefault();
            if (userIsManager == null)
                return false;
            else
                return true;
        }
    }
}
