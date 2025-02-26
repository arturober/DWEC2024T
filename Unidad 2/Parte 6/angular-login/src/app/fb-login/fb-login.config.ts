import { InjectionToken, Provider } from '@angular/core';

export interface FBConfig {
  app_id: string;
  version: string;
}

export const FB_CONFIG = new InjectionToken<FBConfig>('fb_config');

export function provideFacebookId(appId: string, version: string): Provider {
  return { provide: FB_CONFIG, useValue: {app_id: appId, version: version} };
}
