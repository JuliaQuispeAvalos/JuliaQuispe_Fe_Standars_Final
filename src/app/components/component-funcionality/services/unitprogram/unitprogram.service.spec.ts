import { TestBed } from '@angular/core/testing';

import { UnitprogramService } from './unitprogram.service';

describe('UnitprogramService', () => {
  let service: UnitprogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitprogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
