import { TestBed } from '@angular/core/testing';

import { UpdmsgService } from './updmsg.service';

describe('UpdmsgService', () => {
  let service: UpdmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
