import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private service:AuthenticationService) { }

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
