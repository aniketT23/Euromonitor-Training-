import { TestBed } from '@angular/core/testing';

import { Employee.Service.TsService } from './employee.service.ts.service';

describe('Employee.Service.TsService', () => {
  let service: Employee.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
