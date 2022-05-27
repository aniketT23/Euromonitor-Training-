import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css'],
})
export class ViewRequestComponent implements OnInit {
info:any=[];
  datas: any[] = [
    { id: 1, request: 'Update Profile', status: 'Completed' },
    { id: 2, request: 'Parking Acess', status: 'Declined' },
    { id: 3, request: 'Heating Issue', status: 'In Progress' },
  ];
  public constructor() {}

  ngOnInit(): void {}
}
