import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MansionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mansion',
  templateUrl: 'mansion.html',
})
export class MansionPage {

  public isSearchbarOpened = false;

  rentedroom: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public mansion: LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MansionPage');
  }
  loaddata(){
    this.mansion.getmansion().subscribe(mansions =>{
      this.rentedroom=mansions;
    });
  }
  // getitem(ev:  any){
  //   let val = ev.target.value;
  //   if(val != 0){
  //     this.mansion.searchMovie(val).subscribe(mansions=>{
  //       this.rentedroom=mansions;
  //     });
  //   }else{
  //     this.loaddata()
  //   }
  // }
  onsearch(event){
     console.log(event.target.value);
  }
  
}
