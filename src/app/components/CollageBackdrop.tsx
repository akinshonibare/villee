"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// One tile swaps per tick — a swap every ~1.1s keeps the wall constantly
// moving while each individual crossfade still gets room to breathe.
const SWAP_INTERVAL_MS = 1100;
// Don't re-swap a tile that's still crossfading from its last swap.
const SWAP_COOLDOWN_TILES = 6;

// Faded patchwork of real event photos behind the landing hero,
// washed out under cream so the type stays readable (blind8-style).
// 24 tiles drawn from 33 photos — no photo appears twice at once;
// every few seconds one tile crossfades to a photo from the bench.
const PHOTO_COUNT = 33;
const TILE_COUNT = 24;
const SIZES = "(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 17vw";

const PHOTOS = Array.from(
  { length: PHOTO_COUNT },
  (_, i) => `/collage/villee-${String(i + 1).padStart(2, "0")}.jpg`,
);

const ROTATIONS = ["-rotate-2", "rotate-1", "rotate-2"];
const TINTS = ["bg-blush/50", "bg-ochre/25", "bg-forest/15", "bg-rust/15"];

type Tile = { src: string; prevSrc: string | null };

// Fades in only once the file has actually loaded — swapping or first
// paint never pops a half-downloaded image onto the screen.
function TileImage({ src }: { src: string }) {
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

export function CollageBackdrop() {
  const [tiles, setTiles] = useState<Tile[]>(() =>
    PHOTOS.slice(0, TILE_COUNT).map((src) => ({ src, prevSrc: null })),
  );
  // Warm the browser cache for benched photos after the hero settles,
  // so tile swaps crossfade immediately instead of waiting on a download.
  const [warmCache, setWarmCache] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setWarmCache(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const recentlySwapped = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setTiles((prev) => {
        // Drop finished crossfade layers (anything outside the cooldown
        // window is done fading) so their photos return to the bench.
        const next = prev.map((t, idx) =>
          t.prevSrc && !recentlySwapped.current.includes(idx)
            ? { ...t, prevSrc: null }
            : t,
        );
        // A photo is out of play while visible OR still fading out —
        // otherwise it could appear in two tiles at once mid-fade.
        const inPlay = new Set(
          next.flatMap((t) => (t.prevSrc ? [t.src, t.prevSrc] : [t.src])),
        );
        const bench = PHOTOS.filter((p) => !inPlay.has(p));
        if (bench.length === 0) return prev;
        let tileIndex = Math.floor(Math.random() * next.length);
        while (recentlySwapped.current.includes(tileIndex)) {
          tileIndex = Math.floor(Math.random() * next.length);
        }
        recentlySwapped.current = [
          ...recentlySwapped.current.slice(1 - SWAP_COOLDOWN_TILES),
          tileIndex,
        ];
        const incoming = bench[Math.floor(Math.random() * bench.length)];
        next[tileIndex] = { src: incoming, prevSrc: next[tileIndex].src };
        return next;
      });
    }, SWAP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden select-none">
      <div className="grid w-[104%] -translate-x-[2%] -translate-y-[2%] grid-cols-3 gap-2 p-2 sm:grid-cols-5 lg:grid-cols-6">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`relative aspect-[3/4] overflow-hidden rounded-lg ${ROTATIONS[i % ROTATIONS.length]} ${TINTS[i % TINTS.length]}`}
          >
            {tile.prevSrc && <TileImage key={tile.prevSrc} src={tile.prevSrc} />}
            <TileImage key={tile.src} src={tile.src} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-cream/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/20 to-cream/70" />
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
