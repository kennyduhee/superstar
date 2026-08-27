import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { YoutubePlayer } from "@/components/playlist/youtube-player";
import { getSong, getSongsByYear, getYears } from "@/lib/playlist";

export function generateStaticParams() {
  return getYears().flatMap((year) =>
    getSongsByYear(year).map((song) => ({
      year: String(year),
      songId: song.id,
    }))
  );
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ year: string; songId: string }>;
}) {
  const { year: yearParam, songId } = await params;
  const year = Number(yearParam);
  const song = getSong(year, songId);

  if (!song) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-5 py-8 sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            render={<Link href={`/${year}`} aria-label="곡 목록으로" />}
            nativeButton={false}
            variant="outline"
            size="icon-lg"
          >
            <ArrowLeft />
          </Button>
          <div className="min-w-0">
            <p className="truncate text-sm text-muted-foreground">
              {song.artist}
            </p>
            <h1 className="truncate text-xl font-bold">{song.title}</h1>
          </div>
        </div>
        <YoutubePlayer
          youtubeId={song.youtubeId}
          title={`${song.artist} - ${song.title}`}
        />
      </main>
    </div>
  );
}
