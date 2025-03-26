import { HttpInterceptorFn } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';
import { from, switchMap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // from convierte una promesa en observable
  return from(Preferences.get({ key: 'fs-token' })).pipe(
    switchMap((token) => { // switchMap es necesario ya que tiene que devolver otro observable (llamada a next)
      if (!token.value) {
        return next(req); // Enviamos petición sin token
      }

      const authReq = req.clone({
        headers: req.headers.set('Authorization', `bearer ${token.value}`),
      });
      // Enviamos la petición clonada con el token
      return next(authReq);
    })
  );
};
