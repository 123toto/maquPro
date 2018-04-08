import { FIREBASE_CONFIG } from './firebase.credentials';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MaquPro } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerPage } from '../pages/customer/customer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomerListService } from '../services/customerList/customer-list.service';
import { ModifyCustomerPage } from '../pages/customer/modify-customer/modify-customer';


@NgModule({
  declarations: [
    MaquPro,
    HomePage,
    ListPage,
    CustomerPage,
    ModifyCustomerPage
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
    CustomerPage,
    ModifyCustomerPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerListService 
  ]
})
export class AppModule {}
