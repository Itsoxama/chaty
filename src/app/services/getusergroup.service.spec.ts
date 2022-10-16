import { TestBed } from '@angular/core/testing';

import { GetusergroupService } from './getusergroup.service';

describe('GetusergroupService', () => {
  let service: GetusergroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetusergroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
