import { TestBed } from '@angular/core/testing';

import { LoadGoogleApiService } from './load-google-api.service';

describe('LoadGoogleApiService', () => {
  let service: LoadGoogleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadGoogleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
