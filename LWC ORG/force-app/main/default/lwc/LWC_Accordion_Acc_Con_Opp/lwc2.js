import { LightningElement } from 'lwc';

export default class Lwc2 extends LightningElement {
    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionA() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'Account';
    }

    handleSetActiveSectionB() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'Contact';
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'Opportunity';
    }

    accountName = '';
    industry = '';
    rating = '';
    phone = '';

    lastName = '';
    ContactPhone = '';

    opportunityName = '';
    closeDate  = '';
    stage = '';
   
    



}