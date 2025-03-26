import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'vibration',
    pathMatch: 'full',
  },
  {
    path: 'vibration',
    loadComponent: () => import('./vibration/vibration.page').then( m => m.VibrationPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'clipboard',
    loadComponent: () => import('./clipboard/clipboard.page').then( m => m.ClipboardPage)
  },
  {
    path: 'device',
    loadComponent: () => import('./device/device.page').then( m => m.DevicePage)
  },
  {
    path: 'filesystem',
    loadComponent: () => import('./filesystem/filesystem.page').then( m => m.FilesystemPage)
  },
  {
    path: 'geolocation',
    loadComponent: () => import('./geolocation/geolocation.page').then( m => m.GeolocationPage)
  },
  {
    path: 'local-notifications',
    loadComponent: () => import('./local-notifications/local-notifications.page').then( m => m.LocalNotificationsPage)
  },
  {
    path: 'dialogs',
    loadComponent: () => import('./dialogs/dialogs.page').then( m => m.DialogsPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'motion',
    loadComponent: () => import('./motion/motion.page').then( m => m.MotionPage)
  },
  {
    path: 'network',
    loadComponent: () => import('./network/network.page').then( m => m.NetworkPage)
  },
  {
    path: 'share',
    loadComponent: () => import('./share/share.page').then( m => m.SharePage)
  },
  {
    path: 'preferences',
    loadComponent: () => import('./preferences/preferences.page').then( m => m.PreferencesPage)
  },
  {
    path: 'app',
    loadComponent: () => import('./app/app.page').then( m => m.AppPage)
  },
  {
    path: 'navigation',
    loadComponent: () => import('./navigation/navigation.page').then( m => m.NavigationPage)
  },
  {
    path: 'google-login',
    loadComponent: () => import('./google-login/google-login.page').then( m => m.GoogleLoginPage)
  },
  {
    path: 'facebook-login',
    loadComponent: () => import('./facebook-login/facebook-login.page').then( m => m.FacebookLoginPage)
  },
  {
    path: 'barcode-scanner',
    loadComponent: () => import('./barcode-scanner/barcode-scanner.page').then( m => m.BarcodeScannerPage)
  },
  {
    path: 'sqlite',
    loadComponent: () => import('./sqlite/sqlite.page').then( m => m.SqlitePage)
  },
  {
    path: 'flashlight',
    loadComponent: () => import('./flashlight/flashlight.page').then( m => m.FlashlightPage)
  },
];
