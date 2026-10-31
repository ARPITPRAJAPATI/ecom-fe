"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function HeroSection() {
  const { setActiveCategory } = useStore();

  const handleShopClick = () => {
    setActiveCategory("all");
    const shop = document.getElementById("shop");
    if (shop) shop.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-text-col">
          <div className="sparkle-top-left">✦</div>
          <span className="script-subtitle">Chic &amp; Minimalist</span>
          <h1 className="hero-title">
            Soft Lavender <br />
            Muse Collection
          </h1>
          <p className="hero-description">
            Thoughtfully crafted accessories, fine baroque jewelry, and artisan scents designed to bring quiet luxury and Parisian ease into your everyday sanctuary.
          </p>

          <div className="hero-cta-wrap">
            <button className="btn-primary" onClick={handleShopClick}>
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </button>
            <a href="#about" className="btn-secondary">
              OUR STORY
            </a>
          </div>

          <div className="hero-flower-decor">
            <span className="flower-icon">🌸</span>
            <span className="flower-icon small">🪻</span>
            <span className="flower-icon tiny">✦</span>
            <span style={{ fontSize: "0.85rem", color: "var(--purple-muted)", fontWeight: 500, marginLeft: 6 }}>
              100% Sustainable &amp; Hand-Curated in Paris
            </span>
          </div>
        </div>

        {/* Right Media Column with Arch Frame */}
        <div className="hero-media-col">
          <div className="arch-glow-backdrop"></div>
          <div className="arch-frame-wrapper">
            <div className="arch-frame-inner">
              <img 
                src="/images/hero-model.jpg" 
                alt="Model wearing aesthetic lavender outfit"
                className="hero-img"
              />
            </div>

            <div className="hero-floating-pill">
              <span className="pill-dot"></span>
              <span>New Season Drop • SS26</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
