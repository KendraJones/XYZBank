import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class xyzbank extends BasePage {
    something: By = By.id('')

    constructor() {
        super({url: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"})
    };
    
};