import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SongCard } from "@/components/playlist/song-card";
import { getSongsByYear, getYears } from "@/lib/playlist";

export function generateStaticParams() {
  return getYears().map((year) => ({ year: String(year) }));
}

export default async function YearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year: yearParam } = await params;
  const year = Number(yearParam);
  const songs = getSongsByYear(year);

  if (songs.length === 0) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-5 py-8 sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            render={<Link href="/" aria-label="연도 목록으로" />}
            nativeButton={false}
            variant="outline"
            size="icon-lg"
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-2xl font-bold">{year}년 인기곡</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </main>
    </div>
  );
}
