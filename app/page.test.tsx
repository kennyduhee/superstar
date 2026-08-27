import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "@/app/page";
import { getYears } from "@/lib/playlist";

test("홈 화면은 앱 제목과 연도별 링크를 보여준다", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "수퍼스타" })
  ).toBeInTheDocument();

  const years = getYears();
  expect(years.length).toBeGreaterThan(0);
  for (const year of years) {
    expect(screen.getByRole("link", { name: String(year) })).toHaveAttribute(
      "href",
      `/${year}`
    );
  }
});
