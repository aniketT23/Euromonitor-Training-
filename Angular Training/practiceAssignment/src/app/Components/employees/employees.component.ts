import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  ID: any = '';
  name: string = '';
  location: string = '';
  details: any[] = [];
  term='';

  constructor(
    private empServices: EmployeeService,
    private activate: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empServices.getEmployees().subscribe((data) => {
      this.details = data;
      console.log('Employess Data:-' + this.details);
    });
    // console.log('Employess Data:-' + JSON.stringify(this.details[0]));

    // this.empServices.getEmployeeByID(2)
  }
  public showData(id: any): void {
    this.empServices.getEmployeeByID(id);
    this.router.navigate([`empRoute/${id}`]);
  }
}
