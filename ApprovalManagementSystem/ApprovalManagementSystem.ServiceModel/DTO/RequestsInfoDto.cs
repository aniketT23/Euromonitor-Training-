using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.ServiceModel.DTO
{
    public class RequestsInfoDto
    {
        public string? Discription { get; set; }
        public string? Purpose { get; set; }
        public int Userid { get; set; }
        public int ManagerId { get; set; }
        public DateTime? PlanDate { get; set; }
        public int? EstimatedCost { get; set; }
        public int? Advanceamount { get; set; }
    }
}
