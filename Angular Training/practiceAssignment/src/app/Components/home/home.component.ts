import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empName: any = '';
  location: string = '';

  constructor() {}
  form = new FormGroup({

    gender: new FormControl('', Validators.required),
    attendence: new FormControl('', Validators.required)
  });
  get f() {
    return this.form.controls;
  }
  public onSubmit(): void {
    // alert("Entered Data:" + data.empName)
    console.log(this.form.value);
  }
  ngOnInit(): void {}
}
