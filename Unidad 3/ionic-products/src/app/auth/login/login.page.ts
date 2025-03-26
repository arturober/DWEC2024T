import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonInput,
  AlertController,
  IonRouterLink,
  NavController,
  Platform
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';
import { PushNotifications, Token } from '@capacitor/push-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonInput,
    FormsModule,
    RouterLink,
    IonRouterLink
  ],
})
export class LoginPage {
  email = '';
  password = '';
  firebaseToken?: string;

  #authService = inject(AuthService);
  #alertCtrl = inject(AlertController);
  #navCtrl = inject(NavController);
  #platform = inject(Platform);

  constructor() {
    if(this.#platform.is('android')) {
      this.initializeFirebase();
    }
  }

  async initializeFirebase() {
    await PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: Token) => {
      this.firebaseToken = token.value;
    });
  }

  async login() {
    try {
      await this.#authService.login(this.email, this.password, this.firebaseToken);
      this.#navCtrl.navigateRoot(['/products'])
    } catch {
      const alertRef = await this.#alertCtrl.create({
        header: 'Login error',
        message: 'Incorrect email and/or password',
        buttons: ['Ok'],
      });
      alertRef.present();
    }
  }
}
