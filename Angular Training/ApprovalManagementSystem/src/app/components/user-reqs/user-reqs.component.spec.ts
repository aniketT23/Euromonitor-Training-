import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReqsComponent } from './user-reqs.component';

describe('UserReqsComponent', () => {
  let component: UserReqsComponent;
  let fixture: ComponentFixture<UserReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
