import { InjectionToken, Provider } from '@angular/core';

export const CLIENT_ID = new InjectionToken<string>('client_id');

export function provideGoogleId(clientId: string): Provider {
  return { provide: CLIENT_ID, useValue: clientId };
}
