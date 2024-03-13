import { test, expect } from "@playwright/test"

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.co.jp/')
})

async function verify(page) {
    await expect(page).toHaveTitle('Google')
    await expect(page.getByLabel('検索', { exact: true })).toBeVisible()
}

test('P1', async ({ page }) => { await verify(page) })
test('P2', async ({ page }) => { await verify(page) })
test('P3', async ({ page }) => { await verify(page) })
test('P4', async ({ page }) => { await verify(page) })
test('P5', async ({ page }) => { await verify(page) })
