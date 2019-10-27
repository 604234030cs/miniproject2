import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repassword:string;
  loginResult;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {  
    console.log('ionViewDidLoad RegisterPage');
  }
  register(_username){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
    alert('Hello'+ _username);
    if(this.username.length==0 || this.password.length==0 || this.password.length==0) {
      this.loginResult = 'Pass';
      this.navCtrl.push("LoginPage");
    } else {
      this.loginResult = 'Fall';
    }
    }
    logins(){
      this.navCtrl.push("LoginPage");
    }
    home(){
      this.navCtrl.push(HomePage);
    }
  }


