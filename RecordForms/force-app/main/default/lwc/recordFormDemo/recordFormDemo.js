import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name'; 
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'; 
import RATING_FIELD from '@salesforce/schema/Account.Rating'; 
import REVENUE_FILED from '@salesforce/schema/Account.AnnualRevenue'; 
export default class RecordFormDemo extends LightningElement {
    //Expose fields to make it available in the template 
    fieldList = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD, REVENUE_FILED]; 
    
    @api recordId; 
    @api objectApiName; 
} 
