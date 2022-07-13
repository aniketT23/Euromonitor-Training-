import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data:FormGroup;
  constructor(private fb:FormBuilder, private service:AuthenticationService) { }

  ngOnInit(): void {
    this.data=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(form:NgForm){
    this.service.authenticateUser(form);
     
  } 

}
