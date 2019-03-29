import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the FirstpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstp',
  templateUrl: 'firstp.html',
})
export class FirstpPage {

  items: any;
  showsegment : any;
  active1 : boolean = false;
  active2 : boolean = false;
  active3 : boolean = false;
  overlayHidden: boolean = true;
  showselectedfood: any = {};

  Food_data: any = [];
  user_data: any = [];
  FoodOption_data: any = [];
  today = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams , public rest:RestApiProvider
              ,private alertCtrl: AlertController) {
    this.showsegment = "food";
    this.getFood();
  }

  checkworkinghour(){
    let close = this.user_data["close"];let open = this.user_data["open"];
    console.log(""+this.user_data["close"]+"__open"+parseInt(open, 10));
    console.log("hour"+this.today.getHours());
    
    
    if ( ( this.today.getHours() >= parseInt(open, 10) ) && (this.today.getHours() <= parseInt(close, 10)) ) {
      if (this.user_data["offDays"] === "satrday,sunday") {
          if(this.today.getDay() == 6 || this.today.getDay() == 0){ this.NotworkingToday();}} 
    }else{
      this.NotworkingThishour();
    }
    
  }

 

  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
  }

  getFood(){
    this.rest.getJson().subscribe((data)=>{
			this.Food_data = data["group"];
      this.user_data = data["user"];
      this.checkworkinghour();
      this.FoodOption_data = data["foodswithoptions"];
    },err => { console.log(err);}
    );
  }




  NotworkingToday() {
    let alert = this.alertCtrl.create({
      title: 'Not working today',
      buttons: [{
        text: 'Ok',
        handler: () => {
          //sifto l first page
          console.log('Buy clicked' + parseInt(this.user_data["open"], 10));
        }}]
    });
    alert.present();
  }  

  NotworkingThishour() {
    let alert = this.alertCtrl.create({
      title: 'Not working This hour',
      buttons: [{
        text: 'Ok',
        handler: () => {
          //sifto l first page
          console.log('Buy clicked' + parseInt(this.user_data["open"], 10));
        }}]
    });
    alert.present();
  }  

}