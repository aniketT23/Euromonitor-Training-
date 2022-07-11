import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Requests } from 'src/app/models/requests.model';
import { RequestsService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-req-form',
  templateUrl: './view-req-form.component.html',
  styleUrls: ['./view-req-form.component.css'],
})
export class ViewReqFormComponent implements OnInit {
  data: any;
  displayColumns: string[] = [
    'ID',
    'Estimated Cost',
    'manager',
    'purpose',
    'Status',
    'Operations',
  ];
  constructor(private route: Router, private requestService: RequestsService) {}
  pageData: MatTableDataSource<Requests>;
  @ViewChild('paginator') paginator: MatPaginator;
  ngAfterViewInit() {
    this.pageData = new MatTableDataSource(this.data);
    this.pageData.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.requestService.getRequests().subscribe(
      (res) => {
        this.data = res;
        this.data.reverse();
        console.log('data:', this.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
