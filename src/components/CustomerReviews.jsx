"use client";

import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      stars: "★★★★★",
      text: `"The butterfly halter cami is literally my dream fairycore piece!! The packaging had cute dried flowers, stickers, and the sweet lavender scent. So grateful to Arya for curating such unique gems 🧚‍♀️✨"`,
      name: "Ananya S.",
      location: "Verified Buyer · Mumbai 🇮🇳"
    },
    {
      stars: "★★★★★",
      text: `"Got the white pleated fairy slip dress and I've never received so many compliments! Fits like a glove. 100% authentic vintage rags, no fast fashion junk. Will camp for the next drop 💘"`,
      name: "Rhea M.",
      location: "Verified Buyer · Delhi 🇮🇳"
    },
    {
      stars: "★★★★★",
      text: `"Fast courier delivery to Bangalore! The brown suede shoulder bag is so durable and has that gorgeous vintage feel. Love supporting @faeriesjunk.store 🎀"`,
      name: "Diya K.",
      location: "Verified Buyer · Bangalore 🇮🇳"
    },
    {
      stars: "★★★★★",
      text: `"I was so worried about online vintage sizing, but the measurements Arya provided were spot on! The 90s lace bustier is stunning quality. Worth every rupee."`,
      name: "Tanvi P.",
      location: "Verified Buyer · Pune 🇮🇳"
    }
  ];

  return (
    <section className="reviews-section" id="faq" style={{ background: "var(--bg-primary)" }}>
      <div className="section-header-centered">
        <span className="script-hero" style={{ color: "var(--purple-brand)" }}>Fae Community 🎀</span>
        <h2 className="section-title-spaced" style={{ color: "var(--purple-deep)" }}>
          WHAT OUR FAIRIES SAY 💘
        </h2>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card" style={{ borderColor: "var(--purple-border)", background: "#FFFFFF" }}>
            <div className="review-stars" style={{ color: "var(--gold-accent)" }}>{r.stars}</div>
            <p className="review-text" style={{ color: "var(--purple-text)" }}>{r.text}</p>
            <div className="reviewer-meta" style={{ borderColor: "var(--purple-border)" }}>
              <strong style={{ color: "var(--purple-deep)" }}>{r.name}</strong>
              <span style={{ color: "var(--purple-muted)" }}>{r.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
