import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginActivateGuard } from './login-activate.guard';

describe('loginActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
