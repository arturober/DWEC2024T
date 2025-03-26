import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/buttons',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'forms',
    loadComponent: () => import('./forms/forms.page').then( m => m.FormsPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'badges',
    loadComponent: () => import('./badges/badges.page').then( m => m.BadgesPage)
  },
  {
    path: 'fabs',
    loadComponent: () => import('./fabs/fabs.page').then( m => m.FabsPage)
  },
  {
    path: 'toolbars',
    loadComponent: () => import('./toolbars/toolbars.page').then( m => m.ToolbarsPage)
  },
  {
    path: 'horizontal-scroll',
    loadComponent: () => import('./horizontal-scroll/horizontal-scroll.page').then( m => m.HorizontalScrollPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'refresher',
    loadComponent: () => import('./refresher/refresher.page').then( m => m.RefresherPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'reorder',
    loadComponent: () => import('./reorder/reorder.page').then( m => m.ReorderPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'virtual-scroll',
    loadComponent: () => import('./virtual-scroll/virtual-scroll.page').then( m => m.VirtualScrollPage)
  },
  {
    path: 'gestures',
    loadComponent: () => import('./gestures/gestures.page').then( m => m.GesturesPage)
  },
  {
    path: 'skeleton',
    loadComponent: () => import('./skeleton/skeleton.page').then( m => m.SkeletonPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    // Child pages inside the tabs page
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.tabsRoutes)
  },
];
