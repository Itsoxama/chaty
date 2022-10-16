import { TestBed } from '@angular/core/testing';

import { CreategroupmsgService } from './creategroupmsg.service';

describe('CreategroupmsgService', () => {
  let service: CreategroupmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreategroupmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
