import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-req-form',
  templateUrl: './create-req-form.component.html',
  styleUrls: ['./create-req-form.component.css'],
})
export class CreateReqFormComponent implements OnInit {
  formData: FormGroup;

  purposeData: string[] = [
    'Travel',
    'Team Outing',
    'Food & Drinks',
    'Internet Bill',
    'Transport',
    'Hotel',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private requestService: RequestsService
  ) {}

  onSubmit(form: NgForm) {
   console.log(form);
   
    this.requestService.addRequests(form).subscribe(
      (res) => {
        // console.log(res.date);
        
        console.log('Data Submitted');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      purpose: ['', Validators.required],
      discription: ['', Validators.required],
      manager: ['Akshay', Validators.required],
      estCost: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
}
