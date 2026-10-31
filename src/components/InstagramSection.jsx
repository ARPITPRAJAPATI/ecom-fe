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
  const posts = [
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", label: "Butterfly Cami 💘" },
    { src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop", label: "Fairy Slip Dress 💫" },
    { src: "/images/faeries-junk-logo.jpg", label: "@faeriesjunk.store 🧚‍♀️" },
    { src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop", label: "Vintage Suede Bag 👜" },
    { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", label: "90s Lace Bustier 🎀" }
  ];

  return (
    <section className="instagram-section" id="instagram" style={{ background: "var(--bg-primary)" }}>
      <div className="instagram-header">
        <span className="insta-decor" style={{ color: "var(--purple-brand)" }}>✦</span>
        <h2 className="instagram-title" style={{ color: "var(--purple-deep)" }}>
          <InstagramIcon size={22} color="var(--purple-brand)" />
          <a 
            href="https://www.instagram.com/faeriesjunk.store/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span>FOLLOW ON INSTAGRAM</span> <span className="handle" style={{ color: "var(--purple-brand)" }}>@FAERIESJUNK.STORE</span>
          </a>
        </h2>
        <span className="insta-decor" style={{ color: "var(--purple-brand)" }}>✦</span>
      </div>

      <p style={{ textAlign: "center", color: "var(--purple-muted)", fontSize: "0.9rem", marginTop: -24, marginBottom: 32 }}>
        Curated &amp; handpicked vintage rags by @aryaamishraa • Drop alerts &amp; claims on stories 🧚‍♀️
      </p>

      <div className="instagram-grid">
        {posts.map((post, i) => (
          <a 
            key={i} 
            href="https://www.instagram.com/faeriesjunk.store/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="insta-item"
          >
            <img src={post.src} alt={post.label} />
            <div className="insta-hover-overlay" style={{ background: "rgba(37, 56, 39, 0.75)" }}>
              <div style={{ textAlign: "center" }}>
                <InstagramIcon size={26} color="#FAF7EE" />
                <span style={{ display: "block", fontSize: "0.8rem", color: "#FAF7EE", marginTop: 6, fontWeight: 600 }}>
                  {post.label}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
