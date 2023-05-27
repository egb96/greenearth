import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.greenearth',
  appName: 'greenearth',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
