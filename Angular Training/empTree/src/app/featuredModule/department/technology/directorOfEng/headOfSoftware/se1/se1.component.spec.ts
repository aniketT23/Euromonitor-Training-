import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Se1Component } from './se1.component';

describe('Se1Component', () => {
  let component: Se1Component;
  let fixture: ComponentFixture<Se1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Se1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Se1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
