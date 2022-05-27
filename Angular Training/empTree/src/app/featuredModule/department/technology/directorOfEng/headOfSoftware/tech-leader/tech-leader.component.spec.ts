import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLeaderComponent } from './tech-leader.component';

describe('TechLeaderComponent', () => {
  let component: TechLeaderComponent;
  let fixture: ComponentFixture<TechLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
