"use client";

import React from "react";

export default function VibeSection() {
  const handleShop = () => {
    const el = document.getElementById("top-picks");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="vibe-section" style={{ background: "var(--bg-primary)" }}>
      <div className="vibe-container">
        <div className="vibe-media-block">
          <div className="circle-portrait-wrap" style={{ borderColor: "#FFFFFF" }}>
            <img 
              src="/images/faeries-junk-logo.jpg" 
              alt="Faeries Junk Retro Fairy Logo" 
              className="circle-img" 
            />
          </div>
          <div className="vibe-interior-wrap" style={{ borderColor: "#FFFFFF" }}>
            <img 
              src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop" 
              alt="Fairycore aesthetic clothing and decor" 
              className="vibe-interior-img" 
            />
          </div>
        </div>

        <div className="vibe-content-block">
          <span className="script-hero" style={{ color: "var(--purple-brand)" }}>The Fae Vibe 🧚‍♀️</span>
          <h2 className="vibe-title" style={{ color: "var(--purple-deep)" }}>
            Step Into Your Nostalgic Fairy Era
          </h2>
          <p className="vibe-text" style={{ color: "var(--purple-muted)" }}>
            Mix ethereal pleated skirts with chunky combat boots. Pair delicate 90s camis with slouchy distressed suede bags. At Faeries Junk, we celebrate unapologetic personal style and raw individuality.
          </p>
          <button className="btn-primary" onClick={handleShop} style={{ background: "var(--purple-brand)" }}>
            SHOP AVAILABLE RAGS 💘
          </button>
        </div>
      </div>
    </section>
  );
}
