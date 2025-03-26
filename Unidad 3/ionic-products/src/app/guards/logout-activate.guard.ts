import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const logoutActivateGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const logged = await inject(AuthService).isLogged();
  return !logged || router.createUrlTree(['/products']);
};
