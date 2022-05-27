import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalTrainerComponent } from './technical-trainer.component';

describe('TechnicalTrainerComponent', () => {
  let component: TechnicalTrainerComponent;
  let fixture: ComponentFixture<TechnicalTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
