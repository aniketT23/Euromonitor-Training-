import { Component, OnInit } from '@angular/core';

import { EmpDetails } from 'src/app/Models/emp-details';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-show-emp-data',
  templateUrl: './show-emp-data.component.html',
  styleUrls: ['./show-emp-data.component.css']
})
export class ShowEmpDataComponent implements OnInit {
employee:EmpDetails[];
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getDetails().subscribe(response=>this.employee=response);
  }

}
