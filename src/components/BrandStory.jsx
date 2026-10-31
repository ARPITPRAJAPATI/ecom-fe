"use client";

import React from "react";
import { Check, HeartHandshake, Leaf, Gem } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="brand-story-section">
      <div className="brand-story-grid">
        {/* Left: Overlapping Editorial Images */}
        <div className="story-imagery-col">
          <div className="story-img-main-wrap">
            <img 
              src="/images/peony-basket.jpg" 
              alt="Fresh peonies in artisan basket with lavender accents"
              className="story-img-primary"
              loading="lazy"
            />
          </div>
          <div className="story-img-secondary-wrap">
            <img 
              src="/images/lavender-vase.jpg" 
              alt="Ceramic fluted vase with dried lavender bouquet"
              className="story-img-secondary"
              loading="lazy"
            />
          </div>
          <div className="story-quote-card">
            <p className="quote-text">“Elegance is not about being noticed, it's about being remembered.”</p>
            <span className="quote-author">— Maison Lollipop Sleek</span>
          </div>
        </div>

        {/* Right: Editorial Narrative */}
        <div className="story-content-col">
          <span className="section-eyebrow">OUR PHILOSOPHY</span>
          <h2 className="section-title">The Art of Slow Parisian Elegance</h2>
          
          <p className="story-paragraph">
            Founded with a passion for understated beauty, <strong>Lollipop Sleek</strong> brings together the timeless charm of Parisian boutiques and modern intentional living. Every piece in our collection is curated to evoke serenity, romance, and enduring style.
          </p>

          <p className="story-paragraph">
            We work exclusively with small independent European ateliers, prioritizing recycled metals, biodegradable cellulose acetate, and natural botanical soy waxes.
          </p>

          {/* Pillars List */}
          <div className="story-pillars-grid">
            <div className="story-pillar-item">
              <div className="pillar-bullet-icon">
                <Leaf size={16} color="#8e6c88" />
              </div>
              <div>
                <h4 className="pillar-heading">Mindful Sourcing</h4>
                <p className="pillar-desc">100% cruelty-free botanicals and recycled metals.</p>
              </div>
            </div>

            <div className="story-pillar-item">
              <div className="pillar-bullet-icon">
                <Gem size={16} color="#8e6c88" />
              </div>
              <div>
                <h4 className="pillar-heading">Artisan Small Batches</h4>
                <p className="pillar-desc">Crafted in limited runs to minimize excess waste.</p>
              </div>
            </div>

            <div className="story-pillar-item">
              <div className="pillar-bullet-icon">
                <HeartHandshake size={16} color="#8e6c88" />
              </div>
              <div>
                <h4 className="pillar-heading">Ethical Fair Ateliers</h4>
                <p className="pillar-desc">Supporting traditional European craftsmen families.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
