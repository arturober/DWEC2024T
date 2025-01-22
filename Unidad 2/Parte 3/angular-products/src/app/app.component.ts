import { Component } from '@angular/core';
import { ProductsPageComponent } from './products-page/products-page.component';

@Component({
  selector: 'app-root',
  imports: [ProductsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Products';
}
