"use client";

import React from "react";

export default function FeaturesStrip() {
  return (
    <section className="features-strip" style={{ background: "#E8EFE8", borderColor: "var(--purple-border)" }}>
      <div className="features-container">
        <div className="feature-box" style={{ background: "rgba(255, 255, 255, 0.85)" }}>
          <span className="feature-script" style={{ color: "var(--fairy-pink)" }}>Weekly Drops</span>
          <h3 style={{ color: "var(--purple-deep)" }}>AVAILABLE 💘</h3>
          <p>Authentic 1-of-1 handpicked vintage rags</p>
        </div>

        <div className="feature-box highlight-box" style={{ background: "#436746", color: "#FAF7EE" }}>
          <span className="feature-script" style={{ color: "#FAF7EE" }}>Archive Vault</span>
          <h3 style={{ color: "#FAF7EE" }}>SOLD 💫</h3>
          <p style={{ color: "rgba(250, 247, 238, 0.8)" }}>Cherished treasures now in loving wardrobes</p>
        </div>

        <div className="feature-box" style={{ background: "rgba(255, 255, 255, 0.85)" }}>
          <span className="feature-script" style={{ color: "var(--fairy-pink)" }}>Fae Community</span>
          <h3 style={{ color: "var(--purple-deep)" }}>REVIEWS 🎀</h3>
          <div className="rating-stars" style={{ color: "var(--gold-accent)" }}>★★★★★</div>
        </div>
      </div>
    </section>
  );
}
