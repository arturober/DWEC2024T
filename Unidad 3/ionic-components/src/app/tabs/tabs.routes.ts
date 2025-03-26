import { Routes } from "@angular/router";

export const tabsRoutes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./contacts/contacts.page').then(m => m.ContactsPage)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
