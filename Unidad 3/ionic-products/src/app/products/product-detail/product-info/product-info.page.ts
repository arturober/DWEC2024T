import { Component, inject } from '@angular/core';
import { AlertController, NavController ,IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonLabel, IonItem, IonAvatar } from '@ionic/angular/standalone';
import { ProductsService } from '../../services/products.service';
import { ProductDetailPage } from '../product-detail.page';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
  standalone: true,
  imports: [CurrencyPipe ,IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonLabel, IonItem, IonAvatar],
})
export class ProductInfoPage {
  product = inject(ProductDetailPage).product; // Obtenemos signal de la página padre

  #alertCtrl = inject(AlertController);
  #productsService = inject(ProductsService);
  #nav = inject(NavController);

  async delete() {
    const alert = await this.#alertCtrl.create({
      header: 'Delete product',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.#productsService
              .deleteProduct(this.product()!.id!)
              .subscribe(() => this.#nav.navigateBack(['/products']));
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    alert.present();
  }
}
