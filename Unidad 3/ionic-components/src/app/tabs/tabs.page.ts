import { Component } from '@angular/core';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  IonBadge,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, IonBadge],
})
export class TabsPage {}
