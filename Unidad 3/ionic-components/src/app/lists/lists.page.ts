import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonList, IonItem, IonIcon, IonLabel, IonListHeader, IonAvatar, IonItemSliding, IonItemOptions, IonItemOption, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonList, IonItem, IonIcon, IonLabel, IonListHeader, IonAvatar, IonItemSliding, IonItemOptions, IonItemOption, IonContent]
})
export class ListsPage{
  itemList = ['Sliding 1', 'Sliding 2', 'Sliding 3'];

  close(slidingItem: IonItemSliding) {
    slidingItem.close();
  }

  showRightOptions(slidingItem: IonItemSliding) {
    slidingItem.open('end');
  }
}
