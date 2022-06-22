import { Component, OnInit } from '@angular/core';

import { AddDataComponent } from '../add-data/add-data.component';
import {MatDialog} from '@angular/material/dialog';
import{data} from '../../models/data.model';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  isDataLoading=true;
  list=data;
  displayedColumns:string[]=['ID','From','TO','Date','Link']
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(data);
    this.isDataLoading=false;
    
  }

  public addData(){
    this.dialog.open(AddDataComponent)
  }

}
