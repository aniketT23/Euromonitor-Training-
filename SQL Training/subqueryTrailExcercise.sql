select * from job_history;
select * from  countries;
select * from jobs;
select * from regions;
select * from locations;
select * from departments;
select  * from employees1;

--Query 1
select first_name from employees1;

select CONCAT(first_name,' ',last_name) as 'Employee Name' from employees1 where SALARY > (select SALARY from employees1 where EMPLOYEE_ID=163);

--Query 2

select CONCAT(first_name,' ',last_name) as 'Employee Name', SALARY, DEPARTMENT_ID from employees1 where SALARY in (select min(SALARY) from employees1 group by DEPARTMENT_ID );

--Query 3
	--Query for getting second highest salary;
select MAX(salary) from employees1  where SALARY < (select MAX(salary) from employees1 );

select * from employees1 where SALARY =(select MAX(salary) from employees1  where SALARY < (select MAX(salary) from employees1 ) );

--Query 4


select   SALARY from employees1 where FIRST_NAME like '%j%' or LAST_NAME like '%j%';

select AVG(salary) from employees1;

select EMPLOYEE_ID, CONCAT(first_name,' ',last_name) as 'Employee Name', SALARY from employees1 where SALARY >
( select AVG(SALARY) from employees1) and DEPARTMENT_ID in(select DEPARTMENT_ID from employees1 where FIRST_NAME like '%j%' or LAST_NAME like '%j%' );

--Query 5

select DEPARTMENT_ID from departments  where location_id= ( select LOCATION_ID from locations where CITY='Toronto');


 select EMPLOYEE_ID, CONCAT(first_name,' ',last_name) as 'Employee Name', SALARY, JOB_ID from employees1 where DEPARTMENT_ID
 =(select DEPARTMENT_ID from departments  where location_id= ( select LOCATION_ID from locations where CITY='Toronto'));


 --Query 6

  select EMPLOYEE_ID, CONCAT(first_name,' ',last_name) as 'Employee Name', SALARY, JOB_ID ,case when SALARY>=(select  AVG(SALARY) from employees1) then 'High' else 'Low' end as 'Salary Status' from employees1 ;


  --Query 7

  select EMPLOYEE_ID, CONCAT(first_name,' ',last_name) as 'Employee Name', SALARY, JOB_ID from employees1
  where DEPARTMENT_ID in(select DEPARTMENT_ID from departments 
where LOCATION_ID in(select LOCATION_ID from locations 
where COUNTRY_ID in(select COUNTRY_ID from countries WHERE COUNTRY_NAME='United Kingdom')));







