import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfSoftwareComponent } from './head-of-software.component';

describe('HeadOfSoftwareComponent', () => {
  let component: HeadOfSoftwareComponent;
  let fixture: ComponentFixture<HeadOfSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
