"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section" id="about-us" style={{ background: "var(--bg-primary)" }}>
      <div className="about-container">
        {/* Left: Story Text */}
        <div className="about-text-col">
          <div className="decorative-star" style={{ color: "var(--purple-brand)" }}>✦</div>
          <span className="script-heading" style={{ color: "var(--purple-brand)" }}>The Curator</span>
          <h2 className="section-title" style={{ color: "var(--purple-deep)" }}>
            About Faeries Junk
          </h2>
          <p className="lead-text" style={{ color: "var(--purple-deep)" }}>
            Founded and hand-curated by <strong>@aryaamishraa</strong>, Faeries Junk is an ode to whimsical fairycore aesthetics, sustainable slow fashion, and the timeless magic of vintage clothing.
          </p>
          <p className="body-text" style={{ color: "var(--purple-muted)" }}>
            In a world overflowing with disposable fast fashion, we handpick individual vintage rags that tell a story. From delicate 90s French lace camisoles and pleated butterfly halters to weathered leather shoulder bags, every piece is inspected, dry cleaned, and prepared for its next chapter in your wardrobe.
          </p>
          
          <div className="about-highlights" style={{ borderColor: "var(--purple-border)" }}>
            <div className="highlight-item">
              <span className="highlight-number" style={{ color: "var(--purple-brand)" }}>100%</span>
              <span className="highlight-label">Pre-Loved Vintage</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number" style={{ color: "var(--purple-brand)" }}>1 of 1</span>
              <span className="highlight-label">Unique Drops</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number" style={{ color: "var(--purple-brand)" }}>🇮🇳</span>
              <span className="highlight-label">All-India Delivery</span>
            </div>
          </div>
          <a href="https://www.instagram.com/faeriesjunk.store/" target="_blank" rel="noopener noreferrer" className="text-link-btn" style={{ color: "var(--purple-brand)" }}>
            Follow @faeriesjunk.store on Instagram →
          </a>
        </div>

        {/* Right: Multi-Image Showcase */}
        <div className="about-media-col">
          <div className="about-image-arch" style={{ borderColor: "#FFFFFF" }}>
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
              alt="Model wearing vintage butterfly top" 
              className="arch-img" 
            />
            <span className="image-label" style={{ background: "rgba(255, 255, 255, 0.92)", color: "var(--purple-deep)" }}>
              Curated Vintage 🧚‍♀️
            </span>
          </div>
          <div className="about-image-framed">
            <div className="frame-border" style={{ borderColor: "#E8EFE8" }}>
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" 
                alt="Fairycore pleated white slip dress" 
                className="framed-img" 
              />
            </div>
            <span className="frame-tag" style={{ color: "var(--fairy-pink)" }}>
              Fairycore Archives 💫
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
