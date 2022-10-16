using ApprovalManagementSystem.Api.Services;
using ApprovalManagementSystem.Api.Services.Interface;
using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace ApprovalManagementSystem.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadFilesInfoController:Controller
    {
        private readonly IUploadFilesInfoService _uploadFilesInfoService;
        private readonly IMapper _mapper;

        public UploadFilesInfoController(IUploadFilesInfoService uploadFilesInfoService,IMapper mapper)
        {
            _uploadFilesInfoService = uploadFilesInfoService;
            _mapper = mapper;
        }

        [HttpGet]

        public async Task<ActionResult<ICollection<UploadFilesInfo>>> GetUploadFiles()
        {
           var files=await _uploadFilesInfoService.GetUploadFiles();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(files);
        }

        [HttpPost]

        public async Task<ActionResult> CreateUploadFiles(UploadFilesInfoDto createFile)
        {
            var fileMap= _mapper.Map<UploadFilesInfo>(createFile);
            var files =await  _uploadFilesInfoService.PostUploadFiles(fileMap);

            return Ok(files);
        }
    }
}
