import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {
  Observable,
  catchError,
  firstValueFrom,
  from,
  map,
  of,
  switchMap,
} from 'rxjs';
import { User } from '../interfaces/user';
import { TokenResponse, UserResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #logged = signal(false);

  #http = inject(HttpClient);

  get logged() {
    return this.#logged.asReadonly();
  }

  async login(
    email: string,
    password: string,
    firebaseToken?: string // En el futuro se usará para notificaciones Push
  ): Promise<void> {
    // firstValueFrom transforma observable -> Promesa
    const resp = await firstValueFrom(
      this.#http.post<TokenResponse>('auth/login', {
        email,
        password,
        firebaseToken,
      })
    );
    await Preferences.set({ key: 'fs-token', value: resp.accessToken });
    this.#logged.set(true);
  }

  register(user: User): Observable<void> {
    return this.#http.post<void>('auth/register', user);
  }

  async logout(): Promise<void> {
    await Preferences.remove({ key: 'fs-token' });
    this.#logged.set(false);
  }

  async isLogged(): Promise<boolean> {
    if (this.#logged()) {
      return true;
    }

    const token = await Preferences.get({ key: 'fs-token' });
    if (!token.value) {
      // No hay token
      return false;
    }

    try {
      await firstValueFrom(this.#http.get('auth/validate'));
      this.#logged.set(true);
      return true; // Todo correcto
    } catch {
      return false;
    }
  }

  getProfile(): Observable<User> {
    return this.#http
      .get<UserResponse>('auth/profile')
      .pipe(map((r) => r.user));
  }
}
