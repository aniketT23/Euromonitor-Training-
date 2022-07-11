import { Component, OnInit } from '@angular/core';

import { Requests } from 'src/app/models/requests.model';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-req-form',
  templateUrl: './view-req-form.component.html',
  styleUrls: ['./view-req-form.component.css'],
})
export class ViewReqFormComponent implements OnInit {
  data: Requests[] = [];
  displayColumns:string[]=['id','estCost','manager','purpose']
  constructor(private route: Router, private requestService: RequestsService) {}

  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (res) => {
        this.data = res;
        this.data.reverse();
        console.log('data:',this.data)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
