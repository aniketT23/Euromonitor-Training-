import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReqComponent } from './create-req.component';

describe('CreateReqComponent', () => {
  let component: CreateReqComponent;
  let fixture: ComponentFixture<CreateReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
