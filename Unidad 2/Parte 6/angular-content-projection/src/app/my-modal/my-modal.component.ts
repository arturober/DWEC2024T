import { Component, model } from '@angular/core';

@Component({
  selector: 'my-modal',
  imports: [],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.css'
})
export class MyModalComponent {
  show = model(false);
}
