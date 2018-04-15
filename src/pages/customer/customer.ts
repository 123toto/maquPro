import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  customer: Cliente = new Cliente();
  
  constructor(public navCtrl: NavController,
            navParams: NavParams) {    
    this.customer = navParams.get('customer');
  }

}