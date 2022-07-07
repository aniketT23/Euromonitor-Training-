import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  name: string;
  constructor(public service: AuthenticationService, private route: Router) {}

  ngOnInit(): void {
    this.name = this.service.userName;
    console.log(this.service.isAdmin);
  }
  public logOut() {
    this.service.isAuth = false;
    this.route.navigate(['login']);
  }
}
