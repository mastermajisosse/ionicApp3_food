
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InfoPage } from './../pages/info/info';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecondepPage } from '../pages/secondep/secondep';
import { FirstpPage } from '../pages/firstp/firstp';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InfoPage,
    SecondepPage,
    FirstpPage,
  ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md'
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InfoPage,
    SecondepPage,
    FirstpPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
