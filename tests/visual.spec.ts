import { test, expect } from '@playwright/test';

test.describe('Visual Regression - TodoMVC', () => {

  test('Home page visual snapshot', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Simulamos un cambio visual artificial
  await page.addStyleTag({
    content: 'body { background-color: red !important; }'
  });

    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
    });
  });

});

  test('Input field visual snapshot', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    
    const input = page.getByPlaceholder('What needs to be done?');
    
    await expect(input).toHaveScreenshot('input-field.png');
  });
