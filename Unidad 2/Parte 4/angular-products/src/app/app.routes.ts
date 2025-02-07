import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { productResolver } from './resolvers/product.resolver';
import { numericIdGuard } from './guards/numeric-id.guard';
import { leavePageGuard } from './guards/leave-page.guard';

export const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsPageComponent,
        title: 'Productos | Angular Products',
      },
      {
        path: 'add',
        component: ProductFormComponent,
        title: 'Nuevo producto | Angular Products',
        canDeactivate: [leavePageGuard]
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: productResolver },
        canActivate: [numericIdGuard],
      },
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/products' },
];
