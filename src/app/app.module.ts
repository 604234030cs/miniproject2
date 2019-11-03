import { DormPage } from './../pages/dorm/dorm';
import { TypedetailPage } from './../pages/apartment/typedetail';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { TypeRoomPage } from '../pages/type-room/type-room';
import { LoaddataProvider } from '../providers/loaddata/loaddata';
import { CondominiumPage } from '../pages/condominium/condominium';
import { MansionPage } from '../pages/mansion/mansion';
import { RoomdetailPage } from '../pages/roomdetail/roomdetail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,TypeRoomPage,TypedetailPage,
    CondominiumPage,MansionPage,DormPage,RoomdetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,TypeRoomPage,TypedetailPage,
    CondominiumPage,MansionPage,DormPage,RoomdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider
  ]
})
export class AppModule {}
