import { Component, inject, signal } from '@angular/core';
import {
  PopoverController,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonButton,
  IonTitle
} from '@ionic/angular/standalone';
import { PopoverColorComponent } from './popover-color/popover-color.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonButton,
    IonTitle
  ],
})
export class PopoverPage {
  color = signal('');

  #popoverCtrl = inject(PopoverController);

  async showPopover(event: Event) {
    const popover = await this.#popoverCtrl.create({
      component: PopoverColorComponent,
      componentProps: {
        title: 'Choose a color',
      },
      event,
    });

    await popover.present();
    const resp = await popover.onDidDismiss();
    console.log(resp);
    this.color.set(resp.data ? resp.data : 'No color selected');
  }
}
