import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Data } from 'src/app/models/data.model';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
data:Data;
newData:FormGroup;

  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
    this.newData=this.form.group({
      id:['1',Validators.required],
      form:['2',Validators.required],
      to:['3',Validators.required],
      dateCreated:['',Validators.required],
      permanentLink:['true',Validators.required]
    })
  
    
  }

  OnFormSubmit(form:NgForm){
    
  }

}
