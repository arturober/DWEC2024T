import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GoogleLoginResponse, SocialLogin } from '@capgo/capacitor-social-login';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { GoogleUser } from './google-user';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonList,
    IonIcon,
    IonAvatar,
    IonImg,
  ],
})
export class GoogleLoginPage {
  user = signal<GoogleUser | null>(null);

  async login() {
    try {
      const resp = await SocialLogin.login({
        provider: 'google',
        options: {
          scopes: ['email', 'profile'],
        },
      });
      if(resp.result.responseType === 'online') {
        this.user.set(resp.result.profile);
        console.log(resp.result.idToken);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
