import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSEComponent } from './senior-se.component';

describe('SeniorSEComponent', () => {
  let component: SeniorSEComponent;
  let fixture: ComponentFixture<SeniorSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
