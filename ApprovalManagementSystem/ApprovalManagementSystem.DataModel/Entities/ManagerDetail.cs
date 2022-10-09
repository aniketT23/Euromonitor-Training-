using System;
using System.Collections.Generic;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class ManagerDetail
    {
        public ManagerDetail()
        {
            RequestsInfos = new HashSet<RequestsInfo>();
            UserDetails = new HashSet<UserDetail>();
        }

        public int Id { get; set; }
        public int ManagerId { get; set; }
        public int ApproveLimit { get; set; }

        public virtual ICollection<RequestsInfo> RequestsInfos { get; set; }
        public virtual ICollection<UserDetail> UserDetails { get; set; }
    }
}
