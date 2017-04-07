import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/*
  Generated class for the VibrationTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vibration-test',
  templateUrl: 'vibration-test.html'
})
export class VibrationTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public vibration: Vibration) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationTestPage');
  }

  vibrate() {
    this.vibration.vibrate([2000,1000,2000]);
  }
}
