import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReqsDataComponent } from './user-reqs-data.component';

describe('UserReqsDataComponent', () => {
  let component: UserReqsDataComponent;
  let fixture: ComponentFixture<UserReqsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReqsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReqsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
