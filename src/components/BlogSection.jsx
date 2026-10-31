"use client";

import React from "react";

export default function BlogSection() {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      tag: "Fairycore Styling",
      date: "OCTOBER 29, 2026",
      title: "How to Style Vintage Rags & Butterfly Halters in 2026",
      summary: "Layering lace camis, raw crystal charms, and distressed leather to achieve the effortless whimsical woodland aesthetic."
    },
    {
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      tag: "Slow Fashion",
      date: "OCTOBER 24, 2026",
      title: "Why 1-of-1 Thrift Drops Beat Fast Fashion Every Single Time",
      summary: "Behind the scenes with @aryaamishraa: The slow, thoughtful art of scouring flea markets and textile archives across India."
    },
    {
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
      tag: "Care Guide",
      date: "OCTOBER 19, 2026",
      title: "Preserving Delicate Vintage Silks, Lace & Suede at Home",
      summary: "Simple gentle washing and steaming rituals to keep your precious vintage garments lasting for decades."
    }
  ];

  return (
    <section className="blog-section" id="blog" style={{ background: "#F2EDE2" }}>
      <div className="section-header-centered">
        <span className="script-badge" style={{ color: "var(--purple-brand)" }}>Fae Diaries</span>
        <h2 className="section-title-spaced" style={{ color: "var(--purple-deep)" }}>
          EDITORIAL &amp; THRIFT STORIES 🧚‍♀️
        </h2>
        <p className="section-subtitle" style={{ color: "var(--purple-muted)" }}>
          Musings on sustainable vintage fashion, styling guides, and conscious slow wardrobes.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post, idx) => (
          <article key={idx} className="blog-card" style={{ borderColor: "var(--purple-border)", background: "#FFFFFF" }}>
            <div className="blog-thumb">
              <img src={post.img} alt={post.title} />
              <span className="blog-tag" style={{ background: "rgba(67, 103, 70, 0.9)", color: "#FAF7EE" }}>
                {post.tag}
              </span>
            </div>
            <div className="blog-content">
              <span className="blog-date" style={{ color: "var(--purple-muted)" }}>{post.date}</span>
              <h3 className="blog-title" style={{ color: "var(--purple-deep)" }}>{post.title}</h3>
              <p className="blog-summary" style={{ color: "var(--purple-muted)" }}>{post.summary}</p>
              <a href="#blog" className="read-more" style={{ color: "var(--purple-brand)" }}>Read Story →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
