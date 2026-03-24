"use client";

import React, { useRef } from "react";
import HeroCanvas from "@/components/Hero/HeroCanvas";
import HeroTextOverlays from "@/components/Hero/HeroTextOverlays";
import ServiceGrid from "@/components/Services/ServiceGrid";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* 350vh container — more scroll height = more time to scrub through 298 frames */}
      <section ref={heroContainerRef} style={{ position: "relative", height: "350vh", width: "100%" }}>
        {/* Sticky canvas — the scroll engine reads containerRef directly */}
        <HeroCanvas containerRef={heroContainerRef} frameCount={298} />
        {/* Text overlays read the same container via its own scroll listener */}
        <HeroTextOverlays containerRef={heroContainerRef} />
      </section>

      {/* Services pricing cards */}
      <ServiceGrid />

      {/* App download CTA banner */}
      <AppDownloadBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
