"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ label, children }: { label: string; children: ReactNode }) {
  const trackId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    const track = trackRef.current;
    if (!track) return;
    const distance = track.scrollWidth - track.clientWidth;
    setProgress(distance <= 1 ? 100 : Math.max(0, Math.min(100, Math.round(track.scrollLeft / distance * 100))));
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updateProgress);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  function move(direction: "previous" | "next" | "start" | "end") {
    const track = trackRef.current;
    if (!track) return;
    const [first, second] = Array.from(track.children);
    const stride = second && first
      ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
      : track.clientWidth;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";

    if (direction === "start" || direction === "end") {
      track.scrollTo({ left: direction === "start" ? 0 : track.scrollWidth, behavior });
    } else {
      track.scrollBy({ left: direction === "next" ? stride : -stride, behavior });
    }
  }

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    switch (event.key) {
      case "ArrowLeft": move("previous"); break;
      case "ArrowRight": move("next"); break;
      case "Home": move("start"); break;
      case "End": move("end"); break;
      default: return;
    }
    event.preventDefault();
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        className="carousel-track"
        id={trackId}
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label={`${label} slides`}
        data-lenis-prevent-horizontal
        onScroll={updateProgress}
        onKeyDown={handleKey}
      >
        {children}
      </div>
      <div className="carousel-controls">
        <span className="carousel-progress" aria-hidden="true"><span style={{ width: `${Math.max(12, progress)}%` }} /></span>
        <div className="carousel-buttons">
          <button type="button" aria-label={`Previous ${label.toLowerCase()}`} aria-controls={trackId} disabled={progress === 0} onClick={() => move("previous")}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label={`Next ${label.toLowerCase()}`} aria-controls={trackId} disabled={progress === 100} onClick={() => move("next")}><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
