using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IManagerDetailsRepository
    {
        ICollection<ManagerDetail> GetManagersDetailsAsync();
        Task<ManagerDetail> GetManagerDetailsAsync(int managerId);
        Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(string managerCode);
        Task<bool> ManagerExistsAsync(int managerId);

        bool CreateManagerDetail(ManagerDetail managerDetail);
        bool Save();
    }
}
