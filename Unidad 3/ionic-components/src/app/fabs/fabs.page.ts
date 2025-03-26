import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-fabs',
  templateUrl: './fabs.page.html',
  styleUrls: ['./fabs.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
  ],
})
export class FabsPage {}
