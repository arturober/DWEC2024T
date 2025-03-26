import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dwec.ionic.capacitor',
  appName: 'Ionic Capacitor',
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
