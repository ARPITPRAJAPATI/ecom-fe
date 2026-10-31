"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function HeroSection() {
  const { setActiveCategory } = useStore();

  const handleShopClick = () => {
    setActiveCategory("all");
    const shop = document.getElementById("top-picks");
    if (shop) shop.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section" style={{ background: "radial-gradient(circle at 75% 40%, #E8EFE8 0%, #FAF7EE 70%)" }}>
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-text-col">
          <div className="sparkle-top-left" style={{ color: "var(--purple-brand)" }}>✦</div>
          <span className="script-subtitle" style={{ color: "var(--purple-brand)" }}>
            Curated by @aryaamishraa
          </span>
          <h1 className="hero-title" style={{ fontSize: "3.2rem", lineHeight: 1.15 }}>
            Handpicked <br />
            Vintage Rags 🧚‍♀️
          </h1>
          <p className="hero-description" style={{ color: "var(--purple-muted)" }}>
            An intentional archive of authentic Y2K butterfly camis, 90s lace corsets, ethereal pleated slip dresses, and fairycore trinkets. Curated for the slow fashion lover—every single rag is 1-of-1.
          </p>

          <div className="hero-cta-wrap">
            <button className="btn-primary" onClick={handleShopClick} style={{ background: "var(--purple-brand)" }}>
              <span>EXPLORE AVAILABLE RAGS 💘</span>
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </button>
            <a href="#about-us" className="btn-secondary" style={{ borderColor: "var(--purple-border)", color: "var(--purple-deep)" }}>
              OUR MANIFESTO
            </a>
          </div>

          <div className="hero-flower-decor" style={{ gap: 14 }}>
            <span style={{ fontSize: "1.2rem" }}>🧚‍♀️</span>
            <span style={{ fontSize: "1.1rem" }}>🎀</span>
            <span style={{ fontSize: "1rem" }}>💘</span>
            <span style={{ fontSize: "0.85rem", color: "var(--purple-muted)", fontWeight: 600 }}>
              Shipping Across 🇮🇳 • No COD ❌ • Genuine 1-of-1 Drops
            </span>
          </div>
        </div>

        {/* Right Media Column with Faeries Junk Arch Showcase */}
        <div className="hero-media-col">
          <div className="arch-glow-backdrop" style={{ background: "linear-gradient(135deg, rgba(67, 103, 70, 0.3), rgba(212, 140, 149, 0.2))" }}></div>
          <div className="arch-frame-wrapper" style={{ maxWidth: 400 }}>
            <div className="arch-frame-inner" style={{ border: "8px solid #FFFFFF", background: "#3D5E40" }}>
              <img 
                src="/images/faeries-junk-logo.jpg" 
                alt="Faeries Junk Vintage Logo and Aesthetic Banner"
                className="hero-img"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div className="hero-floating-pill" style={{ borderColor: "var(--purple-border)", gap: 10 }}>
              <span className="pill-dot" style={{ background: "var(--fairy-pink)" }}></span>
              <span>Available Drops 💘 • 1 of 1 Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
