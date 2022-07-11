import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(public service:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

  public logOut(){
    this.service.isAuth=false;
    this.route.navigate(['login']);

  
  }
}
