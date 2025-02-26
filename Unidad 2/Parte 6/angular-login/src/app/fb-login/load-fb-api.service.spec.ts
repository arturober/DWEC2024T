import { TestBed } from '@angular/core/testing';

import { LoadFbApiService } from './load-fb-api.service';

describe('LoadFbApiService', () => {
  let service: LoadFbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
