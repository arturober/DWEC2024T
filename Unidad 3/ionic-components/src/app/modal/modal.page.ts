import { Component, inject, signal } from '@angular/core';
import {
  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonMenuButton
  ],
})
export class ModalPage {
  name = '';
  food = signal('');

  #modalCtrl = inject(ModalController);

  async openModal() {
    const modal = await this.#modalCtrl.create({
      component: ModalContentComponent,
      componentProps: { name: this.name },
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data && result.data.food) {
      this.food.set(result.data.food);
    }
  }
}
