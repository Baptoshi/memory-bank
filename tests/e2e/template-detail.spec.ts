import { test, expect } from '@playwright/test';

test.describe('Template Detail Page', () => {
  test('displays template content', async ({ page }) => {
    // Navigate directly to a known template
    await page.goto('/library/architecture');
    
    // Should have back link
    const backLink = page.locator('a[href="/library"]');
    await expect(backLink).toBeVisible();
    
    // Should have copy button
    const copyButton = page.locator('button', { hasText: 'Copy to Clipboard' });
    await expect(copyButton).toBeVisible();
  });

  test('copy button changes state on click', async ({ page }) => {
    await page.goto('/library/architecture');
    
    const copyButton = page.locator('button', { hasText: 'Copy to Clipboard' });
    await copyButton.click();
    
    // Button text should change to "Copied"
    await expect(copyButton).toContainText('Copied');
    
    // Should revert after 2 seconds
    await page.waitForTimeout(2100);
    await expect(copyButton).toContainText('Copy to Clipboard');
  });

  test('download button exists', async ({ page }) => {
    await page.goto('/library/architecture');
    
    const downloadButton = page.locator('button', { hasText: 'Download .md' });
    await expect(downloadButton).toBeVisible();
  });
});

