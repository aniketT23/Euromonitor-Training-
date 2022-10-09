using System;
using System.Collections.Generic;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class UserDetail
    {
        public UserDetail()
        {
            RequestsInfos = new HashSet<RequestsInfo>();
        }

        public int UserId { get; set; }
        public string? Password { get; set; }
        public string? Designation { get; set; }
        public string? Contact { get; set; }
        public string? Gender { get; set; }
        public string? Email { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public int ManagerCode { get; set; }

        public virtual ManagerDetail ManagerCodeNavigation { get; set; } = null!;
        public virtual ICollection<RequestsInfo> RequestsInfos { get; set; }
    }
}
