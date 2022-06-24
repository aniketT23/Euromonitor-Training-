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
  date = new Date().getDate();
  link: any[] = ['Yes', 'No'];
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
      dateCreated: [`${this.date}`, Validators.required],
      permanentLink: ['', Validators.required],
    });

    this.newData.get('dateCreated').disable();
  }

  OnFormSubmit(response: NgForm) {}

  getData() {
    // console.log('data:', this.newData.value);
    // this.postData.emit(this.newData.value);
    this.user.addData(this.newData.value).subscribe(
      (res) => {
        this.newData.value.dateCreated = this.date;
        let newLink = this.newData.value.permanentLink;
        this.newData.value.permanentLink = this.validateLink(newLink);
        console.log('Form Data:', this.newData.value);

        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validateLink(val: any) {
    if (val == 'Yes') {
      return true;
    } else {
      return false;
    }
  }
}
