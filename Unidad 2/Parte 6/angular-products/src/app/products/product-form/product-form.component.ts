import {
  Component,
  DestroyRef,
  inject,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { MinDateDirective } from '../../shared/directives/min-date.directive';
import { ValidationClassesDirective } from '../../shared/directives/validation-classes.directive';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  imports: [
    FormsModule,
    EncodeBase64Directive,
    ValidationClassesDirective,
    MinDateDirective,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanComponentDeactivate {
  newProduct = {
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1,
  };

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  saved = false;

  productForm = viewChild.required<NgForm>('addForm');

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
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
      this.productForm().pristine ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }
}
