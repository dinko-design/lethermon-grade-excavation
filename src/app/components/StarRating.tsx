"use client";
import { Star } from "lucide-react";

export function StarRating({ rating = 5, size = 16 }: { rating?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

export function RatingBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 ${compact ? "" : "bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"}`}>
      <StarRating rating={5} size={compact ? 14 : 15} />
      <span className={compact ? "text-xs text-muted-foreground" : "text-sm text-white/90"}>
        5.0 Rating | 47+ Reviews
      </span>
    </div>
  );
}
