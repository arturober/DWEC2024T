import { Component, Input, OnInit, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonListHeader,
  IonRadioGroup,
  IonLabel,
  IonItem,
  IonRadio,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonListHeader,
    IonRadioGroup,
    IonLabel,
    IonItem,
    IonRadio
  ],
})
export class ModalContentComponent {
  name = '';
  food = 'pizza';

  #modalCtrl = inject(ModalController);

  chooseFood() {
    this.#modalCtrl.dismiss({ food: this.food });
  }

  close() {
    this.#modalCtrl.dismiss();
  }
}
