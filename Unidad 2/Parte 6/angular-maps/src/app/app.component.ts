import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlMapDirective } from './ol-maps/ol-map.directive';
import { OlMarkerDirective } from './ol-maps/ol-marker.directive';
import { GaAutocompleteDirective } from './ol-maps/ga-autocomplete.directive';
import { SearchResult } from './ol-maps/search-result';

@Component({
  selector: 'app-root',
  imports: [OlMapDirective, OlMarkerDirective, GaAutocompleteDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-maps';
  coordinates: [number, number] = [-0.5, 38.5];

  changePlace(result: SearchResult) {
    this.coordinates = result.coordinates;
    console.log(result.address); // Habría que guardarlo
  }
}
