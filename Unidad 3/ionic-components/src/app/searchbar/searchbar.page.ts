import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonSearchbar
  ],
})
export class SearchbarPage {
  items = [
    'Banana',
    'Apple',
    'Pineapple',
    'Orange',
    'Melon',
    'Watermelon',
    'Peach',
    'Strawberry',
    'Gooseberry',
    'Blackberry',
    'Blueberry',
  ];
  filteredItems = this.items;
  search = '';

  filterItems() {
    if (this.search && this.search.trim() !== '') {
      this.search = this.search.trim().toLowerCase();
      this.filteredItems = this.items.filter((i) =>
        i.toLowerCase().includes(this.search)
      );
    } else {
      this.filteredItems = this.items;
    }
  }
}
