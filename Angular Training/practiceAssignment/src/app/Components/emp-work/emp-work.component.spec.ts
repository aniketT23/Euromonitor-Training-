import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpWorkComponent } from './emp-work.component';

describe('EmpWorkComponent', () => {
  let component: EmpWorkComponent;
  let fixture: ComponentFixture<EmpWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
