import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
empRecord:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  public storedRecord(event: any)
  {
    this.empRecord.push(event);
    console.log("EMP Record:-"+ JSON.stringify(this.empRecord));
    
  }

}
