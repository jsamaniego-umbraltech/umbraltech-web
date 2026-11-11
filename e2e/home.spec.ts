import { expect, test } from '@playwright/test'

test('home page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Umbral Technologies/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('primary call to action reaches the contact form', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Agenda una conversación' }).click()
  await expect(page).toHaveURL(/#contacto$/)
  await expect(page.getByRole('heading', { name: 'Cuéntanos qué te quita tiempo.' })).toBeInViewport()
})

test('contact form validates before sending', async ({ page }) => {
  await page.goto('/#contacto')
  await page.getByRole('button', { name: 'Enviar mensaje' }).click()
  await expect(page.getByLabel('Nombre')).toBeFocused()
  await expect(page.getByText('Escribe tu nombre.')).toBeVisible()
})

test('privacy notice is reachable and in the dark theme', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('contentinfo').getByRole('link', { name: 'Aviso de privacidad' }).click()
  await expect(page).toHaveURL(/\/privacidad\/?$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Aviso de privacidad' })).toBeVisible()
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  expect(bg).toBe('rgb(14, 31, 22)')
})
