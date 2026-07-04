"use client";

import { useEffect, useState } from "react";

export function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  // The first word must render static — animating it replays on hydration
  // and reads as a stutter at page load.
  const [cycled, setCycled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
      setCycled(true);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block bg-rust text-cream px-3 sm:px-4 -rotate-1 rounded-sm">
      <span key={index} className={`inline-block ${cycled ? "word-swap" : ""}`}>
        {words[index]}
      </span>
    </span>
  );
}
