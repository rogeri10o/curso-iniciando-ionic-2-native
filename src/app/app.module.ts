import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {CameraTestPage} from '../pages/camera-test/camera-test';
import {NetworkTestPage} from '../pages/network-test/network-test';
import {NotificationTestPage} from '../pages/notification-test/notification-test';
import {BarcodeTestPage} from '../pages/barcode-test/barcode-test';
import {VibrationTestPage} from '../pages/vibration-test/vibration-test';
import { Vibration } from '@ionic-native/vibration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraTestPage,
    NetworkTestPage,
    NotificationTestPage,
    BarcodeTestPage,
    VibrationTestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraTestPage,
    NetworkTestPage,
    NotificationTestPage,
    BarcodeTestPage,
    VibrationTestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Network,
    LocalNotifications,
    BarcodeScanner,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
