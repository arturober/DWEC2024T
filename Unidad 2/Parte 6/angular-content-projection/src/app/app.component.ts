import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCardComponent } from './my-card/my-card.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-root',
  imports: [MyCardComponent, LoadButtonComponent, MyModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Content Projection';
  loading = false;
  showModal = false;
  showModal2 = false;
}
