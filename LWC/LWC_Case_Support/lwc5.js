import { LightningElement } from 'lwc';

export default class Lwc5 extends LightningElement {

   
    fName = '';
    fNamechangeHandler(event) {
    this.fName = event.target.value;
    }

    lName = '';
    lNamechangeHandler(event) {
    this.lName = event.target.value;
    }

    problem = '';
    problemchangeHandler(event) {
    this.problem = event.target.value;
    }

}