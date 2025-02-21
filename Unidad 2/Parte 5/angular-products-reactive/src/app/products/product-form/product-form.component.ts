import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ValidationClassesDirective } from '../../shared/directives/validation-classes.directive';
import { minDateValidator } from '../../shared/validators/min-date.validator';

@Component({
  selector: 'product-form',
  imports: [ReactiveFormsModule, EncodeBase64Directive, JsonPipe, ValidationClassesDirective],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanComponentDeactivate {
  #fb = inject(NonNullableFormBuilder);

  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    available: ['', [Validators.required, minDateValidator('2025-02-15')]],
    imageUrl: ['', [Validators.required]],
  });

  imageBase64 = '';

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  saved = false;

  addProduct() {
    const newProduct: Product = {
      ...this.productForm.getRawValue(),
      imageUrl: this.imageBase64,
      rating: 1,
    };
    this.#productsService
      .insertProduct(newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: () => {
          this.saved = true;
          this.#router.navigate(['/products']);
        },
        error: () => console.log('Error'),
      });
  }

  canDeactivate() {
    return (
      this.saved ||
      this.productForm.pristine ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }
}
