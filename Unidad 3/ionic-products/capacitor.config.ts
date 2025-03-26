import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dewc.ionic.products',
  appName: 'Ionic Products',
  webDir: 'www/browser',
  android: {
    allowMixedContent: true
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#0054e9",
    },
  },
};

export default config;
