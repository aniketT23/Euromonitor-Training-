import { Observable, of } from 'rxjs';

import { Employee } from '../Models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  empDetails: Employee[] = [];

  constructor() {
    this.empDetails = [
      new Employee(1, 'Rambhu', 'Pune', 'Male', true),
      new Employee(2, 'Vishnu', 'Bangalore', 'Male', false),
      new Employee(3, 'Aniket', 'Delhi', 'male', true),
      new Employee(4, 'Shivam', 'Lucknow', 'Male', false),
    ];
  }
  public getEmployees(): Observable<Employee[]> {

    return of(this.empDetails);
  }
  public getEmployeeByID(id: number): Observable<Employee> {
    const emp:any = this.empDetails.find((x) => x.id === id);
    
    return emp;
  }
}
