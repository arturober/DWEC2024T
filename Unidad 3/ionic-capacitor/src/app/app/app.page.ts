import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonList,
  IonIcon,
} from '@ionic/angular/standalone';
import { App, AppInfo } from '@capacitor/app';
import { Dialog } from '@capacitor/dialog';
import { PluginListenerHandle } from '@capacitor/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  ],
})
export class AppPage {
  backHandler!: PluginListenerHandle;
  appInfo = signal<AppInfo | null>(null);

  #destroRef = inject(DestroyRef);

  constructor() {
    this.getInfo();

    this.#destroRef.onDestroy(() => this.backHandler.remove());
  }

  async getInfo() {
    this.appInfo.set(await App.getInfo());

    this.backHandler = await App.addListener('backButton', async (event) => {
      const resp = await Dialog.confirm({
        title: 'Close app',
        message: 'Do you really want to exit?',
        okButtonTitle: 'Yes, please',
        cancelButtonTitle: 'Never',
      });

      if (resp.value) {
        App.exitApp();
      }
    });
  }
}
