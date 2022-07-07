import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Books } from '../models/books';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment';

const booksUrl = environment.booksUrl;
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    } else {
      console.log('Server Side Error', errorResponse.error);
    }

    return throwError('Something Went Wrong!! Please Debug!!');
  }
  constructor(private http: HttpClient) {}

  public addBooks(data: any): Observable<Books> {
    return this.http
      .post<Books>(booksUrl, data)
      .pipe(catchError(this.handleError));
  }
  public getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(booksUrl).pipe(catchError(this.handleError));
  }
}
