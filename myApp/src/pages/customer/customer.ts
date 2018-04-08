import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
 private item: any;
  constructor(public navCtrl: NavController,
            navParams: NavParams) {
    this.item = navParams.get('item');
  }

}