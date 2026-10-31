"use client";

import React from "react";

export default function BrandTalkSection() {
  const handleExplore = () => {
    const el = document.getElementById("top-picks");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="brand-talk-section" id="brand-story">
      <div className="brand-talk-header">
        <h2 className="sub-header-title">TALK ABOUT YOUR BRAND</h2>
        <p className="sub-header-desc">
          Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.
        </p>
      </div>

      <div className="brand-talk-grid">
        {/* Left Candle Image with Ribbon */}
        <div className="brand-candle-card">
          <div className="candle-image-wrap">
            <img 
              src="/images/lavender-candle.jpg" 
              alt="Aesthetic lavender scented soy candle with dried lavender" 
              className="candle-img" 
            />
            <div className="organic-ribbon">
              <span>All About our brand</span>
            </div>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="brand-content-card">
          <div className="swash-decor"></div>
          <h3 className="brand-accent-title">The Perfect Combination of Style</h3>
          <p className="brand-body">
            Lollipops have been a beloved treat for generations, and their popularity shows no signs of slowing down. But have you ever wanted a lollipop that not only tastes great, but also looks great? Look no further than Lollipop Sleek!
          </p>
          <p className="brand-body-sub">
            We merge playful nostalgia with contemporary haute couture aesthetics. Indulge in sensory calm, lavender infusions, and accessories that spark conversations wherever you go.
          </p>
          <div className="brand-cta-row">
            <button className="btn-primary" onClick={handleExplore}>
              EXPLORE OUR CREATIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
