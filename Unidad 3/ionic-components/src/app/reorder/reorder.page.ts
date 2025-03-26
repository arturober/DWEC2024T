import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonReorderGroup,
  IonReorder,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { IonReorderGroupCustomEvent, ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonReorderGroup,
    IonReorder,
    IonItem,
    IonLabel
  ],
})
export class ReorderPage {
  foods: string[] = ['Pizza', 'Banana', 'Hamburguer', 'Soup', 'Steak', 'Apple'];
  disableOrdering = true;

  reorder(event: IonReorderGroupCustomEvent<ItemReorderEventDetail>) {
    this.foods = event.detail.complete(this.foods);
    console.log(this.foods);
  }

  toggleReordering() {
    this.disableOrdering = !this.disableOrdering;
  }
}
