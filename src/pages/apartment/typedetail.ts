import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';

/**
 * Generated class for the TypedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typedetail',
  templateUrl: 'typedetail.html',
})
export class TypedetailPage {

  rentedroom: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public apart:LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypedetailPage');
  }
  loaddata(){
    this.apart.getapart().subscribe(rooms =>{
      this.rentedroom=rooms;
    });  
  }

}
