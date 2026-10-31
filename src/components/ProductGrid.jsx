"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useStore } from "../context/StoreContext";

export default function ProductGrid() {
  const { filteredProducts, activeCategory, setActiveCategory } = useStore();

  const categories = [
    { id: "all", label: "All Curations" },
    { id: "accessories", label: "Accessories" },
    { id: "jewellery", label: "Jewellery" },
    { id: "hair", label: "Hair Pieces" },
    { id: "eyewear", label: "Eyewear" },
    { id: "living", label: "Living & Aromas" }
  ];

  return (
    <section id="shop" className="products-section">
      <div className="section-header-centered">
        <span className="script-badge">Our Top Picks</span>
        <h2 className="section-title-spaced">Signature Essentials</h2>
        <p className="section-subtitle">
          Hand-crafted in limited boutique batches with certified Parisian elegance.
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
                background: activeCategory === cat.id ? "var(--purple-brand)" : "var(--bg-card)",
                color: activeCategory === cat.id ? "#fff" : "var(--purple-deep)",
                cursor: "pointer",
                transition: "all 0.25s ease"
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
