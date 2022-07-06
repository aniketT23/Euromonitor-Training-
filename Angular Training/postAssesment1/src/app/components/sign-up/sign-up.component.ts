import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registrationData: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationData = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }
  public onSubmit() {}
}
