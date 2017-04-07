import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import {CameraTestPage} from '../pages/camera-test/camera-test';
import {NetworkTestPage} from '../pages/network-test/network-test';
import {NotificationTestPage} from '../pages/notification-test/notification-test';
import {BarcodeTestPage} from '../pages/barcode-test/barcode-test';
import {VibrationTestPage} from '../pages/vibration-test/vibration-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<any>;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.pages = [
      {title: "Home", component: TabsPage},
      {title: "Tabs", component: HomePage},
      {title: "Camera", component: CameraTestPage},
      {title: "Network", component: NetworkTestPage},
      {title: "Notification", component: NotificationTestPage},
      {title: "Barcode", component: BarcodeTestPage},
      {title: "Vibration", component: VibrationTestPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
