import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import NAME_FIELD from '@salesforce/schema/Account.Name'; 
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'; 
import RATING_FIELD from '@salesforce/schema/Account.Rating'; 
import REVENUE_FILED from '@salesforce/schema/Account.AnnualRevenue'; 
export default class RecordFormDemo extends NavigationMixin(LightningElement) {
    //Expose fields to make it available in the template 
    fieldList = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD, REVENUE_FILED]; 
    
    @api recordId; 
    @api objectApiName; 

    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Record Updated Successfully',
            variant : 'success'
        });
        this.dispatchEvent(event);
    }

    navigateToRecordPage(event) {
        let PageRef = {
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        };
        this[NavigationMixin.Navigate](PageRef);
    }
} 
