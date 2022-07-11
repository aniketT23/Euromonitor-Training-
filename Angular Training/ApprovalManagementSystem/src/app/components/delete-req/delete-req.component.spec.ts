import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReqComponent } from './delete-req.component';

describe('DeleteReqComponent', () => {
  let component: DeleteReqComponent;
  let fixture: ComponentFixture<DeleteReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
