import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Data } from 'src/app/models/data.model';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  data: Data;
  newData: FormGroup;
  @Output() postData: EventEmitter<Data>;

  constructor(
    private form: FormBuilder,
    private user: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newData = this.form.group({
      id: ['', Validators.required],
      form: ['', Validators.required],
      to: ['', Validators.required],
      dateCreated: ['', Validators.required],
      permanentLink: ['', Validators.required],
    });
  }

  OnFormSubmit(response: NgForm) {
    
  }

  getData() {
    // console.log('data:', this.newData.value);
    // this.postData.emit(this.newData.value);
    this.user.addData(this.newData.value).subscribe(
      (res) => {
        console.log('Form Data:', res);

        this.router.navigate(['home']);
    
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

