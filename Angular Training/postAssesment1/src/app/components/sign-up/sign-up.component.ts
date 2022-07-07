import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registrationData: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private usersServices: UsersService,
    private router: Router ,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registrationData = this.fb.group({
      role: ['user', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      books: [],
    });
  }
  public onSubmit(form: NgForm) {
    this.usersServices.addUsers(form).subscribe(
      (res) => {
        console.log('New User:', res);
         this.toastr.success('User Registers', 'sent');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
