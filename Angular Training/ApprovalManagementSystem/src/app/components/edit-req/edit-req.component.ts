import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Requests } from 'src/app/models/requests.model';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-req',
  templateUrl: './edit-req.component.html',
  styleUrls: ['./edit-req.component.css'],
})
export class EditReqComponent implements OnInit {
  reqData = new Requests();
  editForm: FormGroup;
  constructor(
    public reqService: RequestsService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getReq(this.reqService.reqID);

    this.editForm = this.fb.group({
      purpose: ['', Validators.required],
      discription: ['', Validators.required],
      manager: ['', Validators.required],
      estCost: ['', Validators.required],
      amount: ['', Validators.required],
    });
    this.editForm.get('manager').disable();
    this.editForm.get('purpose').disable();
  }

  public getReq(id: any) {
    this.reqService.getReqByID(id).subscribe((res) => {
      this.reqData = res;
    });
  }

  public onSubmit(form: NgForm) {
    this.reqService
      .editRequest(this.reqService.reqID, this.editForm.value)
      .subscribe(
        (res) => {
          console.log('Edited Data:', res);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
