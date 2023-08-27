import { TestBed } from '@angular/core/testing';

import { MockSudentDetailsService } from './mock-sudent-details.service';

describe('MockSudentDetailsService', () => {
  let service: MockSudentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSudentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
