import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefArchitectComponent } from './chief-architect.component';

describe('ChiefArchitectComponent', () => {
  let component: ChiefArchitectComponent;
  let fixture: ComponentFixture<ChiefArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefArchitectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
