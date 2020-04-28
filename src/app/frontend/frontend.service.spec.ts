import { TestBed } from '@angular/core/testing';

import { FrontendService } from './frontend.service';

describe('FrontendService', () => {
  let service: FrontendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
