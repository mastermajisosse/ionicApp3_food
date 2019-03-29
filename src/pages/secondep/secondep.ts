import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { FirstpPage } from '../firstp/firstp';


/**
 * Generated class for the SecondepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondep',
  templateUrl: 'secondep.html',
})
export class SecondepPage {
  groupform: FormGroup;

  userData = {
    "Name" :"" , "firma" :"" , "strasse" :"" , "plz" :"" , "stadt" :"" , "anmerkung" :"" ,
      "email" :"" , "phone": "",
  }

  overlayHidden: boolean = true;
  footerHidden: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formm();
  }

  // الهايد و الشو للأوفرلاي تلاعب بها كيفما تريد بتمرير الفالس يظهر الأوفرلاي و الترو يختفي
  public hideOverlay() {
    if (this.overlayHidden == true) {
      this.overlayHidden = false;
    }
    if (this.footerHidden == true) {
      this.footerHidden = false;
    }
  }

    // رغم ان الأمر واضح لكن فقط كنصيحة يجب ان تمسح هده الدالة من السطر 179 وتنادي عليها هنا بعد ادخال البيانات
  public footer(){
    this.overlayHidden = false;
    this.footerHidden = true;
  }

  submitCheckout(){
    this.hideOverlay();
  }

  
  formm() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.groupform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      firma: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      strasse: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      plz:new FormControl('',[Validators.required , Validators.minLength(3), Validators.maxLength(9),Validators.pattern('[0-9]*') ]),
      stadt: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      anmerkung: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      phone:new FormControl('',[Validators.required , Validators.minLength(9), Validators.maxLength(15)]),
    });
  }

}
