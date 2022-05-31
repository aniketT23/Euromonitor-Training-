import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifProdComponent } from './cheif-prod.component';

describe('CheifProdComponent', () => {
  let component: CheifProdComponent;
  let fixture: ComponentFixture<CheifProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheifProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheifProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
