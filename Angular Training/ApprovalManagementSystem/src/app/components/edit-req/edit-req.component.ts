import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Requests } from 'src/app/models/requests.model';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-req',
  templateUrl: './edit-req.component.html',
  styleUrls: ['./edit-req.component.css']
})
export class EditReqComponent implements OnInit {
req= new Requests();
editForm:FormGroup;
  constructor(public reqService:RequestsService,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {


  }

  public getReq(id:any,data:any){
    
  }

}
