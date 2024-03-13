import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.co.jp/')
})

test('~へ遷移できること', async ({ page }) => {
    await expect(page).toHaveTitle('Google')
})

test('要素や文言の表示確認', async ({ page }) => {
    await expect(page.getByLabel('検索', { exact: true })).toBeVisible()
})