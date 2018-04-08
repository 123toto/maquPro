import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../../models/cliente.model';
import { CustomerListService } from '../../../services/customerList/customer-list.service';

@IonicPage()
@Component({
  selector: 'page-modify-customer',
  templateUrl: 'modify-customer.html',
})
export class ModifyCustomerPage {

  customer: Cliente = {
    nom: '',
    typeCliente: '',
    adresse: '',
    telephone: undefined
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {
      this.customer = this.navParams.get('customer');
  }

  // modifyCustomer(customer: Cliente) {
  //   this.customerListService.createCustomer(customer);
  //   this.navCtrl.pop();
  // }
  modifyCustomer(customer: Cliente) {
    this.customerListService.updateCustomer(customer);
    this.navCtrl.pop();

  }
}
