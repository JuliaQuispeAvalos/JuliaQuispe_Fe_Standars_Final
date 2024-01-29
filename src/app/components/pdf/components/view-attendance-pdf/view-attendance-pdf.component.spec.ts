import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendancePdfComponent } from './view-attendance-pdf.component';

describe('ViewAttendancePdfComponent', () => {
  let component: ViewAttendancePdfComponent;
  let fixture: ComponentFixture<ViewAttendancePdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAttendancePdfComponent]
    });
    fixture = TestBed.createComponent(ViewAttendancePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
