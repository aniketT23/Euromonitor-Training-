import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const userUrl = environment.userUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: any;
  isAuth = false;
  isAdmin = false;
  isUser = false;
  res: any;
  loginData: any;
  constructor(private http: HttpClient, private router: Router) {}
  public authenticateUser(data: any) {
    return this.http.get(userUrl).subscribe((res) => {
      this.users = res;
      this.loginData = data;
      this.authUser();
      this.navigateUser();
    });
  }
  public authUser() {
    this.res = this.users.find((userInfo: any) => {
      return (
        userInfo.name == this.loginData.name &&
        userInfo.password == this.loginData.password
      );
    });
  }

  public navigateUser() {
    if (this.res) {
      this.checkRole();
    } else {
      alert('Invalid Credentials');
    }
  }

  public checkRole() {
    this.isAuth = true;
    if (this.res.role == 'admin') {
      this.isAdmin = true;
      this.isAuth = true;
      this.router.navigate(['']);
    } else if (this.res.role == 'user') {
      this.isUser = true;
      this.isAuth = true;
      this.router.navigate(['signup']);
    }
    else{
      alert('Invalid user');
    }
  }
}
