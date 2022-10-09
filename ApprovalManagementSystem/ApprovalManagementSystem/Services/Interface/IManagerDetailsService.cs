using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IManagerDetailsService
    {
        ICollection<ManagerDetail> GetManagersDetailsAsync();
        Task<ManagerDetail> GetManagerDetailsAsync(int managerCode);
        Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(int managerId);
        Task<bool> ManagerExistsAsync(int managerId);

        bool CreateManagerDetail(ManagerDetail managerDetail);
        bool Save();

    }
}
