import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon, IonFooter, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.page.html',
  styleUrls: ['./toolbars.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon, IonFooter, IonTitle, IonContent]
})
export class ToolbarsPage {

}
