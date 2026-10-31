"use client";

import React from "react";

export default function VibeSection() {
  const handleShop = () => {
    const el = document.getElementById("top-picks");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="vibe-section">
      <div className="vibe-container">
        <div className="vibe-media-block">
          <div className="circle-portrait-wrap">
            <img 
              src="/images/girl-hat-lavender.jpg" 
              alt="Aesthetic portrait of girl with lavender bouquet in straw hat" 
              className="circle-img" 
            />
          </div>
          <div className="vibe-interior-wrap">
            <img 
              src="/images/vibe-decor.jpg" 
              alt="Cozy lilac bedroom nook with lavender pillows and tea" 
              className="vibe-interior-img" 
            />
          </div>
        </div>

        <div className="vibe-content-block">
          <span className="script-hero">The Vibe start</span>
          <h2 className="vibe-title">A Delicious and Stylish Candy Treat</h2>
          <p className="vibe-text">
            Infuse your surroundings with calming hues, dreamy textiles, and timeless floral accents. Every detail in your space should evoke peace, self-love, and an effortless chic lifestyle.
          </p>
          <button className="btn-primary" onClick={handleShop}>
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
