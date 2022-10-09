using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.ServiceModel.DTO
{
    public class ManagerDetailsDto
    {
        //public int Id { get; set; }
        public string UserCode { get; set; } = null!;
        public string ManagerId { get; set; } = null!;
        public int ApproveLimit { get; set; }
    }
}
