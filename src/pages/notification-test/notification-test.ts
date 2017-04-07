import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/*
  Generated class for the NotificationTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification-test',
  templateUrl: 'notification-test.html'
})
export class NotificationTestPage {
  notification: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localNotifications: LocalNotifications) {
    localNotifications.on('click', (notification, state) => {
      this.notification = notification;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationTestPage');
  }

  send() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Notificação de Teste',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: "Olá" }
    });
  }

}
