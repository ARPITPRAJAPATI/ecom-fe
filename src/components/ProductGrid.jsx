"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useStore } from "../context/StoreContext";

export default function ProductGrid() {
  const { filteredProducts, activeCategory, setActiveCategory } = useStore();

  const categories = [
    { id: "all", label: "All Rags 🧚‍♀️" },
    { id: "tops", label: "Tops & Corsets" },
    { id: "dresses", label: "Dresses & Skirts" },
    { id: "bags", label: "Vintage Bags" },
    { id: "jewellery", label: "Handmade Charms" }
  ];

  return (
    <section id="top-picks" className="products-section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-header-centered">
        <span className="script-badge" style={{ color: "var(--purple-brand)" }}>Handpicked Archive</span>
        <h2 className="section-title-spaced" style={{ color: "var(--purple-deep)" }}>
          AVAILABLE VINTAGE RAGS 💘
        </h2>
        <p className="section-subtitle" style={{ color: "var(--purple-muted)" }}>
          Every rag is 100% authentic 1-of-1 vintage. Once claimed, it enters our archived vault forever.
        </p>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: activeCategory === cat.id ? "1.5px solid var(--purple-brand)" : "1px solid var(--purple-border)",
                background: activeCategory === cat.id ? "var(--purple-brand)" : "#FFFFFF",
                color: activeCategory === cat.id ? "#FAF7EE" : "var(--purple-deep)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: activeCategory === cat.id ? "0 4px 12px rgba(67, 103, 70, 0.2)" : "none"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
