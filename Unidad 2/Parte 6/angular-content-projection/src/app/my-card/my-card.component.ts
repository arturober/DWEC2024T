import { Component, input } from '@angular/core';

@Component({
  selector: 'my-card',
  imports: [],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {
  bgClass = input('bg-transparent');
  textClass = input('text-dark');
}
