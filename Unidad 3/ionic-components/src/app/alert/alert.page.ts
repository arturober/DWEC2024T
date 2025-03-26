import { Component, inject, signal } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonContent,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonContent,
    IonTitle,
  ],
})
export class AlertPage {
  resp = signal('');
  foods = signal('');
  email = signal('');
  pass = signal('');

  #alertController = inject(AlertController);

  async showAlert() {
    const alert = await this.#alertController.create({
      header: 'Hello alert',
      subHeader: 'This is a simple alert',
      message: 'See the official documentation for more examples',
      buttons: [
        {
          text: 'Ok',
          handler: () => ({ ok: true }),
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    // resp.data === undefined -> Cancelled
    // resp.role === 'cancel' -> Cancelled
    this.resp.set(resp.data && resp.data.ok ? 'You said Ok!' : 'You cancelled...');
  }

  async showAlert2() {
    const alert = await this.#alertController.create({
      header: 'Select an option',
      inputs: [
        {
          name: 'pizza',
          type: 'checkbox',
          value: 'pizza',
          label: 'Pizza',
        },
        {
          name: 'hamburguer',
          type: 'checkbox',
          value: 'hamburguer',
          label: 'Hamburguer',
        },
        {
          name: 'spaghetti',
          type: 'checkbox',
          value: 'spaghetti',
          label: 'Spaghetti',
        },
        {
          name: 'chicken',
          type: 'checkbox',
          value: 'chicken',
          label: 'Chicken',
        },
      ],
      buttons: ['Ok', 'Cancel'],
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    if (resp.data && resp.role !== 'cancel') {
      // There's a response!
      console.log(resp.data.values);
      this.foods.set(resp.data.values.toString());
    }
  }

  async showAlert3() {
    const alert = await this.#alertController.create({
      header: 'Login',
      subHeader: 'Enter email and password',
      inputs: [
        {
          type: 'email',
          name: 'email',
          placeholder: 'Email',
        },
        {
          type: 'password',
          name: 'pass',
          placeholder: 'Password',
        },
      ],
      buttons: ['Login', 'Cancel'],
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    if (result.data && result.role !== 'cancel') {
      console.log(result.data);
      this.email.set(result.data.values.email);
      this.pass.set(result.data.values.pass);
    }
  }
}
