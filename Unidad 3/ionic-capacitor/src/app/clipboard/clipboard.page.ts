import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@capacitor/clipboard';
import {
  ToastController,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput
  ],
})
export class ClipboardPage {
  text = signal('');

  #toastCtrl = inject(ToastController);

  async copy() {
    await Clipboard.write({
      string: this.text(),
    });

    const toast = await this.#toastCtrl.create({
      message: 'Text copied',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

  async paste() {
    const result = await Clipboard.read();
    this.text.set(result.value);
  }
}
