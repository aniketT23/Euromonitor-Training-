using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO;
using AutoMapper;
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

        [HttpGet]
        [ProducesResponseType(200)]
        public IActionResult GetAllUsers()
        {

            var users = _mapper.Map<List<UserDetailsDto>>(_userDetailsService.GetAllUserDetails());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(users);
        }
        [HttpGet("{userId}")]

        public IActionResult GetUserById(int userId)
        {
            if (!_userDetailsService.UserExist(userId))
                return NotFound();
            var user = _userDetailsService.GetUserById(userId);
            //var data = _mapper.Map<Task<ManagerDetailsDto>>(manager);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(user);
        }

        [HttpGet("user/{email}")]

        public IActionResult GetUserByEmail(string email)
        {
            var users = _userDetailsService.GetUserByUsername(email);

            return Ok(users);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        public ActionResult CreateUser([FromBody] UserDetailsDto createUser)
        {
            //return  _managerDetailsService.CreateManagerDetail(managerDetail);

            if (createUser == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userDetailMap = _mapper.Map<UserDetail>(createUser);
            //_managerDetailsService.CreateManagerDetail(managerDetailMap);

            if (!_userDetailsService.CreateUser(userDetailMap))
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
        public IActionResult UpdateUser(int userId, [FromBody] UserDetailsDto updatedUser)
        {
            if(updatedUser==null)
                return BadRequest(ModelState);
            if(userId !=updatedUser.UserId)
                return BadRequest(ModelState);
            if (!_userDetailsService.UserExist(userId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var userDetailMap = _mapper.Map<UserDetail>(updatedUser);
            if(!_userDetailsService.UpdateUser(userDetailMap))
            {
                ModelState.AddModelError("", "Something went wrong updating user");
                return StatusCode(500, ModelState);
            }

            return NoContent();

        }


    }
}
