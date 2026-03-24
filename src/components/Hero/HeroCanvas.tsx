"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroCanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  frameCount: number;
}

export default function HeroCanvas({ containerRef, frameCount }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const setSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  useEffect(() => {
    const imgArray: HTMLImageElement[] = new Array(frameCount);
    imagesRef.current = imgArray;
    loadedCountRef.current = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/hero-sequence/${i + 1}.jpg`;
      img.onload = () => { loadedCountRef.current += 1; if (loadedCountRef.current === frameCount) { setLoaded(true); drawFrame(0); } };
      img.onerror = () => { loadedCountRef.current += 1; if (loadedCountRef.current === frameCount) { setLoaded(true); drawFrame(0); } };
      imgArray[i] = img;
    }
  }, [frameCount]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || img.naturalWidth === 0) return;
    const cw = canvas.width, ch = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;
    let dw, dh, dx, dy;
    if (canvasRatio > imgRatio) { dw = cw; dh = cw / imgRatio; dx = 0; dy = (ch - dh) / 2; }
    else { dw = ch * imgRatio; dh = ch; dx = (cw - dw) / 2; dy = 0; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
    currentFrameRef.current = index;
  };

  useEffect(() => {
    if (!loaded) return;
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const scrolled = -rect.top;
        const scrollable = container.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, scrolled / scrollable));
        const frameIndex = Math.min(Math.floor(progress * frameCount), frameCount - 1);
        drawFrame(frameIndex);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener("scroll", handleScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [loaded, frameCount, containerRef]);

  return (
    <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10 text-white flex-col gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="font-semibold tracking-widest text-sm uppercase">Loading Sequence…</p>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.5))", pointerEvents: "none", zIndex: 10 }} />
    </div>
  );
}
