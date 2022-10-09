using System;
using System.Collections.Generic;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class ManagerDetail
    {
        public ManagerDetail()
        {
            RequestsInfos = new HashSet<RequestsInfo>();
        }

        public int Id { get; set; }
        public string UserCode { get; set; } = null!;
        public string ManagerId { get; set; } = null!;
        public int ApproveLimit { get; set; }

        public virtual ICollection<RequestsInfo> RequestsInfos { get; set; }
    }
}
