import { TestBed } from '@angular/core/testing';

import { UpdatemsgService } from './updatemsg.service';

describe('UpdatemsgService', () => {
  let service: UpdatemsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatemsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
