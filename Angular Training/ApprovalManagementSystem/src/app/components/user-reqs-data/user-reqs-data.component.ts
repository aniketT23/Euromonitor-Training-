import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reqs-data',
  templateUrl: './user-reqs-data.component.html',
  styleUrls: ['./user-reqs-data.component.css']
})
export class UserReqsDataComponent implements OnInit {
data:any;
  constructor(private service:AuthenticationService,private reqService:RequestsService, private route:Router ) { }

  ngOnInit(): void {
    this.reqService.getRequests().subscribe(res=>{
      this.data=res;
      
    })

  }

}
