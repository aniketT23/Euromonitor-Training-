import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecativeFormComponent } from './recative-form.component';

describe('RecativeFormComponent', () => {
  let component: RecativeFormComponent;
  let fixture: ComponentFixture<RecativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
