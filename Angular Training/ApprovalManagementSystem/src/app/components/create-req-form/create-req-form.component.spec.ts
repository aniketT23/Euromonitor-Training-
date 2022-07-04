import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReqFormComponent } from './create-req-form.component';

describe('CreateReqFormComponent', () => {
  let component: CreateReqFormComponent;
  let fixture: ComponentFixture<CreateReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReqFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
