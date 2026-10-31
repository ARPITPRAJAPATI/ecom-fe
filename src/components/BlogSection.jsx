"use client";

import React from "react";

export default function BlogSection() {
  const posts = [
    {
      img: "/images/blog-comfy-chic.jpg",
      tag: "Fashion & Comfort",
      date: "OCTOBER 28, 2026",
      title: "Comfy Chic: Styling Lilac Knitwear for Crisp Mornings",
      summary: "How to incorporate cozy lavender layers into your everyday wardrobe seamlessly."
    },
    {
      img: "/images/blog-glamorous.jpg",
      tag: "Accessories",
      date: "OCTOBER 24, 2026",
      title: "Glamorous Grabbers: The Secret Behind Minimalist Jewelry",
      summary: "Elevate your daily outfits with subtle amethyst accents and timeless gold finishes."
    },
    {
      img: "/images/lavender-candle.jpg",
      tag: "Wellness",
      date: "OCTOBER 19, 2026",
      title: "Reinvigorating Aromas: Transforming Your Space into a Sanctuary",
      summary: "The science and beauty of natural French lavender soy candles for relaxation."
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="section-header-centered">
        <span className="script-badge">Editorial Stories</span>
        <h2 className="section-title-spaced">BLOG POSTS</h2>
        <p className="section-subtitle">Discover the art of peaceful aesthetics, styling guides, and holistic living.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post, idx) => (
          <article key={idx} className="blog-card">
            <div className="blog-thumb">
              <img src={post.img} alt={post.title} />
              <span className="blog-tag">{post.tag}</span>
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <a href="#blog" className="read-more">Read Story →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
