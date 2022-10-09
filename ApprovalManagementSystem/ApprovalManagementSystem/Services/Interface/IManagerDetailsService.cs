using ApprovalManagementSystem.DataModel.Entities;

namespace ApprovalManagementSystem.Api.Services.Interface
{
    public interface IManagerDetailsService
    {
        ICollection<ManagerDetail> GetManagersDetailsAsync();
        Task<ManagerDetail> GetManagerDetailsAsync(int managerId);
        Task<ManagerDetail> GetManagerDetailsByuserCodeAsync(string managerCode);
        Task<bool> ManagerExistsAsync(int managerId);

        bool CreateManagerDetail(ManagerDetail managerDetail);
        bool Save();

    }
}
