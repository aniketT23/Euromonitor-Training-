import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoComponent } from './cto.component';

describe('CtoComponent', () => {
  let component: CtoComponent;
  let fixture: ComponentFixture<CtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
