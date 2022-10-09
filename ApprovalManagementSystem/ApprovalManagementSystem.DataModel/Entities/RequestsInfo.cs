using System;
using System.Collections.Generic;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class RequestsInfo
    {
        public int Requestid { get; set; }
        public string? Discription { get; set; }
        public string? Purpose { get; set; }
        public int Userid { get; set; }
        public string Managerid { get; set; } = null!;
        public DateTime? PlanDate { get; set; }
        public int? EstimatedCost { get; set; }
        public int? Advanceamount { get; set; }

        public virtual ManagerDetail Manager { get; set; } = null!;
        public virtual UserDetail User { get; set; } = null!;
    }
}
