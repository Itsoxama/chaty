import { TestBed } from '@angular/core/testing';

import { GroupmsgService } from './groupmsg.service';

describe('GroupmsgService', () => {
  let service: GroupmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
