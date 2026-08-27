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
