import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonSegment, IonSegmentButton, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonSegment, IonSegmentButton, IonContent, IonList, IonItem]
})
export class SegmentPage {
  type = 'heroes';
  heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Hulk', 'Mazinger Z'];
  villains: string[] = ['Dr Eggman', 'The Joker', 'Darth Vader', 'Hannibal Lecter'];
  weapons: string[] = ['Missile', 'Laser gun', 'Tank', 'X Rays'];

  typeChanged() {
    console.log(`New type selected: ${this.type}`);
  }
}
