import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';

/*
  Generated class for the NetworkTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network-test',
  templateUrl: 'network-test.html'
})
export class NetworkTestPage {
  connectionType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public network: Network) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkTestPage');
  }

  check() {
    this.connectionType = this.network.type;
  }
}
