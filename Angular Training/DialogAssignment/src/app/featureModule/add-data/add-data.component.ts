import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Data } from 'src/app/models/data.model';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  data: Data;
  newData: FormGroup;
  @Output() postData: EventEmitter<Data>;
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.newData = this.form.group({
      id: ['', Validators.required],
      form: ['', Validators.required],
      to: ['', Validators.required],
      dateCreated: ['', Validators.required],
      permanentLink: ['', Validators.required],
    });
  }

  OnFormSubmit(res: NgForm) {
    console.log('Form Data:', res.value);
  }

  getData() {
    console.log('data:', this.newData.value);
    this.postData.emit(this.newData.value);
  }
}
