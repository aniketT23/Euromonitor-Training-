import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
@Input() employee:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
