"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, MapPin, User, Phone, Star, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { ar: "الرئيسية", en: "Home" },
    { ar: "تواصل معنا", en: "Contact Us" },
    { ar: "وين تلاقينا؟", en: "Our Locations" },
  ];

  const topBarLeft = isAr
    ? [{ label: "الأسئلة الشائعة", href: "#faq" }, { label: "من نحن", href: "#about" }]
    : [{ label: "About Us", href: "#about" }, { label: "FAQ", href: "#faq" }];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        fontFamily: isAr ? "var(--font-noto-arabic), sans-serif" : "var(--font-outfit), sans-serif",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Top Announcement Bar */}
      <div
        style={{
          background: "#111827",
          color: "#d1d5db",
          fontSize: "0.78rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 64px",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {topBarLeft.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#9ca3af")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "#e5e7eb", fontWeight: 500 }}>
            {isAr ? "ثقة سنين ومحبة دائمة" : "Trust for years and love"}
          </span>
          <div style={{ display: "flex", gap: 2 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginLeft: isAr ? 0 : 8, marginRight: isAr ? 8 : 0 }}>
            <a href="https://x.com/ghasslapp" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
              style={{ color: "#9ca3af", transition: "color 0.2s", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@ghassl" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              style={{ color: "#9ca3af", transition: "color 0.2s", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")}>
              <svg width="17" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="tel:+966500000000" aria-label="Phone"
              style={{ color: "#9ca3af", transition: "color 0.2s", lineHeight: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")}>
              <Phone size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 64px",
          height: "62px",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/ghassel-logo.jpg"
              alt="Ghassel Logo"
              style={{ height: 42, width: 42, borderRadius: 10, objectFit: "contain", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
            />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="hidden-mobile">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#"
                style={{ color: "#374151", textDecoration: "none", fontWeight: 500, fontSize: "0.92rem", padding: "6px 12px", borderRadius: 8, transition: "color 0.2s, background 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#2563EB"; (e.currentTarget as HTMLAnchorElement).style.background = "#EFF6FF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                {isAr ? link.ar : link.en}
              </a>
            ))}
          </div>
        </div>

        <button
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 20px", border: "1.5px solid #e5e7eb", borderRadius: 999, background: "#F9FAFB", cursor: "pointer", color: "#374151", fontWeight: 500, fontSize: "0.9rem", whiteSpace: "nowrap", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
        >
          <MapPin size={16} color="#2563EB" />
          {isAr ? "اختر موقعك" : "Select your location"}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, background: langOpen ? "#F3F4F6" : "transparent", cursor: "pointer", color: "#374151", fontWeight: 600, fontSize: "0.85rem", transition: "border-color 0.2s, background 0.2s", fontFamily: "inherit" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {isAr ? "العربية" : "English"}
              <ChevronDown size={13} style={{ transform: langOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
            </button>
            {langOpen && (
              <>
                <div onClick={() => setLangOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 98 }} />
                <div style={{ position: "absolute", top: "calc(100% + 8px)", right: isAr ? "auto" : 0, left: isAr ? 0 : "auto", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", minWidth: 160, zIndex: 99, overflow: "hidden", padding: 6 }}>
                  {[
                    { code: "ar" as const, label: "العربية", abbr: "AR", sub: "Arabic" },
                    { code: "en" as const, label: "English", abbr: "EN", sub: "الإنجليزية" },
                  ].map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLanguage(opt.code); setLangOpen(false); }}
                      style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 8, border: "none", background: language === opt.code ? "#EFF6FF" : "transparent", cursor: "pointer", fontFamily: "inherit", textAlign: isAr ? "right" : "left", transition: "background 0.15s" }}
                      onMouseEnter={(e) => { if (language !== opt.code) (e.currentTarget as HTMLButtonElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={(e) => { if (language !== opt.code) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, background: language === opt.code ? "#2563EB" : "#e5e7eb", color: language === opt.code ? "#fff" : "#6b7280", borderRadius: 5, padding: "2px 6px", letterSpacing: 0.5, fontFamily: "var(--font-outfit), sans-serif" }}>
                        {opt.abbr}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
                        <span style={{ fontWeight: 600, fontSize: "0.9rem", color: language === opt.code ? "#2563EB" : "#374151" }}>{opt.label}</span>
                        <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{opt.sub}</span>
                      </div>
                      {language === opt.code && <span style={{ marginLeft: "auto", color: "#2563EB", fontSize: "0.8rem" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <button
            style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 18px", border: "none", borderRadius: 8, background: "#111827", cursor: "pointer", color: "#fff", fontWeight: 600, fontSize: "0.9rem", transition: "background 0.2s, transform 0.1s", fontFamily: "inherit", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2563EB"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#111827"; }}
          >
            <User size={15} />
            {isAr ? "تسجيل الدخول" : "Sign In"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ padding: 8, borderRadius: 8, border: "none", background: "transparent", cursor: "pointer", color: "#374151", display: "none" }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" onClick={() => setMobileOpen(false)}
              style={{ color: "#374151", textDecoration: "none", fontWeight: 500, fontSize: "1rem", padding: "10px 12px", borderRadius: 8, display: "block" }}
            >
              {isAr ? link.ar : link.en}
            </a>
          ))}
          <div style={{ height: 1, background: "#e5e7eb", margin: "8px 0" }} />
          <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", border: "none", background: "transparent", cursor: "pointer", color: "#374151", fontWeight: 600, fontSize: "1rem", fontFamily: "inherit", textAlign: isAr ? "right" : "left" }}>
            <MapPin size={16} color="#2563EB" />
            {isAr ? "اختر موقعك" : "Select your location"}
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", border: "none", background: "transparent", cursor: "pointer", color: "#374151", fontWeight: 600, fontSize: "1rem", fontFamily: "inherit" }}>
            <User size={16} />
            {isAr ? "تسجيل الدخول" : "Sign In"}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
