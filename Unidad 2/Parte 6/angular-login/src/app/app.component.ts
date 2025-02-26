import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FbLoginDirective } from './fb-login/fb-login.directive';
import { GoogleLoginDirective } from './google-login/google-login.directive';

@Component({
  selector: 'app-root',
  imports: [GoogleLoginDirective, FbLoginDirective, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-login';

  fbIcon = faFacebook;

  loggedFacebook(resp: fb.StatusResponse) {
    // Envía esto a tu API
    console.log(resp.authResponse.accessToken);
  }

  loggedGoogle(resp: google.accounts.id.CredentialResponse) {
    // Envia esto tu API
    console.log(resp.credential);
  }

  showError(error: string) {
    console.error(error);
  }
}
