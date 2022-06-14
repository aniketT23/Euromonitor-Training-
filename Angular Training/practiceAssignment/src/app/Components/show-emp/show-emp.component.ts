import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent implements OnInit {
  @Input() employee: any = [];
rating:string='';
  constructor() {}

  ngOnChanges(){
    if(this.employee.angularProficiency==5){
      this.rating='Excellent';
    }
    if(this.employee.angularProficiency<5 && this.employee.angularProficiency>4){
      this.rating='Good'
    }
    else{
      this.rating='bad';
    }
  }

  ngOnInit(): void {}
}
