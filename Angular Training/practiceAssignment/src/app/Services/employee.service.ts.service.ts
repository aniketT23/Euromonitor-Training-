import { Observable, of } from 'rxjs';

import { Employee } from '../Models/employee.model.ts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  empDetails: Employee[] = [];

  constructor() {
    this.empDetails = [
      new Employee(1, 'Sam', 'Pune', 'Male', true),
      new Employee(2, 'Mayura', 'Bangalore', 'FEMALE', false),
      new Employee(3, 'Anita', 'Delhi', 'Female', true),
      new Employee(4, 'John', 'Punjab', 'Male', false),
    ];
  }
}
