using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.ServiceModel.DTO
{
    public class UserDetailsDto
    {
        public int UserId { get; set; }
        public string? Password { get; set; }
        public string? Designation { get; set; }
        public string? Contact { get; set; }
        public string? Gender { get; set; }
        public string? Email { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public int ManagerCode { get; set; }
    }
}
