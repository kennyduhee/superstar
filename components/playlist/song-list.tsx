"use client";

import { useState } from "react";

import { SongCard } from "@/components/playlist/song-card";
import type { Song } from "@/lib/playlist";

type SortOption = "latest" | "oldest" | "artist" | "title";

const sortLabels: Record<SortOption, string> = {
  latest: "최신 월순",
  oldest: "오래된 월순",
  artist: "가수순",
  title: "곡명순",
};

function sortSongs(songs: Song[], option: SortOption) {
  return [...songs].sort((firstSong, secondSong) => {
    if (option === "latest") return secondSong.month - firstSong.month;
    if (option === "artist") {
      return firstSong.artist.localeCompare(secondSong.artist, "ko");
    }
    if (option === "title") {
      return firstSong.title.localeCompare(secondSong.title, "ko");
    }
    return firstSong.month - secondSong.month;
  });
}

export function SongList({ songs }: { songs: Song[] }) {
  const [sortOption, setSortOption] = useState<SortOption>("oldest");
  const sortedSongs = sortSongs(songs, sortOption);

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">총 {songs.length}곡</p>
        <label className="flex items-center gap-2 text-sm font-medium">
          <span className="sr-only">목록 정렬</span>
          <select
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value as SortOption)
            }
            className="h-10 rounded-md border border-border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="목록 정렬"
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {sortedSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </>
  );
}