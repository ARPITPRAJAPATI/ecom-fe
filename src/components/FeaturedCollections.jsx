"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function FeaturedCollections() {
  const { setActiveCategory } = useStore();

  const collections = [
    {
      title: "Artisan Living & Scents",
      subtitle: "100% French Soy Wax & Dried Botanicals",
      category: "Living",
      image: "/images/lavender-candle.jpg",
      tag: "Limited Batch"
    },
    {
      title: "Baroque Fine Jewelry",
      subtitle: "18k Gold Vermeil & Freshwater Pearls",
      category: "Jewellery",
      image: "/images/peony-basket.jpg",
      tag: "Best Sellers"
    },
    {
      title: "Modern Muse Accents",
      subtitle: "Cellulose Acetate Clips & Sculpted Frames",
      category: "Accessories",
      image: "/images/lavender-vase.jpg",
      tag: "New Season"
    }
  ];

  const handleSelect = (category) => {
    setActiveCategory(category);
    const shopEl = document.getElementById("shop");
    if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="featured" className="featured-section">
      <div className="section-header text-center">
        <span className="section-eyebrow">CURATED CAPSULES</span>
        <h2 className="section-title">Signature Collections</h2>
        <div className="section-divider"></div>
      </div>

      <div className="collections-grid">
        {collections.map((item, idx) => (
          <div 
            key={idx} 
            className="collection-card"
            onClick={() => handleSelect(item.category)}
          >
            <div className="collection-img-wrapper">
              <img src={item.image} alt={item.title} className="collection-img" />
              <div className="collection-overlay"></div>
              <span className="collection-tag">{item.tag}</span>
            </div>

            <div className="collection-info">
              <div>
                <h3 className="collection-name">{item.title}</h3>
                <p className="collection-sub">{item.subtitle}</p>
              </div>
              <button className="collection-action-btn" aria-label={`Shop ${item.title}`}>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
