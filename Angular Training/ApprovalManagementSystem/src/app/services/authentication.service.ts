import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const userUrl=environment.usersUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: any;
  userName: string;
  isAuth = false;
  isAdmin = false;
  isUser = false;
  res: any;

  constructor() { }
}
