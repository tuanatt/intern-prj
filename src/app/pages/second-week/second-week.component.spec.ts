import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekComponent } from './second-week.component';

describe('SecondWeekComponent', () => {
  let component: SecondWeekComponent;
  let fixture: ComponentFixture<SecondWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondWeekComponent]
    });
    fixture = TestBed.createComponent(SecondWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
