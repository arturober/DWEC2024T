import { Injectable, inject } from '@angular/core';
import { FB_CONFIG } from './fb-login.config';

@Injectable({
  providedIn: 'root',
})
export class LoadFbApiService {
  #loader: Promise<void>;

  #fbConfig = inject(FB_CONFIG, { optional: true });

  constructor() {
    if (!this.#fbConfig) {
      throw new Error(
        'FacebookLogiService: You must call provideFacebookId in app.config.ts to pass the APP_ID and API Version'
      );
    }
    this.#loader = this.#loadApi(); // Start loading the API
  }

  async login(scopes: string): Promise<fb.StatusResponse> {
    await this.#loader;

    try {
      return await this.isLogged();
    } catch {
      // Not logged in
      return new Promise((resolve, reject) => {
        FB.login(
          (respLogin: fb.StatusResponse) => {
            if (respLogin.status === 'connected') {
              resolve(respLogin);
            } else {
              reject(respLogin);
            }
          },
          { scope: scopes }
        );
      });
    }
  }

  async isLogged(): Promise<fb.StatusResponse> {
    await this.#loader;

    return new Promise((resolve, reject) => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve(response);
        } else {
          reject(response);
        }
      });
    });
  }

  async logout(): Promise<void> {
    await this.#loader;

    return new Promise((resolve) => {
      FB.logout(() => resolve());
    });
  }

  #loadApi(): Promise<void> {
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/es_ES/sdk.js';
    script.defer = true;
    document.body.appendChild(script);

    return new Promise((resolve) => {
      window['fbAsyncInit'] = () => {
        FB.init({
          appId: this.#fbConfig!.app_id,
          xfbml: true,
          autoLogAppEvents: true,
          version: this.#fbConfig!.version,
        });
        resolve();
      };
    });
  }
}
