using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ApprovalManagementSystem.DataModel.Entities
{
    public partial class ApprovalManagementSystemContext : DbContext
    {
        public ApprovalManagementSystemContext()
        {
        }

        public ApprovalManagementSystemContext(DbContextOptions<ApprovalManagementSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ManagerDetail> ManagerDetails { get; set; } = null!;
        public virtual DbSet<RequestsInfo> RequestsInfos { get; set; } = null!;
        public virtual DbSet<UploadFilesInfo> UploadFilesInfos { get; set; } = null!;
        public virtual DbSet<UserDetail> UserDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=INDBANL112\\MSSQLSERVER01;Initial Catalog=ApprovalManagementSystem;Integrated Security=True;Encrypt=False;TrustServerCertificate=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ManagerDetail>(entity =>
            {
                entity.ToTable("managerDetails");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ApproveLimit).HasColumnName("approveLimit");

                entity.Property(e => e.ManagerId).HasColumnName("managerId");
            });

            modelBuilder.Entity<RequestsInfo>(entity =>
            {
                entity.HasKey(e => e.Requestid)
                    .HasName("PK__requests__E3C6D24957ECEAD5");

                entity.ToTable("requestsInfo");

                entity.Property(e => e.Requestid).HasColumnName("requestid");

                entity.Property(e => e.Advanceamount).HasColumnName("advanceamount");

                entity.Property(e => e.Discription)
                    .HasMaxLength(256)
                    .IsUnicode(false)
                    .HasColumnName("discription");

                entity.Property(e => e.EstimatedCost).HasColumnName("estimatedCost");

                entity.Property(e => e.ManagerId).HasColumnName("managerId");

                entity.Property(e => e.PlanDate)
                    .HasColumnType("date")
                    .HasColumnName("planDate");

                entity.Property(e => e.Purpose)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("purpose");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.RequestsInfos)
                    .HasForeignKey(d => d.ManagerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__requestsI__manag__412EB0B6");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RequestsInfos)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__requestsI__useri__403A8C7D");
            });

            modelBuilder.Entity<UploadFilesInfo>(entity =>
            {
                entity.HasKey(e => e.UploadId)
                    .HasName("PK__uploadFi__CADCD9EB51E946BC");

                entity.ToTable("uploadFilesInfo");

                entity.Property(e => e.UploadId).HasColumnName("uploadID");

                entity.Property(e => e.Filename)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("filename");

                entity.Property(e => e.Filetype)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("filetype");

                entity.Property(e => e.RequestId).HasColumnName("requestId");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.UploadFilesInfos)
                    .HasForeignKey(d => d.RequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__uploadFil__reque__4316F928");
            });

            modelBuilder.Entity<UserDetail>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__userDeta__CB9A1CFF7C3C0A6D");

                entity.ToTable("userDetails");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.Contact)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("contact");

                entity.Property(e => e.Designation)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("designation");

                entity.Property(e => e.Email)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("firstname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("gender");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasColumnName("lastname");

                entity.Property(e => e.ManagerCode).HasColumnName("managerCode");

                entity.Property(e => e.Password)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.HasOne(d => d.ManagerCodeNavigation)
                    .WithMany(p => p.UserDetails)
                    .HasForeignKey(d => d.ManagerCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__userDetai__manag__267ABA7A");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
