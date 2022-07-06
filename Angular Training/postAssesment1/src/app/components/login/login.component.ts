import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginData:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.loginData=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  public onSubmit() {}
}
