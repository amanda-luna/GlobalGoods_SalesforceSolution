import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SurveyStepOne extends NavigationMixin(LightningElement) {

    // Adding Mock-up Data to Populate Step 1 Comboboxes
    get accountOptions() {
        return [
            { label: 'Wallmart', value: 'Wallmart' },
            { label: 'Costco', value: 'Costco' },
            { label: 'SuperStore', value: 'SuperStore' },
            { label: 'Shoppers Drug Mart', value: 'ShoppersDrugMart' }
        ];
    }

    get cityOptions() {
        return [
            { label: 'Winnipeg', value: 'winnipeg' },
            { label: 'Calgary', value: 'calgary' },
            { label: 'Vancouver', value: 'vancouver' },
            { label: 'Toronto', value: 'toronto' },
            { label: 'Saskatoon', value: 'saskatoon' },
            { label: 'Halifax', value: 'halifax' },
        ];
    }

    get storeOptions() {
        return [
            { label: 'Walmart - Regent Ave', value: 'Walmart_Regent' },
            { label: 'Costco - Regent Ave', value: 'Costco_Regent' },
            { label: 'SuperStore - Regent Ave', value: 'Superstore_Regent' },
            { label: 'Shoppers - Regent Ave', value: 'Shoppers_Regent' },
            { label: 'Costco - St. James', value: 'Costco_St_James' },
            { label: 'Walmart - St. Vital ', value: 'Walmart_St_Vital' },
        ];
    }

    handleNavigate() {
        var compDefinition = {
            componentDef: "c:surveyStepTwo",
            attributes: {
                propertyValue: "500"
            }
        };
        // Base64 encode the compDefinition JS object
        var encodedCompDef = btoa(JSON.stringify(compDefinition));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + encodedCompDef
            }
        });
    }

}