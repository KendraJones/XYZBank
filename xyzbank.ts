import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class xyzbank extends BasePage {
    customerLogin: By = By.className('btn btn-primary btn-lg')
    yourName: By = By.id('userSelect')
    Hermione: By = By.xpath('//*[@id="userSelect"]/option[2]')
    Harry: By = By.xpath('//*[@id="userSelect"]/option[3]')
    login: By = By.className('btn btn-default')
    customerName: By = By.className('fontBig ng-binding')

    deposit: By = By.xpath('/html/body/div/div/div[2]/div/div[3]/button[2]')
    amount: By = By.xpath('/html/body/div/div/div[2]/div/div[4]/div/form/div/input')
    addDeposit: By = By.className('btn btn-default')
    transaction: By = By.xpath('/html/body/div/div/div[2]/div/div[3]/button[1]')
    dateTime: By = By.xpath('//*[@id="anchor0"]')

    Albus: By = By.xpath('//*[@id="userSelect"]/option[5]')
    withdrawal: By = By.xpath('/html/body/div/div/div[2]/div/div[3]/button[3]')
    wdAmount: By = By.xpath('/html/body/div/div/div[2]/div/div[4]/div/form/div/input')
    withdraw: By = By.xpath('/html/body/div/div/div[2]/div/div[4]/div/form/button')
    getAmount: By = By.xpath('//*[@id="anchor1"]/td[2]')

    bankManager: By = By.xpath('/html/body/div/div/div[2]/div/div[1]/div[2]/button')
    addCustomer: By = By.xpath('/html/body/div/div/div[2]/div/div[1]/button[1]')
    firstname: By = By.xpath('/html/body/div/div/div[2]/div/div[2]/div/div/form/div[1]/input')
    lastname: By = By.xpath('/html/body/div/div/div[2]/div/div[2]/div/div/form/div[2]/input')
    postalcode: By = By.xpath('/html/body/div/div/div[2]/div/div[2]/div/div/form/div[3]/input')
    addCustButton: By = By.xpath('/html/body/div/div/div[2]/div/div[2]/div/div/form/button')

    constructor() {
        super({url: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"})
    };
    async getResults() {
        return this.getText(this.customerName)
    };
    async Amount(number: number) {
        return this.setInput(this.amount, `${number}`)
    };
    async getDate() {
        return this.getText(this.dateTime)
    };
    async WDAmount(wdamt: number) {
        return this.setInput(this.wdAmount, `${wdamt}`)
    };
    async getAmt() {
        return this.getText(this.getAmount)
    };
    async firstName(fName: string) {
        return this.setInput(this.firstname, `${fName}`)
    };
    async lastName(lName: string) {
        return this.setInput(this.lastname, `${lName}`)
    };
    async postalCode(pCode: string) {
        return this.setInput(this.postalcode, `${pCode}`)
    };
};