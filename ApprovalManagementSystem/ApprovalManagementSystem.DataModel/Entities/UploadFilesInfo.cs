using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class UploadFilesInfo
    {
        [Key]
        public int UploadId { get; set; }
        public int RequestId { get; set; }
        public string? Filetype { get; set; }
        public string? Filename { get; set; }

        public virtual RequestsInfo Request { get; set; } = null!;
    }
}
