using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace ApprovalManagementSystem.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerDetailsController : Controller
    {
        private readonly IManagerDetailsService _managerDetailsService;
        private readonly IMapper _mapper;

        public ManagerDetailsController(IManagerDetailsService managerDetailsService, IMapper mapper)
        {
            _managerDetailsService = managerDetailsService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<ManagerDetail>))]
        public IActionResult GetManagersDetails()
        {
            var managers = _mapper.Map<List<ManagerDetailsDto>>(_managerDetailsService.GetManagersDetailsAsync());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(managers);
        }

        [HttpGet("manager/{managerCode}")]
        [ProducesResponseType(200, Type = typeof(Task<ManagerDetail>))]
        [ProducesResponseType(400)]

        public async Task<ActionResult<ManagerDetail>> GetManagerDetail(int managerCode)
        {
            if (!await _managerDetailsService.ManagerExistsAsync(managerCode))
                return NotFound();
            var manager = await (_managerDetailsService.GetManagerDetailsAsync(managerCode));
            //var data = _mapper.Map<Task<ManagerDetailsDto>>(manager);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(manager);
        }

        [HttpGet("{managerId}")]

        public async Task<ActionResult<ManagerDetail>> GetManagerById(int managerId)
        {
            if (!await _managerDetailsService.ManagerExistsAsync(managerId))
                return NotFound();
            var manager = await (_managerDetailsService.GetManagerDetailsAsync(managerId));
          
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(manager);
        }




        [HttpPost]
        [ProducesResponseType(204)]


        public ActionResult PostManagerDetail( [FromBody] ManagerDetailsDto managerDetail)
        {
            //return  _managerDetailsService.CreateManagerDetail(managerDetail);

            if (managerDetail == null)
                return BadRequest(ModelState);
           
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var managerDetailMap = _mapper.Map<ManagerDetail>(managerDetail);
            //_managerDetailsService.CreateManagerDetail(managerDetailMap);

            if (!_managerDetailsService.CreateManagerDetail(managerDetailMap))
            {

                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }
            
            return Ok("Successfully created");
        }

    }
}
