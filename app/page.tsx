import { YearCard } from "@/components/playlist/year-card";
import { PoseShowcase } from "@/components/playlist/pose-showcase";
import { getYears } from "@/lib/playlist";

export default function Home() {
  const years = getYears();

  return (
    <div className="stage-shell flex flex-1 flex-col">
      <div className="stage-curtain stage-curtain-left" aria-hidden="true" />
      <div className="stage-curtain stage-curtain-right" aria-hidden="true" />
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
        <div className="stage-heading flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:text-left">
          <PoseShowcase />
          <div className="space-y-3">
            <p className="stage-kicker">TODAY&apos;S STAGE</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              춤추는 수퍼스타
            </h1>
            <p className="text-sm text-foreground/70 sm:text-base">
              연도를 고르고 나만의 무대를 시작해요
            </p>
          </div>
        </div>

        <section aria-label="방송댄스 연도 선택">
          <div className="mb-4 flex items-center justify-between px-1">
            <h2 className="text-sm font-semibold tracking-wide text-foreground/80">
              무대 고르기
            </h2>
            <span className="text-xs font-medium text-foreground/50">
              {years.length} stages
            </span>
          </div>
          <div className="stage-year-grid grid grid-cols-2 gap-4 sm:grid-cols-3">
          {years.map((year) => (
            <YearCard key={year} year={year} />
          ))}
          </div>
        </section>

        <div className="stage-floor" aria-hidden="true">
          <span />
        </div>
      </main>
    </div>
  );
}
