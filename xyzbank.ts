import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class xyzbank extends BasePage {
    customerLogin: By = By.className('btn btn-primary btn-lg')
    yourName: By = By.id('userSelect')
    user: By = By.xpath('//*[@id="userSelect"]/option[2]')
    login: By = By.className('btn btn-default')
    customerName: By = By.className('fontBig ng-binding')

    constructor() {
        super({url: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"})
    };
    async getResults() {
        return this.getText(this.customerName)
    }
};