import Link from "next/link";

import { getYearThumbnailId, youtubeThumbnailUrl } from "@/lib/playlist";

export function YearCard({ year }: { year: number }) {
  const thumbnailId = getYearThumbnailId(year);

  return (
    <Link
      href={`/${year}`}
      className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-card shadow-xs ring-1 ring-foreground/10 transition-transform active:scale-95"
    >
      {thumbnailId && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={youtubeThumbnailUrl(thumbnailId)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 transition-opacity group-active:opacity-50"
        />
      )}
      <span className="relative font-mono text-6xl font-bold text-foreground drop-shadow-sm sm:text-7xl">
        {year}
      </span>
    </Link>
  );
}
