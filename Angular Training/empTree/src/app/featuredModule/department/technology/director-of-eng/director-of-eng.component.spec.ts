import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOfEngComponent } from './director-of-eng.component';

describe('DirectorOfEngComponent', () => {
  let component: DirectorOfEngComponent;
  let fixture: ComponentFixture<DirectorOfEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorOfEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOfEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
