using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        [ProducesResponseType(200)]
        public async Task<ActionResult<ICollection<ManagerDetail>>> GetManagersDetails()
        {
            var managers = await (_managerDetailsService.GetManagersDetailsAsync());
            var data = _mapper.Map<List<ManagerDetailsDto>>(managers);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(data);
        }

        [HttpGet("manager/{managerId}")]
        [ProducesResponseType(200, Type = typeof(Task<ManagerDetail>))]
        [ProducesResponseType(400)]

        public async Task<ActionResult<ManagerDetail>> GetManagerDetail(int managerId)
        {
           
            var manager = await (_managerDetailsService.GetManagerDetailsByuserCodeAsync(managerId));
            var data = _mapper.Map<ManagerDetailsDto>(manager);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(data);
        }

        [HttpGet("{managerCode}")]

        public async Task<ActionResult<ManagerDetail>> GetManagerById(int managerCode)
        {
            if (!await _managerDetailsService.ManagerExistsAsync(managerCode))
                return NotFound();
            var manager = await (_managerDetailsService.GetManagerDetailsAsync(managerCode));
            var data = _mapper.Map<ManagerDetailsDto>(manager);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(data);
        }




        [HttpPost]
        [ProducesResponseType(204)]


        public async Task<ActionResult> PostManagerDetail( [FromBody] ManagerDetailsDto managerDetail)
        {
       

            if (managerDetail == null)
                return BadRequest(ModelState);
           
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var managerDetailMap = _mapper.Map<ManagerDetail>(managerDetail);
          
            if (!await _managerDetailsService.CreateManagerDetail(managerDetailMap))
            {

                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }
            
            return Ok("Successfully created");
        }

        [HttpPatch]

        public async Task<ActionResult> UpdateMangerDetails(int mangerCode, [FromBody] ManagerDetailsDto updatedManagerDetails)
        {
            if(mangerCode ==null)
                return BadRequest(ModelState);
            if (updatedManagerDetails == null) 
                return StatusCode(500, ModelState);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var managerDetail = _mapper.Map<ManagerDetail>(updatedManagerDetails);
            if (!await _managerDetailsService.UpdateManagerDetails(mangerCode, managerDetail))
            {

                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully Updated");

        }

    }
}
