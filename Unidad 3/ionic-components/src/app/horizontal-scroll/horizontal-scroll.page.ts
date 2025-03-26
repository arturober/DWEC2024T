import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.page.html',
  styleUrls: ['./horizontal-scroll.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonIcon]
})
export class HorizontalScrollPage {
  icons: string[] = [
    'alert', 'albums', 'alarm', 'analytics', 'logo-angular', 'logo-android',
    'logo-apple', 'logo-nodejs', 'archive', 'at', 'baseball', 'basket',
    'battery-charging', 'beer', 'bicycle', 'logo-bitcoin', 'boat', 'logo-tux', 'logo-steam'
  ];
}
