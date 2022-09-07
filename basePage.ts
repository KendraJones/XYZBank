import { By, Builder, until, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
const chromedriver = require('chromedriver');

interface Options {
    driver?: Driver
    url?: string
};

export class BasePage {
    driver: WebDriver
    url: string

    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    };
    
}