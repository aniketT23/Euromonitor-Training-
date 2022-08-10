select * from countries;
select * from departments;
select * from dependents;
select * from employees;
select * from jobs;
select * from locations;
select * from regions;

select max(salary) 'Max Salary', min(salary) 'Min Salary', avg(salary) 'Average Salary'  from employees;

select  e.salary - j.min_salary as 'Commission Earned'  from employees e
join jobs j on j.job_id=e.job_id  ;

--2nd Query
select department_id 'Department Number',sum(salary) as 'Salary Payout'
from employees group by department_id;

select e.department_id 'Department Number',j.max_salary - j.min_salary as 'Commission Payout' from employees e 
join jobs j on j.job_id=e.job_id group by max_salary-min_salary,department_id order by e.department_id;

--3rd Query
select department_id 'Department Number',COUNT(employee_id) as 'Number of Employees'
from employees group by department_id;

--4th Query
select department_id 'Department Number',sum(salary) as 'Total Salary'
from employees group by department_id;

--5th Query
select e.employee_id,e.first_name,e.last_name, j.job_title,e.salary from employees e 
join jobs j on e.job_id=j.job_id where j.min_salary=e.salary order by 2;

--6th Query

select CONCAT(e.first_name,' ',e.last_name)as 'Employee Name',e.department_id as 'Department ID', e.salary -j.min_salary as 'Commission Earned'from employees e 
join jobs j on e.job_id=j.job_id 

--7th Query
select CONCAT(e.first_name,' ',e.last_name)as 'Employee Name',e.salary as 'Salary', (e.salary -j.min_salary)*2 as 'Commission Earned'from employees e 
join jobs j on e.job_id=j.job_id 
--8th query
select  first_name as 'Employee Name', count(department_id) as'Department' from employees group by first_name having count(department_id)>1;
--9th query
select SUM(salary) as 'Salary', manager_id from employees group by manager_id;
--10th query
select * from employees ;
select emp1.first_name as 'Manager Name', emp1.department_id, COUNT(emp2.employee_id) from employees emp1, employees emp2 where emp1.manager_id=emp2.employee_id group by emp1.manager_id,emp1.first_name,emp1.department_id
--11th query
select concat(m.first_name,m.last_name)as EmployeeName,m.department_id,m.salary,w.first_name as manager_name
from employees m,employees w where m.manager_id=w.employee_id and
m.last_name like '_a%'

--12th query
select department_id as 'Department ID',avg(salary)as 'Average Salary' from employees group by department_id  order by department_id

--13th query
select department_id as 'Department ID',max(salary)as 'Max Salary' from employees group by department_id

--14th query














