import { TestBed } from '@angular/core/testing';

import { HidefromService } from './hidefrom.service';

describe('HidefromService', () => {
  let service: HidefromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidefromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
