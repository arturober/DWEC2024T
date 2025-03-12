import { Routes } from '@angular/router';
import { leavePageGuard } from '../shared/guards/leave-page.guard';
import { numericIdGuard } from '../shared/guards/numeric-id.guard';
import { productResolver } from './resolvers/product.resolver';

export const productsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
    title: 'Productos | Angular Products',
    data: { animation: 'productsPage' },
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
    title: 'Nuevo producto | Angular Products',
    canDeactivate: [leavePageGuard],
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
    resolve: { product: productResolver },
    canActivate: [numericIdGuard],
    data: { animation: 'productDetail' },
  },
];
