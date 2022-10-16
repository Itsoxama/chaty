import { TestBed } from '@angular/core/testing';

import { DeletemsgService } from './deletemsg.service';

describe('DeletemsgService', () => {
  let service: DeletemsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletemsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
