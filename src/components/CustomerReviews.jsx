"use client";

import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      stars: "★★★★★",
      text: `"The lavender hand watch is even more gorgeous in person. The soft silicone strap is buttery smooth and the color is heavenly. Absolutely in love!"`,
      name: "Chloe S.",
      location: "Verified Buyer · New York"
    },
    {
      stars: "★★★★★",
      text: `"The packaging alone made me cry happy tears! Beautiful lavender wax seals, handwritten calligraphy, and the amethyst necklace sparkles so brilliantly."`,
      name: "Serena M.",
      location: "Verified Buyer · London"
    },
    {
      stars: "★★★★★",
      text: `"I ordered the sunglasses and hair clips. The subtle purple gradient on the sunglasses is pure luxury. Will definitely order again!"`,
      name: "Aria V.",
      location: "Verified Buyer · Paris"
    },
    {
      stars: "★★★★★",
      text: `"The soy candle fills my whole room with a calm, dreamy scent that isn't overpowering. Lollipop Sleek has become my favorite online boutique."`,
      name: "Elena R.",
      location: "Verified Buyer · Milan"
    }
  ];

  return (
    <section className="reviews-section" id="faq">
      <div className="section-header-centered">
        <span className="script-hero">Customer's Reviews</span>
        <h2 className="section-title-spaced">WHAT OUR COLLECTORS SAY</h2>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">{r.stars}</div>
            <p className="review-text">{r.text}</p>
            <div className="reviewer-meta">
              <strong>{r.name}</strong>
              <span>{r.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
