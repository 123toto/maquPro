import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { TestPage } from '../test/test';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items = [{
      title: 'Céline',
      note: 'black',
      icon: 'contact'
    }, {
      title: 'Farah',
      note: 'black',
      icon: 'contact'
    }, {
      title: 'Adeline',
      note: 'black',
      icon: 'contact'
    }, {
      title: 'Sophie',
      note: 'black',
      icon: 'contact'
    }, {
      title: 'Sabine',
      note: 'Normal',
      icon: 'contact'
    }, {
      title: 'Marie-Jo',
      note: 'Privilège',
      icon: 'contact'
    }, {
      title: 'Audrey',
      note: 'Normal',
      icon: 'contact'
    }, {
      title: 'Hasna',
      note: 'Normal',
      icon: 'contact'
    }, {
      title: 'Mme Hssina',
      note: 'Normal',
      icon: 'contact'
    }, {
      title: 'Mme Palmade',
      note: 'Normal',
      icon: 'contact'
    }];
  }

  itemTapped(event, item) {
    this.navCtrl.push(CustomerPage, {item:item});
  }

  addCustomer() {
    this.navCtrl.push(TestPage)
  }
}
