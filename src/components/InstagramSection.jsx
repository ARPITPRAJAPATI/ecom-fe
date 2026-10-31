"use client";

import React from "react";

function InstagramIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

export default function InstagramSection() {
  const images = [
    { src: "/images/blog-comfy-chic.jpg", alt: "Instagram post 1" },
    { src: "/images/hero-model.jpg", alt: "Instagram post 2" },
    { src: "/images/peony-basket.jpg", alt: "Instagram post 3" },
    { src: "/images/girl-hat-lavender.jpg", alt: "Instagram post 4" },
    { src: "/images/blog-glamorous.jpg", alt: "Instagram post 5" }
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-header">
        <span className="insta-decor">✦</span>
        <h2 className="instagram-title">
          <InstagramIcon size={22} color="var(--purple-brand)" />
          <span>FOLLOW ON INSTAGRAM</span> <span className="handle">@LOLLIPOPSLEEK</span>
        </h2>
        <span className="insta-decor">✦</span>
      </div>

      <div className="instagram-grid">
        {images.map((img, i) => (
          <div key={i} className="insta-item">
            <img src={img.src} alt={img.alt} />
            <div className="insta-hover-overlay">
              <InstagramIcon size={24} color="#fff" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
