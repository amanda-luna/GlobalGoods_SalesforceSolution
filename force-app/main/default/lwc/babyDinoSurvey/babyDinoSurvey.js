import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class BabyDinoSurvey extends NavigationMixin(LightningElement) {

    handleNavigate() {
        var compDefinition = {
            componentDef: "c:surveyStepThree",
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
    
    handleNavigateBack() {
        var compDefinition = {
            componentDef: "c:surveyStepOne",
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