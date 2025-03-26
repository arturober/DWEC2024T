import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonList,
  ],
})
export class PreferencesPage {
  name = signal('');

  #toastCtrl = inject(ToastController);

  constructor() {
    this.getName();
  }

  async getName() {
    const { value } = await Preferences.get({ key: 'name' });
    if (value) {
      this.name.set(value);
    }
  }

  async save() {
    await Preferences.set({ key: 'name', value: this.name() });

    const toast = await this.#toastCtrl.create({
      message: 'Name saved!',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }
}
