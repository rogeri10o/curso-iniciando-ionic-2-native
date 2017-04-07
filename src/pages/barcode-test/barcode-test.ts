import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/*
  Generated class for the BarcodeTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode-test',
  templateUrl: 'barcode-test.html'
})
export class BarcodeTestPage {
  barcodeData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeTestPage');
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.barcodeData = barcodeData;
    }, (err) => {
        // An error occurred
        console.log(err);
    });
  }

}
