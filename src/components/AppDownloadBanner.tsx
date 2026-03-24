"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Apple App Store Badge (real image from ghassl.com)
const AppStoreButton = ({ isAr }: { isAr: boolean }) => (
  <a
    href="https://apps.apple.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-block", transition: "transform 0.2s, opacity 0.2s" }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
  >
    <img src="/ghassel-appstore.png" alt={isAr ? "متجر آبل" : "Download on the App Store"} style={{ height: 52, borderRadius: 10, boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }} />
  </a>
);

// Google Play Badge (real image from ghassl.com)
const GooglePlayButton = ({ isAr }: { isAr: boolean }) => (
  <a
    href="https://play.google.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-block", transition: "transform 0.2s, opacity 0.2s" }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
  >
    <img src="/ghassel-googleplay.png" alt={isAr ? "جوجل بلاي" : "Get it on Google Play"} style={{ height: 52, borderRadius: 10, boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }} />
  </a>
);

export default function AppDownloadBanner() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section
      style={{
        background: "#f9fafb",
        padding: "80px 24px",
        display: "flex",
        justifyContent: "center",
        fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: 999,
          maxWidth: 1050,
          width: "100%",
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.3)",
          position: "relative",
          overflow: "visible",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
        className="app-banner-pill"
      >
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "flex-end",
            marginTop: -30,
            marginBottom: -10,
          }}
          className="banner-illustration"
        >
          <img
            src="/ghassel-app-mockup.png"
            alt="Ghassel App"
            style={{
              height: 160,
              objectFit: "contain",
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))",
            }}
          />
        </div>

        <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", gap: 6 }}>
          <h2
            style={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              margin: 0,
              letterSpacing: isAr ? 0 : "-0.5px",
            }}
          >
            {isAr ? "غسيل سيارتك في أي مكان" : "Washing your car anywhere"}
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, fontWeight: 500 }}>
            {isAr ? "حمّل التطبيق الآن واحجز في ثوانِ" : "Download the app and book in seconds"}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isAr ? "row" : "row-reverse",
            gap: 16,
            flexShrink: 0,
          }}
          className="banner-buttons"
        >
          <AppStoreButton isAr={isAr} />
          <GooglePlayButton isAr={isAr} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .app-banner-pill {
            flex-direction: column !important;
            border-radius: 24px !important;
            padding: 40px 24px !important;
            text-align: center;
          }
          .banner-illustration {
            margin-top: 0 !important;
            margin-bottom: 8px !important;
          }
          .banner-buttons {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
