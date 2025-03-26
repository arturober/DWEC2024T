import { Component } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonTitle, IonMenuButton, IonToolbar, IonIcon, IonContent, IonButtons]
})
export class ButtonsPage {
}
