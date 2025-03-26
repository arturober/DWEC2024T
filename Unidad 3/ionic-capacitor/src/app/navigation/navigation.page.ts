import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { GaAutocompleteDirective } from '../ol-maps/ga-autocomplete.directive';
import { OlMapDirective } from '../ol-maps/ol-map.directive';
import { OlMarkerDirective } from '../ol-maps/ol-marker.directive';
import { SearchResult } from '../ol-maps/search-result';
import { LaunchNavigator } from '@awesome-cordova-plugins/launch-navigator';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonFab,
    IonFabButton,
    FormsModule,
    OlMapDirective,
    OlMarkerDirective,
    GaAutocompleteDirective
  ],
})
export class NavigationPage {
  coords = signal<[number, number]>([-0.5, 38.5]);

  validInputId = false;

  constructor() {
    this.getPosition();
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords.set([coordinates.coords.longitude, coordinates.coords.latitude])
  }

  startNavigation() {
    LaunchNavigator.navigate(this.coords().reverse());
  }

  changePlace(result: SearchResult) {
    this.coords.set(result.coordinates);
  }
}
