using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using ApprovalManagementSystem.ServiceModel.DTO.Response;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApprovalManagementSystem.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : Controller
    {
        private readonly IUserDetailsService _userDetailsService;
        private readonly IMapper _mapper;

        public UserDetailsController(IUserDetailsService userDetailsService, IMapper mapper)
        {
            _userDetailsService = userDetailsService;
            _mapper = mapper;
        }


        [HttpPost("login")]

        public async Task<ActionResult<UserDetail>> AuthenticateUser([FromForm] loginDto loginDetails)
        {
            if (loginDetails == null)
                return NotFound();

            var data = await _userDetailsService.AuthenticateUser(loginDetails);
            return Ok(data);


        }

        [HttpGet, Authorize(Roles = "Manager")]
        [ProducesResponseType(200)]
        public async Task<ActionResult<ICollection<UserDetail>>> GetAllUsers()
        {

            var users = await (_userDetailsService.GetAllUserDetails());
            var mapUser = _mapper.Map<List<UserDetailsDto>>(users);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(mapUser);
        }
        [HttpGet("{userId}"), Authorize(Roles ="User")]

        public async Task<ActionResult<UserDetail>> GetUserById(int userId)
        {
            if (!await _userDetailsService.UserExist(userId))
                return NotFound();
            var user =  await _userDetailsService.GetUserById(userId);
           var data = _mapper.Map<UserDetailsDto>(user);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(data);
        }

        [HttpGet("user/{email}")]

        public async Task<ActionResult<UserDetail>> GetUserByEmail(string email)
        {
            var users =await _userDetailsService.GetUserByUsername(email);
            var mapUser = _mapper.Map<UserDetailsDto>(users);

            return Ok(mapUser);
        }

        [HttpGet("/userDetails")]

        public async Task<userCompleteDetailsDto> GetSampleUsers(int userId)
        {

            var users = await _userDetailsService.CompleteUsersDetail(userId);

            return users;
        }



        [HttpPost]
        [ProducesResponseType(204)]
        public async Task<ActionResult> CreateUser([FromBody] UserDetailsDto createUser)
        {
            //return  _managerDetailsService.CreateManagerDetail(managerDetail);

            if (createUser == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userDetailMap = _mapper.Map<UserDetail>(createUser);
            //_managerDetailsService.CreateManagerDetail(managerDetailMap);

            if (!await _userDetailsService.CreateUser(userDetailMap))
            {

                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> UpdateUser(int userId, [FromBody] UserDetailsDto updatedUser)
        {
            if (updatedUser == null)
                return BadRequest(ModelState);
            if (userId != updatedUser.UserId)
                return BadRequest(ModelState);
            if (!await _userDetailsService.UserExist(userId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var userDetailMap = _mapper.Map<UserDetail>(updatedUser);
            if (!await _userDetailsService.UpdateUser(userDetailMap))
            {
                ModelState.AddModelError("", "Something went wrong updating user");
                return StatusCode(500, ModelState);
            }

            return NoContent();

        }


    }
}
