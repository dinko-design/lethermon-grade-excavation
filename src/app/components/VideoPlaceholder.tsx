import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function VideoPlaceholder({
  title,
  thumbnail,
  videoSrc,
  autoPlay = false,
  className = "",
}: {
  title: string;
  thumbnail?: string;
  videoSrc?: string;
  autoPlay?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current || !autoPlay) return;
    if (isVisible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVisible, autoPlay]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  if (autoPlay && videoSrc) {
    return (
      <div
        ref={containerRef}
        className={`relative bg-[#2A1D12] rounded-xl overflow-hidden ${className}`}
      >
        {isVisible && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={thumbnail}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        {!isVisible && thumbnail && (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
    );
  }

  if (videoSrc) {
    return (
      <div
        ref={containerRef}
        className={`relative bg-[#2A1D12] rounded-xl overflow-hidden group cursor-pointer ${className}`}
        onClick={togglePlay}
      >
        {isVisible ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={thumbnail}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />
        ) : (
          thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover opacity-60"
            />
          )
        )}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
        >
          <div className="w-16 h-16 rounded-full bg-[#C4956A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            {playing ? (
              <Pause className="w-7 h-7 text-white" />
            ) : (
              <Play className="w-7 h-7 text-white ml-1" />
            )}
          </div>
          {!playing && (
            <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">
              {title}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-[#2A1D12] rounded-xl overflow-hidden group cursor-pointer ${className}`}
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#C4956A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <Play className="w-7 h-7 text-white ml-1" />
        </div>
        <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">
          {title}
        </span>
      </div>
    </div>
  );
}
