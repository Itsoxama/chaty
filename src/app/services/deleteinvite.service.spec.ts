import { TestBed } from '@angular/core/testing';

import { DeleteinviteService } from './deleteinvite.service';

describe('DeleteinviteService', () => {
  let service: DeleteinviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteinviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
