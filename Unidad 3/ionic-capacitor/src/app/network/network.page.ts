import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  ],
})
export class NetworkPage {
  type = signal('none');
  connected = signal(false);

  #destroyRef = inject(DestroyRef);

  constructor() {
    this.initConnection();
    this.#destroyRef.onDestroy(() => Network.removeAllListeners());
  }

  async initConnection() {
    this.setConnection(await Network.getStatus());

    await Network.addListener('networkStatusChange', (status) =>
      this.setConnection(status)
    );
  }

  setConnection(status: ConnectionStatus) {
    this.connected.set(status.connected);
    this.type.set(status.connectionType);
  }
}
