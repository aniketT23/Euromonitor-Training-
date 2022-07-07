import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';

const userUrl = environment.userUrl;

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

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(userUrl).pipe(catchError(this.handleError));
  }
  public addUsers(data: any): Observable<Users> {
    return this.http
      .post<Users>(userUrl, data)
      .pipe(catchError(this.handleError));
  }
  public getUserByID(id: any): Observable<Users> {
    const newUrl = `${userUrl}/${id}`;
    return this.http.get<Users>(newUrl).pipe(catchError(this.handleError));
  }

  public updateUser(id:any,data:any):Observable<Users>{
    const newUrl = `${userUrl}/${id}`;
    return this.http.patch<Users>(newUrl,data).pipe(catchError(this.handleError));
  }
}
