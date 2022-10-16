import { TestBed } from '@angular/core/testing';

import { CallvService } from './callv.service';

describe('CallvService', () => {
  let service: CallvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
