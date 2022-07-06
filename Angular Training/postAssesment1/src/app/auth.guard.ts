import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthenticationService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.service.isAdmin) {
      return true;
    } else if (this.service.isUser) {
      return true;
    } else {
      console.log('Error in auth services');
      return false;
    }
  }
}
