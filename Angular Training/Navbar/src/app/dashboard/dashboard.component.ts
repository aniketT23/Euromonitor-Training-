import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// id:number;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    // this.id= +this.activeroute.snapshot.paramMap.get('id');

 

    // console.log(this.id);
 
 
   }

  ngOnInit(): void {
  }

}
