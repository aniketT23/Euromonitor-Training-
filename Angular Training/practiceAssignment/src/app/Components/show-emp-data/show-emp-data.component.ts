import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EmpDetails } from 'src/app/Models/emp-details';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-show-emp-data',
  templateUrl: './show-emp-data.component.html',
  styleUrls: ['./show-emp-data.component.css']
})
export class ShowEmpDataComponent implements OnInit {
employee:EmpDetails[];
@Input() rating :number;
skillrating:string;


  constructor(private empService:EmployeeService) { }

  ngOnChanges() {
    if (this.rating === 3.5) {
      this.skillrating = 'Good';
    } else if (this.rating === 4.0) {
      this.skillrating = 'Very Good';
    } else if (this.rating === 5.0) {
      this.skillrating = 'Excellent';
    } else {
      this.skillrating = 'NO Rating Specified!';
    }
  }
  
  ngOnInit(): void {
    // this.empService.getDetails().subscribe(response=>this.employee=response);
    // console.log("DAtaaa"+this.empService.getDetails());

    
  }



}
