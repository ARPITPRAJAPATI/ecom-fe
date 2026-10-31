"use client";

import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "../data/products";

export default function JournalSection() {
  return (
    <section id="journal" className="journal-section">
      <div className="section-header text-center">
        <span className="section-eyebrow">THE JOURNAL</span>
        <h2 className="section-title">Stories & Style Inspiration</h2>
        <p className="section-subtitle">
          Musings on modern aesthetics, mindful slow living, and capsule wardrobe styling.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="journal-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="journal-card">
            <div className="journal-img-wrapper">
              <img src={post.image} alt={post.title} className="journal-img" loading="lazy" />
              <span className="journal-cat-tag">{post.category}</span>
            </div>

            <div className="journal-content">
              <div className="journal-meta">
                <span>{post.date}</span>
                <span className="meta-dot">•</span>
                <span className="read-time">
                  <Clock size={12} className="meta-icon" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="journal-title">{post.title}</h3>
              <p className="journal-excerpt">{post.excerpt}</p>

              <a href="#journal" className="journal-link">
                <span>READ FULL STORY</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
