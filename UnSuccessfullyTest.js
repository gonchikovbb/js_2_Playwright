const { chromium } = require("playwright");
const {expect} = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(0);
  await page.locator('[type="password"]').click();
  await page.locator('[type="password"]').fill(0);
  await page.click("//button[text()='Войти']");

  await page.pause();
  expect(await page.textContent("[data-testid=login-error-hint]")).toEqual("Вы ввели неправильно логин или пароль");
  await browser.close();
})();