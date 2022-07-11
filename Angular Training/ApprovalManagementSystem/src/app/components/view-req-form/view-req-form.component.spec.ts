import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReqFormComponent } from './view-req-form.component';

describe('ViewReqFormComponent', () => {
  let component: ViewReqFormComponent;
  let fixture: ComponentFixture<ViewReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReqFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
