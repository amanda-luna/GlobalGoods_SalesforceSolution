import { LightningElement } from 'lwc';

export default class SurveyStepTwo extends LightningElement {

    attachmentAcceptedFormats(){
        return ['.pdf', '.png'];
    }   

}