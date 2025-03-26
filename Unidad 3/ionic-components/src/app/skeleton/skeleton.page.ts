import { Component, OnInit, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonSkeletonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonAvatar,
    IonSkeletonText,
  ],
})
export class SkeletonPage implements OnInit {
  data = signal(false);

  ngOnInit() {
    setTimeout(() => (this.data.set(true)), 3000);
  }
}
