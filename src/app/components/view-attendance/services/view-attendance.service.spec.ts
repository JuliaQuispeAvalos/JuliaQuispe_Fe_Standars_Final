import { TestBed } from '@angular/core/testing';

import { ViewAttendanceService } from './view-attendance.service';

describe('ViewAttendanceService', () => {
  let service: ViewAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
