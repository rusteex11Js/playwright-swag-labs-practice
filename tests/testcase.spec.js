
import { test, expect } from '@playwright/test';

test("smoke First test case ", async ({ browser }) => {
  const context = await browser.newContext(); // without any plugin/saved sessions
  const page = await context.newPage(); //page
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Swag Labs");
});

test("smoke second test case ", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");

  //input --> tagname
  //class/id --> attribute
  //"user-name" --> value
  // locate element
  // perform action
  // different assertions
  await page.locator("#user-name").fill("standard_user");
  await page.locator("input[data-test='password']").fill("secret_sauce");
  await page.locator(".submit-button").click();
  const headerTitle = await page
    .locator("//div[contains(text(),'Swag')]")
    .textContent();
  console.log(headerTitle);

  await expect(page.locator("//div[contains(text(),'Swag')]")).toContainText(
    "Swag",
  );
  await expect(page.locator("//div[contains(text(),'Swag')]")).toHaveText(
    "Swag Labs",
  );

  //More than one element:
  const firstProduct = await page
    .locator(".inventory_item_name ")
    .first()
    .textContent(); //one element text
  console.log(firstProduct);

  const lastProduct = await page
    .locator(".inventory_item_name ")
    .last()
    .textContent();
  console.log(lastProduct);

  const basedonIndex = await page
    .locator(".inventory_item_name ")
    .nth(2)
    .textContent();
  console.log(basedonIndex);

  const allProduct = await page
    .locator(".inventory_item_name ")
    .allTextContents(); //more than one element text
  console.log(allProduct);

  await page.pause();
});