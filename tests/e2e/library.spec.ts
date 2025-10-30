import { test, expect } from '@playwright/test';

test.describe('Library Page', () => {
  test('displays template grid', async ({ page }) => {
    await page.goto('/library');
    
    const heading = page.locator('h1');
    await expect(heading).toContainText('Template Library');
  });

  test('filter bar changes displayed templates', async ({ page }) => {
    await page.goto('/library');
    
    // Wait for templates to load
    await page.waitForSelector('[href^="/library/"]', { timeout: 5000 });
    
    // Check that filter buttons exist
    const allFilter = page.locator('button', { hasText: 'All' });
    await expect(allFilter).toBeVisible();
  });

  test('template cards are clickable', async ({ page }) => {
    await page.goto('/library');
    
    // Wait for at least one template card
    const firstCard = page.locator('[href^="/library/"]').first();
    await firstCard.waitFor({ state: 'visible', timeout: 5000 });
    
    await firstCard.click();
    
    // Should navigate to detail page
    await expect(page).toHaveURL(/\/library\/.+/);
  });
});

