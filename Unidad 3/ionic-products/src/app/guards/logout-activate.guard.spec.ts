import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logoutActivateGuard } from './logout-activate.guard';

describe('logoutActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logoutActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
