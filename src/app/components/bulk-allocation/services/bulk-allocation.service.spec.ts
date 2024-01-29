import { TestBed } from '@angular/core/testing';

import { BulkAllocationService } from './bulk-allocation.service';

describe('BulkAllocationService', () => {
  let service: BulkAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
