import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  newProduct = {
    id: 4,
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1,
  };

  add = output<Product>();

  addProduct(form: NgForm) {
    this.add.emit({...this.newProduct});
    form.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }
}
