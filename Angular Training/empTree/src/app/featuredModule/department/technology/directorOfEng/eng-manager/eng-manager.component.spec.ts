import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngManagerComponent } from './eng-manager.component';

describe('EngManagerComponent', () => {
  let component: EngManagerComponent;
  let fixture: ComponentFixture<EngManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
