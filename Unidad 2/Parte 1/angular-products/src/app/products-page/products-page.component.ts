import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'products-page',
  imports: [FormsModule, JsonPipe],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: '/motherboard.jpg',
    rating: 4
  },{
    id: 3,
    description: '16GB RAM',
    available: '2024-12-15',
    price: 56.5,
    imageUrl: '/ram.jpg',
    rating: 3
  }];

  showImage = true;

  newProduct = {
    id: 4,
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1
  };

  toggleImage() {
    this.showImage = !this.showImage;
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct(form: NgForm) {
    this.products.push(this.newProduct);
    form.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }
}
