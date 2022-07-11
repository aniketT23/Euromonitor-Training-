import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Requests } from '../models/requests.model';
import { environment } from 'src/environments/environment';

const reqUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    } else {
      console.log('Server Side Error', errorResponse.error);
    }

    return throwError('Something Went Wrong!! Please Debug!!');
  }
  constructor(private http: HttpClient) {}

  public getRequests(): Observable<Requests[]> {
    return this.http.get<Requests[]>(reqUrl).pipe(catchError(this.handleError));
  }
  public addRequests(reqData: any): Observable<Requests> {
    return this.http
      .post<Requests>(reqUrl, reqData)
      .pipe(catchError(this.handleError));
  }
  public editRequest(id: any, data: any): Observable<Requests> {
    const newUrl = `${reqUrl}/${id}`;
    return this.http
      .patch<Requests>(newUrl, data)
      .pipe(catchError(this.handleError));
  }

  public deleteReq(id: any): Observable<Requests> {
    const newUrl = `${reqUrl}/${id}`;
    return this.http
      .delete<Requests>(newUrl)
      .pipe(catchError(this.handleError));
  }
}
