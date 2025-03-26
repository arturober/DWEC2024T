import { Component, inject, signal } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSpinner,
  IonLabel,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonSpinner,
    IonLabel,
    IonButtons,
    IonMenuButton
  ],
})
export class LoadingPage {
  loading!: HTMLIonLoadingElement;
  data = signal('');

  #loadingCtrl = inject(LoadingController);

  async ionViewWillEnter() {
    this.loading = await this.#loadingCtrl.create({
      message: 'Loading data',
      spinner: 'bubbles',
      cssClass: 'primary',
    });
    await this.loading.present(); // Show the loading element

    // Simulate a server call
    setTimeout(() => {
      this.data.set('Data loaded');
      this.loading.dismiss(); // Close the loading element
    }, 2000);
  }
}
