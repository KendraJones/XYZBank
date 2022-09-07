import { xyzbank } from "./xyzbank";
const fs = require('fs');
const xyzBank = new xyzbank();

test('Customer Login', async () => {
    await xyzBank.navigate()
    await xyzBank.click(xyzBank.customerLogin)
    await xyzBank.click(xyzBank.yourName)
    await xyzBank.click(xyzBank.user)
    await xyzBank.click(xyzBank.login)
    let text = await xyzBank.getResults()
    expect(text).toContain('Hermoine Granger')
    await fs.writeFile(`${__dirname}/screenshots/custLogin.png`, await xyzBank.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log("Screenshot Successful!")
    })
});

afterAll(async () => {
    await xyzBank.driver.quit()
});