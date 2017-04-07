import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the CameraTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera-test',
  templateUrl: 'camera-test.html'
})
export class CameraTestPage {

  image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraTestPage');
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT
    }

    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.image = base64Image;
    }, (err) => {
     console.log(err);
    });
  }
}
