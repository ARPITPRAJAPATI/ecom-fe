"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section" id="about-us">
      <div className="about-container">
        {/* Left: Story Text */}
        <div className="about-text-col">
          <div className="decorative-star">✦</div>
          <span className="script-heading">Our Story</span>
          <h2 className="section-title">About Us</h2>
          <p className="lead-text">
            Born from a passion for graceful palettes, Lollipop Sleek is an ode to tranquility, subtle elegance, and empowering self-expression.
          </p>
          <p className="body-text">
            Every item in our boutique is curated with intentionality—from delicate lavender glassware candles to signature tailored silhouettes. We believe luxury isn't loud; it's a quiet aura of refined taste, serene living, and thoughtful details.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Ethically Crafted</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">40K+</span>
              <span className="highlight-label">Happy Customers</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5 ★</span>
              <span className="highlight-label">Verified Ratings</span>
            </div>
          </div>
          <a href="#brand-story" className="text-link-btn">Read Our Manifesto →</a>
        </div>

        {/* Right: Multi-Image Showcase */}
        <div className="about-media-col">
          <div className="about-image-arch">
            <img 
              src="/images/lavender-vase.jpg" 
              alt="Minimalist white vase with purple lavender stems" 
              className="arch-img" 
            />
            <span className="image-label">Botanical Simplicity</span>
          </div>
          <div className="about-image-framed">
            <div className="frame-border">
              <img 
                src="/images/peony-basket.jpg" 
                alt="Fresh blooming pink peonies bouquet in wicker basket" 
                className="framed-img" 
              />
            </div>
            <span className="frame-tag">Handcrafted Florals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
