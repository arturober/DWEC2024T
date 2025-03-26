import { Routes } from '@angular/router';

export const productDetailRoutes: Routes = [
  {
    path: 'info',
    loadComponent: () =>
      import('./product-info/product-info.page').then(
        (m) => m.ProductInfoPage
      ),
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./product-comments/product-comments.page').then(
        (m) => m.ProductCommentsPage
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'info', // Por defecto
  },
];
