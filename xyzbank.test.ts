import { xyzbank } from "./xyzbank";
const fs = require('fs');
const xyzBank = new xyzbank();

test('', async () => {

});

afterAll(async () => {
    await xyzBank.driver.quit()
});