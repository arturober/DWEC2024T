import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastController, NavController, IonRouterLink, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonButton, IonImg, IonGrid, IonRow, IonCol, IonInput, IonLabel } from '@ionic/angular/standalone';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, IonRouterLink, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonButton, IonImg, IonGrid, IonRow, IonCol, IonInput, IonLabel]
})
export class ProductFormPage {
  newProd: Product = {
    description: '',
    price: 0,
    imageUrl: ''
  };

  #productsService = inject(ProductsService);
  #toastCtrl = inject(ToastController);
  #nav = inject(NavController);
  #changeDetector = inject(ChangeDetectorRef);

  addProduct() {
    this.#productsService.addProduct(this.newProd).subscribe({
      next: async prod => {
        const toast = await this.#toastCtrl.create({
          position: 'bottom',
          duration: 3000,
          message: 'Product added succesfully',
          color: 'success'
        });
        toast.present();
        this.#nav.navigateRoot(['/products']);
      },
      error: async error => (await this.#toastCtrl.create({
        position: 'bottom',
        duration: 3000,
        message: 'Error adding product',
        color: 'danger'
      })).present()
    });
  }

  async takePhoto() {;
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl as string;
    this.#changeDetector.markForCheck();
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl as string;
    this.#changeDetector.markForCheck();
  }
}
