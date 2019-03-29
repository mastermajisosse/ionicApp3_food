import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// هنا مثال للداتا

  pet: string = "food";
  Food_data: any = {};
  user_data: any = {};
  FoodOption_data: any = {};

  constructor(public navCtrl: NavController , public rest:RestApiProvider) {

  }
  // التنقل بين الصفحات
  navigate(page){
    switch(page) {
      case 'InfoPage':
      this.navCtrl.push(InfoPage);
      break;
    }
  }

  getFood(){
    this.rest.getJson().subscribe((data)=>{
			this.Food_data = data["group"];
			this.user_data = data["user"];
      this.FoodOption_data = data["foodswithoptions"];
      console.log("food" +this.Food_data);
    },err => { console.log(err);}
    );
  }
}
