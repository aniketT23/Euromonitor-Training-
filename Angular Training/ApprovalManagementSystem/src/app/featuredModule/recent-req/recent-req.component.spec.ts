import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReqComponent } from './recent-req.component';

describe('RecentReqComponent', () => {
  let component: RecentReqComponent;
  let fixture: ComponentFixture<RecentReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
