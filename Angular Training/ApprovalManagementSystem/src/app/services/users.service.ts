import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const userUrl = environment.usersUrl;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
