import { LightningElement } from 'lwc';

export default class Lwc7 extends LightningElement {

    fName = '';
    fNamechangeHandler(event) {
    this.fName = event.target.value;
    }

    lName = '';
    lNamechangeHandler(event) {
    this.lName = event.target.value;
    }

    fNameCustomer = '';
    fNameCustomerchangeHandler(event) {
    this.fNameCustomer = event.target.value;
    }

    lNameCustomer = '';
    lNameCustomerchangeHandler(event) {
    this.lNameCustomer = event.target.value;
    }
    
    phone = '';
    phonechangeHandler(event) {
    this.phone = event.target.value;
    }

    date = '';
    datechangeHandler(event) {
    this.date = event.target.value;
    }

    text = '';
    textchangeHandler(event) {
    this.text = event.target.value;
    }
    
    
}