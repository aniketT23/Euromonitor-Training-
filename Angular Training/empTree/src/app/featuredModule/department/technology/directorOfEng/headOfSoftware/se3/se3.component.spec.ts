import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Se3Component } from './se3.component';

describe('Se3Component', () => {
  let component: Se3Component;
  let fixture: ComponentFixture<Se3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Se3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Se3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
