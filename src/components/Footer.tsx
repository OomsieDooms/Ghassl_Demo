"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Phone, ArrowUp } from "lucide-react";

const DecorativeArrows = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" opacity="0.4">
    <path d="M70 100 Q95 65 115 25" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <polygon points="115,25 106,35 120,38" fill="#f97316"/>
    <path d="M50 110 Q65 80 85 40" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <polygon points="85,40 76,51 91,51" fill="#ffffff"/>
    <path d="M30 115 Q45 85 60 55" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <polygon points="60,55 51,66 66,66" fill="#06b6d4"/>
  </svg>
);

export default function Footer() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = {
    about: [
      { ar: "من نحن", en: "About Us", href: "#about" },
      { ar: "الشروط والأحكام", en: "Terms and Conditions", href: "#terms" },
    ],
    important: [
      { ar: "سياسة الخصوصية", en: "Privacy Policy", href: "#privacy" },
      { ar: "تواصل معنا", en: "Contact Us", href: "#contact" },
    ]
  };

  return (
    <footer style={{ background: "#0b1120", color: "#f8fafc", fontFamily: isAr ? "var(--font-noto-arabic)" : "var(--font-outfit)", direction: isAr ? "rtl" : "ltr", position: "relative", paddingTop: 100 }}>
      <button
        onClick={scrollToTop}
        aria-label={isAr ? "العودة إلى الأعلى" : "Back to top"}
        style={{ position: "absolute", top: -28, right: isAr ? "auto" : "5%", left: isAr ? "5%" : "auto", width: 56, height: 56, borderRadius: "50%", background: "#1e293b", border: "4px solid #f9fafb", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, boxShadow: "0 10px 25px rgba(0,0,0,0.2)", transition: "background 0.2s, transform 0.2s", color: "#fff", zIndex: 10 }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2563eb"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1e293b"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
      >
        <ArrowUp size={20} color="#fff" />
        <span style={{ fontSize: "0.55rem", color: "#e2e8f0", lineHeight: 1, fontWeight: 600 }}>{isAr ? "الأعلى" : "Top"}</span>
      </button>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.6fr", gap: 48 }} className="footer-grid">
        <div>
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24 }}>{isAr ? "ننتظرك" : "Waiting for you"}</h3>
          <a href="tel:+966920017202" style={{ display: "flex", alignItems: "center", gap: 10, color: "#94a3b8", textDecoration: "none", fontSize: "1rem", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}>
            <Phone size={16} />+966920017202
          </a>
        </div>
        <div>
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24 }}>{isAr ? "من نحن" : "About Us"}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {footerLinks.about.map((l) => (
              <li key={l.en}><a href={l.href} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}>{isAr ? l.ar : l.en}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24 }}>{isAr ? "روابط مهمة" : "Important Links"}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {footerLinks.important.map((l) => (
              <li key={l.en}><a href={l.href} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}>{isAr ? l.ar : l.en}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 16 }}>{isAr ? "اشترك للحصول على عروض حصرية" : "Subscribe to get exclusive offers"}</h3>
          {subscribed ? (
            <div style={{ color: "#4ade80", fontSize: "1rem", padding: "12px 0", fontWeight: 500 }}>{isAr ? "✅ شكراً لاشتراكك!" : "✅ Thank you for subscribing!"}</div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", background: "#1e293b", borderRadius: 14, padding: 6, border: "1px solid #334155", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)" }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={isAr ? "أدخل بريدك الإلكتروني" : "Enter your email"} required
                style={{ flex: 1, background: "transparent", border: "none", padding: "0 16px", color: "#f8fafc", fontSize: "0.95rem", fontFamily: "inherit", outline: "none", minWidth: 0, textAlign: isAr ? "right" : "left" }} />
              <button type="submit" style={{ background: "#2563eb", border: "none", borderRadius: 10, padding: "12px 24px", color: "#fff", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#2563eb")}>
                {isAr ? "اشتراك" : "Subscribe"}
              </button>
            </form>
          )}
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 12, fontWeight: 400 }}>{isAr ? "سنرسل لك عروضاً حصرية وأخبار" : "We will send you exclusive offers and news"}</p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #1e293b", padding: "32px 48px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -10, left: isAr ? "auto" : 48, right: isAr ? 48 : "auto", opacity: 0.6 }}><DecorativeArrows /></div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", zIndex: 2 }}>
          <a href="https://www.youtube.com/@ghassl" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            style={{ color: "#94a3b8", lineHeight: 0, transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ef4444")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://x.com/ghasslapp" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
            style={{ color: "#94a3b8", lineHeight: 0, transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        <div style={{ textAlign: "center", color: "#64748b", fontSize: "0.9rem", lineHeight: 1.8, zIndex: 2 }}>
          <p style={{ margin: "0 0 4px 0" }}>{isAr ? "جميع الحقوق محفوظة © 2026" : "All rights reserved © 2026"}</p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
            {isAr ? "صنع مع" : "Made with"}<span style={{ color: "#ef4444", fontSize: "1.1rem" }}>♥</span>{isAr ? "بواسطة غسّل" : "by Ghassel"}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 0 24px 60px !important; text-align: center; }
          .footer-grid h3 { margin-bottom: 16px !important; }
          .footer-grid ul { align-items: center; }
          .footer-grid > div:first-child a { justify-content: center; }
        }
      `}</style>
    </footer>
  );
}
