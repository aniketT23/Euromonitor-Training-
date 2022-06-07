import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  ID: string = '';
  name: string = '';
  location: string = '';
  details:any[]=[];

  constructor(
    private empServices: EmployeeService,
    private activate: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empServices.getEmployees().subscribe(data=>{
this.details.push(JSON.stringify(data))
// this.details=data
console.log("Employess Data:-"+this.details);
    })
    // this.empServices.getEmployeeByID(2)
  }
}
