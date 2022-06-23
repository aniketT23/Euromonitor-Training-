import { Component, OnInit } from '@angular/core';

import { AddDataComponent } from '../add-data/add-data.component';
import { Data } from '../../models/data.model';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(public dialog: MatDialog, private user: UserDataService) {}

  ngOnInit(): void {
    // console.log(data);
    this.isDataLoading = false;
    this.user.getData().subscribe((res) => {
      this.list = res;
      console.log('Response', this.list);
    });
  }

  public addData() {
    this.dialog.open(AddDataComponent, {
      height: '2fr',
      width: '2fr',
    });
  }

  // public storeData(event: any) {
  //   this.list.push(event);
  //   console.log('Event:', event);
  // }
}
