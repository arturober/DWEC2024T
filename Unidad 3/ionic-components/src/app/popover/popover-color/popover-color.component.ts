import { Component, Input, inject } from '@angular/core';
import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  PopoverController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-popover-color',
  templateUrl: './popover-color.component.html',
  styleUrls: ['./popover-color.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonListHeader, IonItem, IonLabel],
})
export class PopoverColorComponent {
  title = '';

  #popoverCtrl = inject(PopoverController)

  close(color: string) {
    this.#popoverCtrl.dismiss(color);
  }
}
