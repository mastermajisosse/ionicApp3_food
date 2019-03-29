import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }


    // التنقل بين الصفحات
    navigate(page){
      switch(page) {
        case 'HomePage':
        this.navCtrl.push(HomePage);
        break;


      }
    }
}
