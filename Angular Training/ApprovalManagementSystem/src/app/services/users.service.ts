import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

const userUrl = environment.usersUrl;
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    } else {
      console.log('Server Side Error', errorResponse.error);
    }

    return throwError('Something Went Wrong!! Please Debug!!');
  }

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(userUrl).pipe(catchError(this.handleError));
  }
  public addUser(data: any): Observable<User> {
    return this.http
      .post<User>(userUrl, data)
      .pipe(catchError(this.handleError));
  }

  public getUserByID(id: any): Observable<User> {
    const newUrl = `${userUrl}/${id}`;
    return this.http.get<User>(newUrl).pipe(catchError(this.handleError));
  }

  public updateUser(id: any, data: any): Observable<User> {
    const newUrl = `${userUrl}/${id}`;
    return this.http
      .patch<User>(newUrl, data)
      .pipe(catchError(this.handleError));
  }
}
