namespace ApprovalManagementSystem.ServiceModel.DTO.Request
{
    public class CompleteRequestDetailsDto
    {
        public int ReqId { get; set; }
        public string? Discription { get; set; }
        public string? Purpose { get; set; }
        public int Userid { get; set; }
        public int ManagerId { get; set; }
        public DateTime? PlanDate { get; set; }
        public int? EstimatedCost { get; set; }
        public int? Advanceamount { get; set; }
        public string? ReqStatus { get; set; }

        public string? userName { get; set; }
        public string? managerName { get; set; }
    }
}
