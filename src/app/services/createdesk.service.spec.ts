import { TestBed } from '@angular/core/testing';

import { CreatedeskService } from './createdesk.service';

describe('CreatedeskService', () => {
  let service: CreatedeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
