import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-detail-emp',
  templateUrl: './detail-emp.component.html',
  styleUrls: ['./detail-emp.component.css']
})
export class DetailEmpComponent implements OnInit {
empId:any='';
empDetails:any;

  constructor(private activate:ActivatedRoute, private router:Router,private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empId=this.activate.snapshot.paramMap.get('id');
 
    this.empDetails=this.empService.getEmployeeByID(+this.empId);
    // this.empDetails=JSON.stringify(this.empDetails)
    // console.log("EMp Details:-"+ this.empDetails);
    
  }

}
