import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  NavController,
  ActionSheetController,
  IonRefresher,
  IonRefresherContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton,
  IonRouterLink
} from '@ionic/angular/standalone';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    FormsModule,
    IonRefresherContent,
    IonRefresher,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    CurrencyPipe,
    RouterLink,
    IonRouterLink,
  ],
})
export class HomePage {
  products = signal<Product[]>([]);

  #productsService = inject(ProductsService);
  #navController = inject(NavController);
  #actionSheetCtrl = inject(ActionSheetController);

  ionViewWillEnter() {
    this.reloadProducts();
  }

  reloadProducts(refresher?: IonRefresher) {
    this.#productsService.getProducts().subscribe((prods) => {
      this.products.set(prods);
      refresher?.complete();
    });
  }

  async showOptions(prod: Product) {
    const actSheet = await this.#actionSheetCtrl.create({
      header: prod.description,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.#productsService
              .deleteProduct(prod.id!)
              .subscribe(() =>
                this.products.update((prods) => prods.filter((p) => p !== prod))
              );
          },
        },
        {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.#navController.navigateForward(['/products', prod.id]);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    actSheet.present();
  }
}
