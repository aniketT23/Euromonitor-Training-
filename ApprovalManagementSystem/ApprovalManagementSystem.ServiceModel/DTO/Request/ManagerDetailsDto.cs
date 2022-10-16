using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.ServiceModel.DTO.Request
{
    public class ManagerDetailsDto
    {
        //public int Id { get; set; }
        //public int Id { get; set; }
        public int ManagerId { get; set; }
        public int ApproveLimit { get; set; }
    }
}
