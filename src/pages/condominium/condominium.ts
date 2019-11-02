import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CondominiumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-condominium',
  templateUrl: 'condominium.html',
})
export class CondominiumPage {

  rentedroom: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public condo:LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CondominiumPage');
  }
  loaddata(){
    this.condo.getcondo().subscribe(condos=>{
      this.rentedroom=condos;
    });
  }

}
