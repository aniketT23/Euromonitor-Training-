import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
empName:any='';
location:string='';

  constructor() { }

  ngOnInit(): void {
  }
  public OnSubmit():void{
    // alert("Entered Data:" + data.empName)
  }

}
