import { expect, test } from "@playwright/test";

test("홈 화면에서 연도별 무대를 선택할 수 있다", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("수퍼스타");
  await expect(
    page.getByRole("heading", { level: 1, name: "춤추는 수퍼스타" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "2026" })).toHaveAttribute(
    "href",
    "/2026"
  );
});

test("연도별 인기곡 목록을 최신 월순으로 정렬할 수 있다", async ({ page }) => {
  await page.goto("/2026");

  const songLinks = page.locator('a[href^="/2026/"]');
  await expect(songLinks.first()).toContainText("Good Goodbye");

  await page.getByRole("combobox", { name: "목록 정렬" }).selectOption("latest");

  await expect(songLinks.first()).toContainText("This & That");
});
