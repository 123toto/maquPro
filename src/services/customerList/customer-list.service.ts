import { Cliente } from './../../models/cliente.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Select } from 'ionic-angular/components/select/select';

@Injectable() 

export class CustomerListService {
    private customerListRef = this.afDb.list<Cliente>('clientes-list'); 

    constructor(private afDb: AngularFireDatabase) {
    }

    getCustomersList() {
        return this.customerListRef;
    }

    createCustomer(customer: Cliente) {
        return this.customerListRef.push(customer);
    }

    updateCustomer(customer: Cliente) {
        return this.customerListRef.update(customer.key, customer);
    }

    deleteCustomer(customer: Cliente) {
        return this.customerListRef.remove(customer.key);
    }
}