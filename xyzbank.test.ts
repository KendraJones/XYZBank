import { xyzbank } from "./xyzbank";
const fs = require('fs');
const xyzBank = new xyzbank();

test('Customer Login', async () => {
    await xyzBank.navigate()
    await xyzBank.click(xyzBank.customerLogin)
    await xyzBank.click(xyzBank.yourName)
    await xyzBank.click(xyzBank.Hermione)
    await xyzBank.click(xyzBank.login)
    let text = await xyzBank.getResults()
    expect(text).toContain('Hermoine Granger')
    await fs.writeFile(`${__dirname}/screenshots/custLogin.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    })
});
test('Testing both the ability to make a Deposit and then verifying the Transaction', async () => {
    await xyzBank.navigate()
    await xyzBank.click(xyzBank.customerLogin)
    await xyzBank.click(xyzBank.yourName)
    await xyzBank.click(xyzBank.Harry)
    await xyzBank.click(xyzBank.login)
    await xyzBank.click(xyzBank.deposit)
    await xyzBank.Amount(500)
    await xyzBank.click(xyzBank.addDeposit)
    await fs.writeFile(`${__dirname}/screenshots/deposit.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
    await xyzBank.driver.sleep(2500)
    await xyzBank.click(xyzBank.transaction)
    let trnsctn = await xyzBank.getDate()
    expect (trnsctn).toContain('500')
    await fs.writeFile(`${__dirname}/screenshots/depositTransact.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
});
test('Testing both the ability to make a Withdrawal and then verifying the Transaction', async () => {
    await xyzBank.navigate()
    await xyzBank.click(xyzBank.customerLogin)
    await xyzBank.click(xyzBank.yourName)
    await xyzBank.click(xyzBank.Albus)
    await xyzBank.click(xyzBank.login)
    await xyzBank.click(xyzBank.deposit)
    await xyzBank.Amount(100)
    await xyzBank.click(xyzBank.addDeposit)
    await xyzBank.driver.sleep(2000)
    await xyzBank.click(xyzBank.withdrawal)
    await xyzBank.click(xyzBank.wdAmount)
    await xyzBank.WDAmount(25)
    await xyzBank.click(xyzBank.withdraw)
    await xyzBank.driver.sleep(1500)
    await fs.writeFile(`${__dirname}/screenshots/withdrawal.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
    await xyzBank.driver.sleep(2700)
    await xyzBank.click(xyzBank.transaction)
    let transctn = await xyzBank.getAmt()
    expect(transctn).toEqual('25')
    await fs.writeFile(`${__dirname}/screenshots/withdrawalTransact.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    });
});

afterAll(async () => {
    await xyzBank.driver.quit()
});