import { Directive, inject, input, output, PLATFORM_ID } from "@angular/core";
import { LoadFbApiService } from "./load-fb-api.service";
import { isPlatformBrowser } from "@angular/common";

@Directive({
  selector: '[fbLogin]',
  standalone: true,
  host: {
    '(click)': 'onClick()'
  }
})
export class FbLoginDirective {
  loginOk = output<fb.StatusResponse>();
  loginError = output<string>();
  scopes = input.required<string[]>();

  platformId = inject(PLATFORM_ID);
  #loadService =  isPlatformBrowser(this.platformId) ? inject(LoadFbApiService) : null;

  async onClick(): Promise<void> {
    try {
      const resp = await this.#loadService!.login(this.scopes().join(','));
      this.loginOk.emit(resp);
    } catch {
      this.loginError.emit('Error with Facebook login!');
    }
  }
}
