import { test, expect } from "@playwright/experimental-ct-react"
import Navigation from "../components/Template/Navigation"

test("Navigasi ke 'Home' dengan mengklik link", async ({ page, mount }) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#homeNav").click()
  await expect(page).toHaveURL("/")
})

test("Navigasi ke 'Search' dengan mengklik link", async ({ page, mount }) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#searchNav").click()
  await expect(page).toHaveURL("/search")
})

test("Navigasi ke 'Movie --> Popular' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#movieMenu").click()
  await component.locator("a#moviePopularNav").click()
  await expect(page).toHaveURL("/movie/popular")
})

test("Navigasi ke 'Movie --> Top Rated' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#movieMenu").click()
  await component.locator("a#movieTopRatedNav").click()
  await expect(page).toHaveURL("/movie/top-rated")
})

test("Navigasi ke 'Movie --> Now Playing' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#movieMenu").click()
  await component.locator("a#movieNowPlayingNav").click()
  await expect(page).toHaveURL("/movie/now-playing")
})

test("Navigasi ke 'Movie --> Upcoming' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#movieMenu").click()
  await component.locator("a#movieUpcomingNav").click()
  await expect(page).toHaveURL("/movie/upcoming")
})

test("Navigasi ke 'TV --> Popular' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#tvMenu").click()
  await component.locator("a#tvPopularNav").click()
  await expect(page).toHaveURL("/tv/popular")
})

test("Navigasi ke 'TV --> Top Rated' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#tvMenu").click()
  await component.locator("a#tvTopRatedNav").click()
  await expect(page).toHaveURL("/tv/top-rated")
})

test("Navigasi ke 'People --> Popular' dengan mengklik link", async ({
  page,
  mount,
}) => {
  const component = await mount(<Navigation />, {
    hooksConfig: { routing: true },
  })

  await expect(page).toHaveURL("/")
  await component.locator("a#peopleMenu").click()
  await component.locator("a#peoplePopularNav").click()
  await expect(page).toHaveURL("/people/popular")
})
