import { DormPage } from './../dorm/dorm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TypedetailPage } from '../apartment/typedetail';
import { CondominiumPage } from '../condominium/condominium';
import { MansionPage } from '../mansion/mansion';


/**
 * Generated class for the TypeRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-room',
  templateUrl: 'type-room.html',
})
export class TypeRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeRoomPage');
  }

  gotoapart(){
    this.navCtrl.push(TypedetailPage);

  }
  gotocondominuim(){
    this.navCtrl.push(CondominiumPage);
  }
  gotomansion(){
    this.navCtrl.push(MansionPage);
  }
  gotodorm(){
    this.navCtrl.push(DormPage);
  }
}
