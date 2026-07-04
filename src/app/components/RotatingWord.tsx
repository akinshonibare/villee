"use client";

import { useEffect, useState } from "react";

export function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2600,
    );
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block bg-rust text-cream px-3 sm:px-4 -rotate-1 rounded-sm">
      <span key={index} className="word-swap inline-block">
        {words[index]}
      </span>
    </span>
  );
}
