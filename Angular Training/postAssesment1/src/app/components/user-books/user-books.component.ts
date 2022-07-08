import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
data:any;
  constructor(private route:Router,private userService:UsersService, public service:AuthenticationService) { }

  ngOnInit(): void {
    this.userService.getUserByID(this.service.id).subscribe(res=>{
      this.data=res.books;
  })
  }

}
