import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { AddDataComponent } from '../add-data/add-data.component';
import { Data } from '../../models/data.model';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent implements OnInit {
  isDataLoading = true;
  list: Data[] = [];

  displayedColumns: string[] = ['ID', 'From', 'TO', 'Date', 'Link'];
  constructor(
    public dialog: MatDialog,
    private user: UserDataService,
    private router: Router
  ) {}
  pageData: MatTableDataSource<Data>;
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit() {
    this.pageData = new MatTableDataSource(this.list);
    this.pageData.paginator = this.paginator;
  }

  ngOnInit(): void {
    // console.log(data);
    this.isDataLoading = false;
    this.user.getData().subscribe((res) => {
      this.list = res;
      console.log('Response', this.list);
    });

    // this.pageData.paginator = this.paginator;
  }

  ngDoCheck() {
    // this.user.getData().subscribe((res) => {
    //   this.list = res;
    //   console.log('Response', this.list);
    // });
  }

  public addData() {
    this.dialog.open(AddDataComponent, {
      height: '2fr',
      width: '2fr',
    });

    this.router.navigate(['']);
  }

  // public storeData(event: any) {
  //   this.list.push(event);
  //   console.log('Event:', event);
  // }
}
