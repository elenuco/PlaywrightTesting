import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('Aloha');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByLabel('Toggle Todo').check();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').press('CapsLock');
  await page.getByPlaceholder('What needs to be done?').fill('Pagar frutas');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByText('1 item leftAll Active').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByText('All Active Completed').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByTestId('todo-title').click();
  await page.getByLabel('Toggle Todo').check();
  await page.getByLabel('Toggle Todo').uncheck();
});