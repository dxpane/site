import { expect, test } from "@playwright/test";

const pages = [
  { path: "", lang: "en", h1: "Turn any TV into a living menu." },
  { path: "privacy/", lang: "en", h1: "Privacy Policy" },
  { path: "terms/", lang: "en", h1: "Terms of Use" },
  { path: "support/", lang: "en", h1: "Support" },
  { path: "tr/", lang: "tr", h1: "Her TV'yi canlı bir menüye dönüştürün." },
  { path: "tr/privacy/", lang: "tr", h1: "Gizlilik Politikası" },
  { path: "tr/terms/", lang: "tr", h1: "Kullanım Koşulları" },
  { path: "tr/support/", lang: "tr", h1: "Destek" },
];

for (const p of pages) {
  test(`/${p.path} renders in ${p.lang} without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    const res = await page.goto(p.path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", p.lang);
    await expect(page.locator("h1")).toHaveText(p.h1);
    await expect(page).toHaveTitle(/dxpane/);
    expect(errors).toEqual([]);
  });
}

test("language switch keeps the page", async ({ page }) => {
  await page.goto("privacy/");
  await page.getByRole("link", { name: "Türkçe" }).click();
  await expect(page.locator("h1")).toHaveText("Gizlilik Politikası");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page.locator("h1")).toHaveText("Privacy Policy");
});

test("footer links reach every legal page", async ({ page }) => {
  for (const [name, h1] of [["Privacy", "Privacy Policy"], ["Terms", "Terms of Use"], ["Support", "Support"]]) {
    await page.goto("");
    await page.locator("footer").getByRole("link", { name, exact: true }).click();
    await expect(page.locator("h1")).toHaveText(h1);
  }
});

test("story follows the scroll", async ({ page }) => {
  await page.goto("");
  const steps = page.locator(".story__step");
  for (const i of [0, 1, 2]) {
    await steps.nth(i).scrollIntoViewIfNeeded();
    await steps.nth(i).evaluate((el) => el.scrollIntoView({ block: "center" }));
    await expect(steps.nth(i)).toHaveClass(/is-active/);
  }
});

test("FAQ opens", async ({ page }) => {
  await page.goto("");
  const item = page.locator(".faq__item").first();
  await item.locator("summary").click();
  await expect(item).toHaveAttribute("open", "");
});
