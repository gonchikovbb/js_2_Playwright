const { chromium } = require("playwright");
const {expect} = require("@playwright/test");
const { email, password } = require('./user.js');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[type="password"]').click();
  await page.locator('[type="password"]').fill(password);
  await page.click("//button[text()='Войти']");
  await page.pause();
  await expect(await page.textContent("h2")).toEqual("Мои курсы и профессии");
  await browser.close();

})();