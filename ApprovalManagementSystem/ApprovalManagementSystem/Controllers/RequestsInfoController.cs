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
    public class RequestsInfoController:Controller
    {
        private readonly IRequestsInfoService _requestsInfoService;
        private readonly IMapper _mapper;

        public RequestsInfoController(IRequestsInfoService requestsInfoService,IMapper mapper)
        {
            _requestsInfoService = requestsInfoService;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        public async Task<ActionResult<ICollection<RequestsInfo>>> GetRequests()
        {
            var requests=await (_requestsInfoService.GetRequestsInfo());
            var requestDto = _mapper.Map<List<RequestsInfoDto>>(requests);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(requestDto);
        }
        [HttpGet("{requestId}")]
        public async Task<ActionResult<RequestsInfo>> GetRequestById(int requestId)
        {
            if (!await _requestsInfoService.RequestExists(requestId))
                return NotFound();
            var request= await (_requestsInfoService.GEtRequestById(requestId));
            var reequestDto= _mapper.Map<RequestsInfoDto>(request);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(reequestDto);
        }

        [HttpGet("requestByMangerId")]

        public async Task<ICollection<CompleteRequestDetailsDto>> GetRequestByManagerId(int managerId)
        {
        
            var data= await _requestsInfoService.getRequestsByMangaerId(managerId);
            return data;
        }

        [HttpGet("requestByUserId")]

        public async Task<ICollection<CompleteRequestDetailsDto>> GetRequestByUserId(int userId)
        {

            var data = await _requestsInfoService.GetRequestsByUserId(userId);
            return data;
        }


        [HttpPost]

        public async  Task<ActionResult> CreateRequest(RequestsInfoDto requestsInfo)
        {
            if (requestsInfo == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var request = _mapper.Map<RequestsInfo>(requestsInfo);
            if (!await _requestsInfoService.CreateRequest(request))
            {

                ModelState.AddModelError("", "Something went wrong while saving Request");
                return StatusCode(500, ModelState);
            }

            return Ok(request);
        }

        [HttpDelete("{requestId}")]

        public async Task<ActionResult> DeleteRequest(int requestId)
        {
            if(requestId==null)
                return BadRequest(ModelState);
            if(! await _requestsInfoService.RequestExists(requestId))
                return NotFound(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var requestTobeDeleted = await  _requestsInfoService.GEtRequestById(requestId);
            if(!await _requestsInfoService.DeleteRequest(requestTobeDeleted))
            {
                ModelState.AddModelError("", "Something went wrong while Deleting Request");
            }
            return NoContent();

        }
    }
}
