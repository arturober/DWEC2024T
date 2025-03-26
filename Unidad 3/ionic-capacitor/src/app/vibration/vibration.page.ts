import { Component } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
  ],
})
export class VibrationPage {
  vibrate() {
    Haptics.vibrate();
  }

  vibrateHard() {
    Haptics.impact({ style: ImpactStyle.Heavy });
  }

  vibrateLong() {
    Haptics.vibrate({ duration: 1000 });
  }
}
