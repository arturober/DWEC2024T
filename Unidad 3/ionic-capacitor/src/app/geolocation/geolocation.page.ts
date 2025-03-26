import { Component, OnInit, signal } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { OlMapDirective } from '../ol-maps/ol-map.directive';
import { OlMarkerDirective } from '../ol-maps/ol-marker.directive';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    OlMapDirective,
    OlMarkerDirective
  ],
})
export class GeolocationPage{
  coords = signal<[number, number]>([-0.5, 38.5]);

  constructor() {
    this.getLocation();
  }

  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });

    this.coords.set([coordinates.coords.longitude, coordinates.coords.latitude])
  }
}
