import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTesterComponent } from './software-tester.component';

describe('SoftwareTesterComponent', () => {
  let component: SoftwareTesterComponent;
  let fixture: ComponentFixture<SoftwareTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
