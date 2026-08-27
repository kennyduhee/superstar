import fs from "node:fs";
import path from "node:path";

export type Song = {
  id: string;
  year: number;
  month: number;
  artist: string;
  title: string;
  youtubeId: string;
  chartSource?: string;
  note?: string;
};

const SONGS_DIR = path.join(process.cwd(), "data", "songs");

let cache: Song[] | null = null;

function loadAllSongs(): Song[] {
  if (cache) return cache;

  const files = fs
    .readdirSync(SONGS_DIR)
    .filter((file) => file.endsWith(".json"));

  cache = files
    .flatMap((file) => {
      const raw = fs.readFileSync(path.join(SONGS_DIR, file), "utf-8");
      return JSON.parse(raw) as Song[];
    })
    .sort((a, b) => a.year - b.year || a.month - b.month);

  return cache;
}

export function getYears(): number[] {
  const years = new Set(loadAllSongs().map((song) => song.year));
  return Array.from(years).sort((a, b) => b - a);
}

export function getSongsByYear(year: number): Song[] {
  return loadAllSongs()
    .filter((song) => song.year === year)
    .sort((a, b) => a.month - b.month);
}

export function getSong(year: number, id: string): Song | undefined {
  return loadAllSongs().find((song) => song.year === year && song.id === id);
}

export function getYearThumbnailId(year: number): string | undefined {
  return getSongsByYear(year)[0]?.youtubeId;
}

