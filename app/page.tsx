import { YearCard } from "@/components/playlist/year-card";
import { getYears } from "@/lib/playlist";

export default function Home() {
  const years = getYears();

  return (
    <div className="flex flex-1 flex-col bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8">
        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight">수퍼스타</h1>
          <p className="text-muted-foreground">
            연도를 골라 방송댄스를 따라 춰봐요!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {years.map((year) => (
            <YearCard key={year} year={year} />
          ))}
        </div>
      </main>
    </div>
  );
}
