import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../../models/cliente.model';
import { CustomerListService } from '../../../services/customerList/customer-list.service';
import { ListPage } from '../../list/list';


@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {

  customer: Cliente = {
    nom : '',
    typeCliente: '',
    adresse: '',
    telephone: undefined
  }
  customerList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerListService: CustomerListService) {

  }

  addCustomer(customer: Cliente) {
    this.customerListService.createCustomer(customer).then(ref => {
      this.navCtrl.setRoot(ListPage, {key : ref.key })
    });
  }
}
