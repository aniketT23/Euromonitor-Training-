import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSoftwareEngComponent } from './senior-software-eng.component';

describe('SeniorSoftwareEngComponent', () => {
  let component: SeniorSoftwareEngComponent;
  let fixture: ComponentFixture<SeniorSoftwareEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorSoftwareEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorSoftwareEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
