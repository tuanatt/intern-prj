import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockbitHistoryComponent } from './lockbit-history.component';

describe('LockbitHistoryComponent', () => {
  let component: LockbitHistoryComponent;
  let fixture: ComponentFixture<LockbitHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockbitHistoryComponent]
    });
    fixture = TestBed.createComponent(LockbitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
