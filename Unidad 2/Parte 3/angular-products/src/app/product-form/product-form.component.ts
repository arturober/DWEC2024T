import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
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

  #changeDetector = inject(ChangeDetectorRef);

  add = output<Product>();

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck();
    });
  }

  addProduct(form: NgForm) {
    this.add.emit({...this.newProduct});
    form.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }
}
