import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TypeRoomPage } from '../type-room/type-room';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push("LoginPage");
  }
  Typeroom(){
    this.navCtrl.push(TypeRoomPage);
  }
}
