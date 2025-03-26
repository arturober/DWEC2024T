import { Component, signal } from '@angular/core';
import { SocialLogin } from '@capgo/capacitor-social-login';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.page.html',
  styleUrls: ['./facebook-login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
  ],
})
export class FacebookLoginPage {
  accessToken = signal('');

  async login() {
    const resp = await SocialLogin.login({
      provider: 'facebook',
      options: {
        permissions: ['email'],
      },
    });
    if (resp.result.accessToken) {
      this.accessToken.set(resp.result.accessToken.token);
    }
  }

  async logout() {
    await SocialLogin.logout({provider: 'facebook'});
    this.accessToken.set('');
  }
}
