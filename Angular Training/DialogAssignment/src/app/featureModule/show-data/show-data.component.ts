import { Component, OnInit } from '@angular/core';

import { AddDataComponent } from '../add-data/add-data.component';
import{Data} from '../../models/data.model';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  isDataLoading=true;
  list:Data[]=[ {
        id: 19228,
        from: '/heath_and_wellness',
        to: '/danone-group-in-heath-and-wellness/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19229,
        from: '/heinekens_acquisition_of_femsa_increases',
        to: '/heinekens_acquisition_of_femsa_increases',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19230,
        from: '/herbal_traditional_products',
        to: '/herbal_traditional_products',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19231,
        from: '/home_care',
        to: '/amway-corp-in-home-care/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19232,
        from: '/hong-kong-china',
        to: '/100-home-delivery-take-away-in-hong-kong-china',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      }];
  displayedColumns:string[]=['ID','From','TO','Date','Link']
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log(data);
    this.isDataLoading=false;
    
  }

  public addData(){
    this.dialog.open(AddDataComponent,{
      height:'2fr',
      width:'2fr'
    })
  }

}
