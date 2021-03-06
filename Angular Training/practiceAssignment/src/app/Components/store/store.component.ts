import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  empRecord: any = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService
      .getDetails()
      .subscribe((response) => (this.empRecord = response));
  }
  public storedRecord(event: any) {
    this.empRecord.push(event);
    console.log('EMP Record:-' + JSON.stringify(this.empRecord));
  }

  // public checkProf(): string {
  //   console.log('PROF' + this.empRecord.angularProficiency);

  //   if (this.empRecord.angularProficiency == 4.0) {
  //     return 'Excellent';
  //   } else if (
  //     this.empRecord.angularProficiency < 5 &&
  //     this.empRecord.angularProficiency > 4
  //   ) {
  //     return 'Good';
  //   } else {
  //     return 'Bad';
  //   }
  // }
}
