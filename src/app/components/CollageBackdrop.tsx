"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Faded patchwork of real event photos + solid brand-color blocks behind
// the landing hero, washed under cream so the type stays readable
// (blind8-style). Photos always outnumber color blocks; every second one
// tile crossfades — photo→photo, photo→color, or color→photo — and no
// photo ever appears twice at once.
const PHOTO_COUNT = 33;
const TILE_COUNT = 32;
const SIZES = "(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 13vw";

const SWAP_INTERVAL_MS = 1100;
// A fading-out photo stays off the bench until its layer is dropped.
const FADE_DONE_MS = 900;
// Don't re-swap a tile that swapped recently — let the fade land.
const TILE_COOLDOWN_MS = 2500;

// Color-block tiles: bounded so pictures always dominate the wall.
const COLOR_MIN = 5;
const COLOR_MAX = 9;
const COLOR_SWAP_CHANCE = 0.35;

const PHOTOS = Array.from(
  { length: PHOTO_COUNT },
  (_, i) => `/collage/villee-${String(i + 1).padStart(2, "0")}.jpg`,
);

// Plain class literals so Tailwind's scanner picks them up.
const TINT_CLASSES: Record<string, string> = {
  rust: "bg-rust",
  forest: "bg-forest",
  plum: "bg-plum",
  ochre: "bg-ochre",
  blush: "bg-blush",
  "rust-deep": "bg-rust-deep",
};

const BLOCK_TINTS = Object.keys(TINT_CLASSES).map((k) => `tint:${k}`);

const ROTATIONS = ["-rotate-2", "rotate-1", "rotate-2"];
const PLACEHOLDER_TINTS = [
  "bg-blush/50",
  "bg-ochre/25",
  "bg-forest/15",
  "bg-rust/15",
];

type Tile = { src: string; prevSrc: string | null; swappedAt: number };

const isTint = (src: string) => src.startsWith("tint:");
const randomOf = <T,>(arr: readonly T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

// Fades in only once the file has actually loaded — swapping or first
// paint never pops a half-downloaded image onto the screen.
function PhotoLayer({ src }: { src: string }) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // onLoad doesn't fire for images that finished before hydration.
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <Image
      ref={ref}
      src={src}
      alt=""
      fill
      sizes={SIZES}
      onLoad={() => setLoaded(true)}
      className={`object-cover transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function TintLayer({ token }: { token: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`absolute inset-0 ${TINT_CLASSES[token.slice(5)]} transition-opacity duration-700 ease-out ${
        on ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function TileLayer({ src }: { src: string }) {
  return isTint(src) ? <TintLayer token={src} /> : <PhotoLayer src={src} />;
}

// Seed: every 4th tile is a color block (8 of 32) — 24 photos on the
// wall, 9 on the bench for rotation.
function initialTiles(): Tile[] {
  let photo = 0;
  return Array.from({ length: TILE_COUNT }, (_, i) => ({
    src:
      i % 4 === 3
        ? BLOCK_TINTS[i % BLOCK_TINTS.length]
        : PHOTOS[photo++],
    prevSrc: null,
    swappedAt: 0,
  }));
}

export function CollageBackdrop() {
  const [tiles, setTiles] = useState<Tile[]>(initialTiles);
  // Warm the browser cache for benched photos after the hero settles,
  // so tile swaps crossfade immediately instead of waiting on a download.
  const [warmCache, setWarmCache] = useState(false);

  useEffect(() => {
    // Wait for the page (visible tiles included) to finish loading before
    // fetching benched photos — they'd compete for bandwidth on first visit.
    let t: ReturnType<typeof setTimeout>;
    const arm = () => {
      t = setTimeout(() => setWarmCache(true), 1000);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return () => {
      window.removeEventListener("load", arm);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setTiles((prev) => {
        const now = Date.now();
        // Drop finished crossfade layers so their photos return to the
        // bench. Always return `next`, even when no swap happens below —
        // otherwise stale layers could starve the bench for good.
        const next = prev.map((t) =>
          t.prevSrc && now - t.swappedAt > FADE_DONE_MS
            ? { ...t, prevSrc: null }
            : t,
        );
        // A photo is out of play while visible OR still fading out —
        // otherwise it could appear in two tiles at once mid-fade.
        const inPlay = new Set(
          next.flatMap((t) => (t.prevSrc ? [t.src, t.prevSrc] : [t.src])),
        );
        const bench = PHOTOS.filter((p) => !inPlay.has(p));
        const candidates = next.flatMap((t, idx) =>
          now - t.swappedAt > TILE_COOLDOWN_MS ? [idx] : [],
        );
        if (candidates.length === 0) return next;
        const tileIndex = randomOf(candidates);
        const target = next[tileIndex];
        const colorCount = next.filter((t) => isTint(t.src)).length;

        let incoming: string;
        const wantColor =
          colorCount < COLOR_MAX && Math.random() < COLOR_SWAP_CHANCE;
        if (isTint(target.src) && colorCount <= COLOR_MIN && !wantColor) {
          // Keep at least COLOR_MIN blocks on the wall: recolor instead
          // of replacing the block with a photo.
          incoming = randomOf(BLOCK_TINTS.filter((c) => c !== target.src));
        } else if (wantColor && !isTint(target.src)) {
          incoming = randomOf(BLOCK_TINTS);
        } else if (bench.length > 0) {
          incoming = randomOf(bench);
        } else if (isTint(target.src)) {
          incoming = randomOf(BLOCK_TINTS.filter((c) => c !== target.src));
        } else {
          return next;
        }

        next[tileIndex] = { src: incoming, prevSrc: target.src, swappedAt: now };
        return next;
      });
    }, SWAP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden select-none">
      <div className="grid w-[104%] -translate-x-[2%] -translate-y-[2%] grid-cols-4 gap-1.5 p-1.5 sm:grid-cols-5 lg:grid-cols-8">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`relative aspect-[3/4] overflow-hidden rounded-md ${ROTATIONS[i % ROTATIONS.length]} ${PLACEHOLDER_TINTS[i % PLACEHOLDER_TINTS.length]}`}
          >
            {tile.prevSrc && <TileLayer key={tile.prevSrc} src={tile.prevSrc} />}
            <TileLayer key={tile.src} src={tile.src} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-cream/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/10 to-cream/60" />
      {warmCache && (
        <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
          {PHOTOS.map((src) => (
            <div key={src} className="relative h-px w-px">
              <Image src={src} alt="" fill sizes={SIZES} loading="eager" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
