import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceFormComponent } from './view-attendance-form.component';

describe('ViewAttendanceFormComponent', () => {
  let component: ViewAttendanceFormComponent;
  let fixture: ComponentFixture<ViewAttendanceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAttendanceFormComponent]
    });
    fixture = TestBed.createComponent(ViewAttendanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
