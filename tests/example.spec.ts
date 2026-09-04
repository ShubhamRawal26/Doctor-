import { test, expect } from '@playwright/test';

test('homepage has SalvaMedic branding and loaded successfully', async ({ page }) => {
  await page.goto('/');

  // Expect title to contain SalvaMedic
  await expect(page).toHaveTitle(/SalvaMedic/);

  // Expect the main logo to be visible
  await expect(page.getByText('SalvaMedic').first()).toBeVisible();

  // Expect schedule button to be visible
  await expect(page.getByRole('button', { name: 'Schedule Appointment' }).first()).toBeVisible();
});

test('opens appointment booking modal', async ({ page }) => {
  await page.goto('/');

  // Click schedule appointment
  await page.getByRole('button', { name: 'Schedule Appointment' }).first().click();

  // Verify modal header appears
  await expect(page.getByRole('heading', { name: 'Schedule Consultation' })).toBeVisible();
});
