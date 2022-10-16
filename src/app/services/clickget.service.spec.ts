import { TestBed } from '@angular/core/testing';

import { ClickgetService } from './clickget.service';

describe('ClickgetService', () => {
  let service: ClickgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
