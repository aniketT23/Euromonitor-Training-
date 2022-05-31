import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifArchitectComponent } from './cheif-architect.component';

describe('CheifArchitectComponent', () => {
  let component: CheifArchitectComponent;
  let fixture: ComponentFixture<CheifArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheifArchitectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheifArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
