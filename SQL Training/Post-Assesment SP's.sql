--SP to Increase Salary of Employee
alter procedure dbo.spIncreaseEmployeeeSalary @salaryInput int, @employeeId int
as
begin 
declare @managerCount int
set @managerCount = (select COUNT(manager_id) as countEmp from employees  where manager_id is not null  and manager_id=@employeeId group by manager_id)
if(@managerCount>1)
begin
if(@salaryInput>0)
begin
 update employees set salary=salary+@salaryInput where employee_id=@employeeId
end
else print 'Enter a valid salary'
end
else
print 'Manager count should be greater than 0'

end


exec dbo.spIncreaseEmployeeeSalary 2000,100
