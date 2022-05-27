import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Se2Component } from './se2.component';

describe('Se2Component', () => {
  let component: Se2Component;
  let fixture: ComponentFixture<Se2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Se2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Se2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
