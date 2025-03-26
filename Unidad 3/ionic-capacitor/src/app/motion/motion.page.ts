import { DecimalPipe } from '@angular/common';
import { Component, DestroyRef, NgZone, OnDestroy, inject, signal } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    DecimalPipe,
  ],
})
export class MotionPage {
  acceleration = signal({ x: 0, y: 0, z: 0 });
  orientation = signal({ alpha: 0, beta: 0, gamma: 0 });
  started = false;

  #ngZone = inject(NgZone);
  #destroyRef = inject(DestroyRef);

  constructor() {
    this.#destroyRef.onDestroy(() => Motion.removeAllListeners());
  }

  async startMotion() {
    await Motion.addListener('accel', (event) =>
      this.#ngZone.run(() => (this.acceleration.set(event.acceleration)))
    );
    await Motion.addListener('orientation', (event) =>
      this.#ngZone.run(() => (this.orientation.set(event)))
    );

    this.started = true;
  }
}
