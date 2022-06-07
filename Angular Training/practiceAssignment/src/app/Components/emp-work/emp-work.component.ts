import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { EmpDetails } from 'src/app/Models/emp-details';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-emp-work',
  templateUrl: './emp-work.component.html',
  styleUrls: ['./emp-work.component.css'],
})
export class EmpWorkComponent implements OnInit {
  employee: EmpDetails;
  @Output() addemployeeRecord:EventEmitter<EmpDetails>=new EventEmitter<EmpDetails>();
  constructor() {
    this.employee = new EmpDetails();
  }
  public addEmployee(){
    const data={
      id:this.employee.id,
       employeeName:this.employee.employeeName,
       projectId:this.employee.projectId,
       angularProficiency:this.employee.angularProficiency
     };
 console.log("data:",data);
 
     this.addemployeeRecord.emit(data);
  }

  ngOnInit(): void {}
}
