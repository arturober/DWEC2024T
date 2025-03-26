import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  ],
})
export class FlashlightPage {
  on = signal(false);

  #destroyRef = inject(DestroyRef);

  constructor() {
    // this.#destroyRef.onDestroy(() => CapacitorFlash.switchOff());
  }

  async toggleFlash() {
    // this.on.set((await CapacitorFlash.toggle()).value);
  }
}
