import { FIREBASE_CONFIG } from './firebase.credentials';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MaquPro } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestPage } from '../pages/test/test';
import { CustomerPage } from '../pages/customer/customer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MaquPro,
    HomePage,
    ListPage,
    TestPage,
    CustomerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MaquPro),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), 
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MaquPro,
    HomePage,
    ListPage,
    TestPage,
    CustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
