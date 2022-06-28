import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Profile Info', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Stats', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Recent Requests', cols: 4, rows: 1, color: 'lightpink' },
  
  ];
  constructor() {}

  ngOnInit(): void {}
}
