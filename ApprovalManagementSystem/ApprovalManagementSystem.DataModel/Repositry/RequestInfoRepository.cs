using ApprovalManagementSystem.DataModel.Entities;
using ApprovalManagementSystem.DataModel.Repositry.Interface;
using ApprovalManagementSystem.ServiceModel.DTO.Request;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApprovalManagementSystem.DataModel.Repositry
{
    public class RequestInfoRepository : IRequestsInfoRepository
    {
        private readonly ApprovalManagementSystemContext _approvalManagementSystemContext;

        public RequestInfoRepository(ApprovalManagementSystemContext approvalManagementSystemContext)
        {
            _approvalManagementSystemContext = approvalManagementSystemContext;
        }

        public async Task<bool> CreateRequest(RequestsInfo request)
        {
            _approvalManagementSystemContext.Add(request);
            
            return await Save();
        }

        public async Task<bool> DeleteRequest(RequestsInfo request)
        {
            _approvalManagementSystemContext.Remove(request);
            return await Save();
        }

        public async Task<RequestsInfo> GEtRequestById(int requestId)
        {
            return await _approvalManagementSystemContext.RequestsInfos.Where(r => r.Requestid == requestId).FirstOrDefaultAsync();
        }

        public async Task<ICollection<CompleteRequestDetailsDto>> getRequestsByMangaerId(int managerId)
        {
            var data = (from r in _approvalManagementSystemContext.RequestsInfos
                        join m in _approvalManagementSystemContext.UserDetails on r.ManagerId equals m.UserId
                        join u in _approvalManagementSystemContext.UserDetails on r.Userid equals u.UserId

                        select new CompleteRequestDetailsDto
                        {
                            ReqId = r.Requestid,
                            ReqStatus = r.ReqStatus,
                            Advanceamount = r.Advanceamount,
                            Discription = r.Discription,
                            PlanDate = r.PlanDate, 
                            EstimatedCost = r.EstimatedCost,
                            Purpose = r.Purpose,
                            Userid = r.Userid,
                            userName=u.Firstname,
                            ManagerId=r.ManagerId,
                            managerName=m.Firstname,


                        }).Where(r=>r.ManagerId==managerId).ToListAsync();
            return await data;
        }

        public async Task<ICollection<CompleteRequestDetailsDto>> GetRequestsByUserId(int userId)
        {
            var data = (from r in _approvalManagementSystemContext.RequestsInfos
                        join m in _approvalManagementSystemContext.UserDetails on r.ManagerId equals m.UserId
                        join u in _approvalManagementSystemContext.UserDetails on r.Userid equals u.UserId

                        select new CompleteRequestDetailsDto
                        {
                            ReqId = r.Requestid,
                            ReqStatus = r.ReqStatus,
                            Advanceamount = r.Advanceamount,
                            Discription = r.Discription,
                            PlanDate = r.PlanDate,
                            EstimatedCost = r.EstimatedCost,
                            Purpose = r.Purpose,
                            Userid = r.Userid,
                            userName = u.Firstname,
                            ManagerId = r.ManagerId,
                            managerName = m.Firstname,


                        }).Where(r => r.Userid == userId).ToListAsync();
            return await data;
        }

        public async Task<ICollection<RequestsInfo>> GetRequestsInfo()
        {
            return await  _approvalManagementSystemContext.RequestsInfos.ToListAsync();
        }

        public async Task<bool> RequestExists(int requestId)
        {
            return await _approvalManagementSystemContext.RequestsInfos.AnyAsync(r => r.Requestid == requestId);
        }

        public async Task<bool> Save()
        {
            var saved =await  _approvalManagementSystemContext.SaveChangesAsync();
            return  saved > 0 ? true : false;
        }
    }
}
