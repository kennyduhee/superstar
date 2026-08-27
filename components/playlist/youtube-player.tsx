type YoutubePlayerProps = {
  youtubeId: string;
  title: string;
};

export function YoutubePlayer({ youtubeId, title }: YoutubePlayerProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-xs ring-1 ring-foreground/10">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
