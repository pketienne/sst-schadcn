import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
	test('should load successfully', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/Next.js/);
	});

	test('should have a main element', async ({ page }) => {
		await page.goto('/');
		const main = page.locator('main');
		await expect(main).toBeVisible();
	});
});
