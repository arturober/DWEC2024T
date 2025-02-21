import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneCheckedDirective } from './shared/directives/one-checked.directive';
import { SameValueDirective } from './shared/directives/same-value.directive';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe, OneCheckedDirective, SameValueDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  daysOpen = new Array(7).fill(true);
  email = signal('');
}
