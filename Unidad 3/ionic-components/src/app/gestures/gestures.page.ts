import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonTitle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonItem,
    IonLabel,
    IonTitle
  ],
})
export class GesturesPage {
  events = {
    taps: 0,
    press: 0,
    swipeRight: 0,
    swipeLeft: 0,
    pinch: 0,
    rotate: 0
  };

  tap() {
    this.events.taps++;
  }

  press() {
    this.events.press++;
  }

  swipeLeft() {
    this.events.swipeLeft++;
  }

  swipeRight() {
    this.events.swipeRight++;
  }

  pinch() {
    this.events.pinch++;
  }

  rotate() {
    this.events.rotate++;
  }
}
