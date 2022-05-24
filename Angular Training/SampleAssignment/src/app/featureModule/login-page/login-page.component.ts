import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  message: string = 'Raw Data';
  text: string = 'Garbage';
  constructor() {}

  ngOnInit(): void {}

  public sampleData(): void {
    alert('Event Binding');
  }
   public sampleFun(): void {
    alert('I am running!!');
  }
}
