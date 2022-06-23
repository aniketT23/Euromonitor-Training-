import { Observable, of, throwError } from 'rxjs';

import { Data } from '../models/data.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  data: Data[] = [];

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    } else {
      console.log('Server Side Error', errorResponse.error);
    }
    return throwError('Their is a problem in ur code');
  }

  constructor() {
    this.data = [
      {
        id: 19228,
        from: '/heath_and_wellness',
        to: '/danone-group-in-heath-and-wellness/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19229,
        from: '/heinekens_acquisition_of_femsa_increases',
        to: '/heinekens_acquisition_of_femsa_increases',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19230,
        from: '/herbal_traditional_products',
        to: '/herbal_traditional_products',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19231,
        from: '/home_care',
        to: '/amway-corp-in-home-care/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19232,
        from: '/hong-kong-china',
        to: '/100-home-delivery-take-away-in-hong-kong-china',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date().getDate(),
        permanentLink: true,
      },
    ];
  }

  public getData(): Observable<Data[]> {
    return of(this.data);
  }
  public addData(newdata: any): Observable<Data> {
    let x = this.data.push(newdata);
    console.log('New Data:', this.data);
    return of(newdata);
  }
}
