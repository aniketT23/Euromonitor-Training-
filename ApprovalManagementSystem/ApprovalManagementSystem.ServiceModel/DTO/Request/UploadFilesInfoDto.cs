using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.ServiceModel.DTO.Request
{
    public class UploadFilesInfoDto
    {
        [Key]
        public int UploadId { get; set; }
        public int RequestId { get; set; }
        public string? Filetype { get; set; }
        public string? Filename { get; set; }
    }
}
