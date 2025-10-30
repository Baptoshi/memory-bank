import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('displays hero section with correct title', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.locator('h1');
    await expect(heading).toContainText('Memory Bank');
  });

  test('has working link to library', async ({ page }) => {
    await page.goto('/');
    
    const libraryLink = page.locator('a[href="/library"]');
    await expect(libraryLink).toBeVisible();
    
    await libraryLink.click();
    await expect(page).toHaveURL('/library');
  });

  test('displays header and footer', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    const footer = page.locator('footer');
    
    await expect(header).toBeVisible();
    await expect(footer).toBeVisible();
  });
});

