import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { youtubeThumbnailUrl, type Song } from "@/lib/playlist";

export function SongCard({ song }: { song: Song }) {
  return (
    <Link href={`/${song.year}/${song.id}`} className="block">
      <Card
        size="sm"
        className="h-full transition-transform active:scale-95"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={youtubeThumbnailUrl(song.youtubeId)}
          alt={`${song.artist} - ${song.title}`}
          className="aspect-video w-full object-cover"
        />
        <CardContent>
          <p className="truncate text-sm text-muted-foreground">
            {song.artist}
          </p>
          <p className="truncate text-base font-semibold">{song.title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
