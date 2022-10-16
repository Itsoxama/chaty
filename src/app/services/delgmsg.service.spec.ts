import { TestBed } from '@angular/core/testing';

import { DelgmsgService } from './delgmsg.service';

describe('DelgmsgService', () => {
  let service: DelgmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelgmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
