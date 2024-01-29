import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendacenPdfComponent } from './view-attendacen-pdf.component';

describe('ViewAttendacenPdfComponent', () => {
  let component: ViewAttendacenPdfComponent;
  let fixture: ComponentFixture<ViewAttendacenPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAttendacenPdfComponent]
    });
    fixture = TestBed.createComponent(ViewAttendacenPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
