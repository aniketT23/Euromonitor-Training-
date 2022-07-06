import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginData: FormGroup;
  constructor(
    private fb: FormBuilder,
    private services: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginData = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onSubmit(form: NgForm) {
    this.services.authenticateUser(form);
  }
}
