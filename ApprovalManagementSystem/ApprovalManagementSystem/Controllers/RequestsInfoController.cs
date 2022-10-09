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
        public IActionResult GetRequests()
        {
            var requests=_mapper.Map<List<RequestsInfoDto>>(_requestsInfoService.GetRequestsInfo());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(requests);
        }
        [HttpGet("{requestId}")]
        public IActionResult GetRequestById(int requestId)
        {
            if (!_requestsInfoService.RequestExists(requestId))
                return NotFound();
            var request=_mapper.Map<RequestsInfoDto>(_requestsInfoService.GEtRequestById(requestId));
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(request);
        }

        [HttpPost]

        public IActionResult CreateRequest(RequestsInfoDto requestsInfo)
        {
            if (requestsInfo == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var request = _mapper.Map<RequestsInfo>(requestsInfo);
            if (!_requestsInfoService.CreateRequest(request))
            {

                ModelState.AddModelError("", "Something went wrong while saving Request");
                return StatusCode(500, ModelState);
            }

            return Ok(request);
        }
    }
}
