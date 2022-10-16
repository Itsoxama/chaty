import { TestBed } from '@angular/core/testing';

import { AllowedService } from './allowed.service';

describe('AllowedService', () => {
  let service: AllowedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
