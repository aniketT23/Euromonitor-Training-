using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IManagerDetailsRepository
    {
        ICollection<ManagerDetail> GetManagersDetailsAsync();
        Task<ManagerDetail> GetManagerDetailsAsync(int managerCode);
        Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(int managerId);
        Task<bool> ManagerExistsAsync(int managerId);

        bool CreateManagerDetail(ManagerDetail managerDetail);
        bool Save();
    }
}
