import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefProductOfficerComponent } from './chief-product-officer.component';

describe('ChiefProductOfficerComponent', () => {
  let component: ChiefProductOfficerComponent;
  let fixture: ComponentFixture<ChiefProductOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefProductOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefProductOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
