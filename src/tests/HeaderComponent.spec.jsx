import { test, expect } from "@playwright/experimental-ct-react"
import HeaderComponent from "../components/Template/Header"

test("Tes elemen berisi sebuah teks", async ({ mount }) => {
  const component = await mount(<HeaderComponent />)

  await expect(component).toContainText("TaufikCinema")
})

// Mendefinisikan kasus uji untuk memverifikasi tombol navbar berubah keadaan dengan benar
test("Tes tombol navbar berubah sesuai keadaan", async ({ mount }) => {
  // Memasang HeaderComponent menggunakan Playwright
  const headerComponent = await mount(<HeaderComponent />)

  // Menemukan tombol navbar
  const buttonComponent = headerComponent.locator("#buttonToggleOffCanvas")
  // Memastikan tombol navbar tidak null, artinya ada di DOM
  expect(buttonComponent).not.toBeNull()

  // Mengklik tombol navbar
  await buttonComponent.click()

  // Setelah diklik, memeriksa apakah komponen 'X' (yang mewakili ikon close) ada
  const xComponent = headerComponent.locator('X[size="40"]')
  expect(xComponent).not.toBeNull()

  // Mengklik tombol navbar lagi untuk mengembalikan ke keadaan semula
  await buttonComponent.click()

  // Setelah diklik lagi, memeriksa apakah komponen 'List' (yang mewakili ikon menu) ada
  const listComponent = headerComponent.locator('List[size="40"]')
  expect(listComponent).not.toBeNull()
})
