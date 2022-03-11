import { TestBed } from '@angular/core/testing';

import { RegAPIService } from './reg-api.service';

describe('RegAPIService', () => {
  let service: RegAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
