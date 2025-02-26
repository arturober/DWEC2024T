import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconComponent, FaLayersComponent, FaLayersCounterComponent } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faSpinner,
  faSquare,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  imports: [FaIconComponent, FaLayersComponent, FaLayersCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  icons = { faCoffee, faStarSolid, faStarRegular, faSquare, faSpinner, faEnvelope };
}
