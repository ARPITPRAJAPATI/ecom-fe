"use client";

import React from "react";

export default function FeaturesStrip() {
  return (
    <section className="features-strip">
      <div className="features-container">
        <div className="feature-box">
          <span className="feature-script">Fresh &amp; Trendy</span>
          <h3>NEW ARRIVALS</h3>
          <p>Hand-picked weekly essentials</p>
        </div>
        <div className="feature-box highlight-box">
          <span className="feature-script">Why Choose Us</span>
          <h3>What's So Special</h3>
          <p>Artisanal quality &amp; delicate palettes</p>
        </div>
        <div className="feature-box">
          <span className="feature-script">Loved By Thousands</span>
          <h3>HIGHLY RECOMMENDED</h3>
          <div className="rating-stars">★★★★★</div>
        </div>
      </div>
    </section>
  );
}
