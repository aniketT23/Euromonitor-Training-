using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.DataModel.Repositry.Interface
{
    public interface IManagerDetailsRepository
    {
        Task<ICollection<ManagerDetail>> GetManagersDetailsAsync();
        Task<ManagerDetail> GetManagerDetailsAsync(int managerCode);
        Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(int managerId);
        Task<bool> ManagerExistsAsync(int managerId);

        Task<bool> CreateManagerDetail(ManagerDetail managerDetail);

        Task<bool>UpdateManagerDetails(int managerCode,ManagerDetail managerDetail);
        Task<bool> Save();
    }
}
