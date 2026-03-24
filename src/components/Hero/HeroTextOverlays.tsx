"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface HeroTextOverlaysProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const slides = [
  { id: 1, ar: "ثقة سنين ومحبة دائمة", en: "Years of Trust, Lasting Care", positionStyle: { top: "25%", insetInlineStart: "4%" }, inStart: 0.05, peakStart: 0.1, peakEnd: 0.2, outEnd: 0.28, isCta: false },
  { id: 2, ar: "ما يحتاج تروح إحنا نجيك", en: "Don't go anywhere, we come to you", positionStyle: { top: "33%", insetInlineEnd: "4%" }, inStart: 0.32, peakStart: 0.38, peakEnd: 0.48, outEnd: 0.55, isCta: false },
  { id: 3, ar: "خدمة احترافية عند باب بيتك", en: "Professional service at your doorstep", positionStyle: { bottom: "33%", insetInlineStart: "4%" }, inStart: 0.58, peakStart: 0.64, peakEnd: 0.74, outEnd: 0.81, isCta: false },
  { id: 4, ar: "احجز غسلتك الآن", en: "Book Your Wash Now", positionStyle: { bottom: "28%", insetInlineStart: "4%" }, inStart: 0.83, peakStart: 0.88, peakEnd: 0.96, outEnd: 1.0, isCta: true },
];

function getOpacity(slide: typeof slides[0], progress: number) {
  const { inStart, peakStart, peakEnd, outEnd } = slide;
  if (progress < inStart || progress > outEnd) return 0;
  if (progress >= peakStart && progress <= peakEnd) return 1;
  if (progress < peakStart) return (progress - inStart) / (peakStart - inStart);
  return 1 - (progress - peakEnd) / (outEnd - peakEnd);
}

function getY(slide: typeof slides[0], progress: number) {
  const { inStart, peakStart, peakEnd, outEnd } = slide;
  if (progress < inStart) return 30;
  if (progress < peakStart) return 30 * (1 - (progress - inStart) / (peakStart - inStart));
  if (progress <= peakEnd) return 0;
  return -30 * (progress - peakEnd) / (outEnd - peakEnd);
}

function getSplashOpacity(progress: number) {
  if (progress <= 0.04) return 1;
  if (progress >= 0.12) return 0;
  return 1 - (progress - 0.04) / 0.08;
}

function getSplashY(progress: number) {
  if (progress <= 0.04) return 0;
  if (progress >= 0.12) return -40;
  return -40 * (progress - 0.04) / 0.08;
}

export default function HeroTextOverlays({ containerRef }: HeroTextOverlaysProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const scrolled = -rect.top;
        const scrollable = container.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        setScrollProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener("scroll", handleScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [containerRef]);

  const splashOpacity = getSplashOpacity(scrollProgress);
  const splashY = getSplashY(scrollProgress);

  return (
    <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", marginTop: "-100vh", pointerEvents: "none", zIndex: 20, direction: isAr ? "rtl" : "ltr" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, opacity: splashOpacity, transform: `translateY(${splashY}px)`, transition: "opacity 0.06s linear, transform 0.06s linear", pointerEvents: "none", textAlign: "center", padding: "0 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37, 99, 235, 0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(37, 99, 235, 0.4)", borderRadius: 999, padding: "6px 20px", marginBottom: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6", display: "inline-block", boxShadow: "0 0 8px #3b82f6" }} />
          <span style={{ color: "#93c5fd", fontWeight: 600, fontSize: "0.95rem", letterSpacing: isAr ? 0 : 1 }}>{isAr ? "الباقة المثالية لك" : "The perfect package for you"}</span>
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.15, margin: 0, textShadow: "0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)", fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)", letterSpacing: isAr ? 0 : "-2px" }}>
          {isAr ? (<>مهما كان احتياجك<br /><span style={{ color: "#60a5fa" }}>باقتنا تضبطك</span></>) : (<>Whatever you need,<br /><span style={{ color: "#60a5fa" }}>our package fits.</span></>)}
        </h1>
        <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase" }}>{isAr ? "تمرير للأسفل" : "Scroll"}</span>
          <div style={{ width: 24, height: 40, border: "2px solid rgba(255,255,255,0.3)", borderRadius: 999, display: "flex", justifyContent: "center", paddingTop: 6 }}>
            <div style={{ width: 4, height: 8, background: "rgba(255,255,255,0.6)", borderRadius: 999, animation: "scrollDot 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      {slides.map((slide) => {
        const opacity = getOpacity(slide, scrollProgress);
        const y = getY(slide, scrollProgress);
        return (
          <div key={slide.id} style={{ position: "absolute", maxWidth: "420px", ...slide.positionStyle, opacity, transform: `translateY(${y}px)`, transition: "opacity 0.08s linear, transform 0.08s linear", pointerEvents: slide.isCta ? "auto" : "none" }}>
            {slide.isCta ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, textShadow: "0 4px 24px rgba(0,0,0,0.6)", margin: 0, fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)" }}>
                  {language === "ar" ? slide.ar : slide.en}
                </h2>
                <button
                  style={{ background: "#2563EB", color: "#fff", border: "none", padding: "14px 32px", borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", alignSelf: "flex-start", boxShadow: "0 8px 32px rgba(37,99,235,0.4)", transition: "background 0.2s, transform 0.2s", fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2563EB"; }}
                >
                  {language === "ar" ? "احجز الآن" : "Book Now"}
                </button>
              </div>
            ) : (
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, textShadow: "0 4px 24px rgba(0,0,0,0.6)", margin: 0, fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)" }}>
                {language === "ar" ? slide.ar : slide.en}
              </h2>
            )}
          </div>
        );
      })}

      <style>{`
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateY(0); }
          75% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 0; transform: translateY(12px); }
        }
      `}</style>
    </div>
  );
}
