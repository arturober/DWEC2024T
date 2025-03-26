import { Component, inject } from '@angular/core';
import { ToastController, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton, IonTitle]
})
export class ToastPage {

  #toastCtrl = inject(ToastController)

  async showToast() {
    const toast = await this.#toastCtrl.create({
      message: 'I\'m a toast message',
      duration: 5000, // 5 seconds
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          // text: ' Close',
          icon: 'close-circle',
          role: 'cancel'
          // handler:  () => {
          //   toast.dismiss();
          // }
        }
      ]
    });
    await toast.present();
  }
}
