using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ApprovalManagementSystem.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsInfoController:Controller
    {
        private readonly IRequestsInfoService _requestsInfoService;

        public RequestsInfoController(IRequestsInfoService requestsInfoService)
        {
            _requestsInfoService = requestsInfoService;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<RequestsInfo>))]
        public IActionResult GetRequests()
        {
            var requests=_requestsInfoService.GetRequestsInfo();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(requests);
        }

        [HttpPost]

        public IActionResult CreateRequest(RequestsInfo requestsInfo)
        {
            var request = _requestsInfoService.CreateRequest(requestsInfo);

            return Ok(request);
        }
    }
}
