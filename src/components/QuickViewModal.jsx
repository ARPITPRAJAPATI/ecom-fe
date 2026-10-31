"use client";

import React, { useState } from "react";
import { X, Heart, ShoppingBag, Star, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isWishlisted(product.id);
  const currentColor = selectedColor || (product.colors ? product.colors[0] : null);

  const handleAdd = () => {
    addToCart(product, quantity, currentColor);
    setQuickViewProduct(null);
  };

  return (
    <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
      <div className="quickview-modal-card" onClick={(e) => e.stopPropagation()} style={{ background: "#FFFFFF", borderRadius: 24 }}>
        <button 
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="quickview-grid">
          {/* Left: Product Image */}
          <div className="quickview-img-col" style={{ background: "#F5F0E6" }}>
            <img src={product.image} alt={product.name || product.title} className="quickview-img" />
            {product.badge && (
              <span className="product-badge badge-modal" style={{ background: "var(--purple-brand)", color: "#FAF7EE" }}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Info */}
          <div className="quickview-info-col">
            <span className="product-category-label" style={{ color: "var(--fairy-pink)", fontWeight: 700 }}>
              {product.category} • Authentic 1 of 1 Vintage
            </span>
            <h2 className="quickview-title" style={{ color: "var(--purple-deep)", fontFamily: "var(--font-heading)" }}>
              {product.name || product.title}
            </h2>

            <div className="quickview-pricing">
              <span className="current-price" style={{ color: "var(--purple-brand)", fontSize: "1.4rem", fontWeight: 700 }}>
                ₹{Number(product.price).toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="original-price" style={{ color: "var(--purple-muted)" }}>
                  ₹{Number(product.originalPrice).toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <div className="product-rating-row modal-rating">
              <div className="stars-cluster">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill="#CFA65B" 
                    color="#CFA65B" 
                  />
                ))}
              </div>
              <span className="review-count" style={{ color: "var(--purple-muted)" }}>
                ({product.reviewsCount} fairy reviews)
              </span>
            </div>

            <p className="quickview-desc" style={{ color: "var(--purple-text)" }}>
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <ul className="quickview-features-list">
                {product.features.map((feat, i) => (
                  <li key={i} style={{ color: "var(--purple-muted)" }}>
                    <Check size={14} color="var(--purple-brand)" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Stepper & Actions */}
            <div className="quickview-actions-wrap" style={{ marginTop: 24 }}>
              <button 
                className="btn-primary quickview-add-btn" 
                onClick={handleAdd}
                style={{ background: "var(--purple-brand)", flex: 1 }}
              >
                <ShoppingBag size={17} style={{ marginRight: 6 }} />
                <span>CLAIM TO CART 💘 • ₹{Number(product.price).toLocaleString("en-IN")}</span>
              </button>

              <button 
                className={`quickview-wishlist-btn ${wishlisted ? "is-active" : ""}`}
                onClick={() => toggleWishlist(product)}
                title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                style={{ borderColor: "var(--purple-border)" }}
              >
                <Heart size={18} fill={wishlisted ? "#D48C95" : "none"} color={wishlisted ? "#D48C95" : "#2C2723"} />
              </button>
            </div>

            <div className="quickview-perks" style={{ borderTop: "1px solid var(--purple-border)", paddingTop: 16 }}>
              <div className="perk-item" style={{ color: "var(--purple-muted)" }}>
                <ShieldCheck size={14} color="var(--purple-brand)" />
                <span>No COD ❌ • Strictly Prepaid Orders Only</span>
              </div>
              <div className="perk-item" style={{ color: "var(--purple-muted)" }}>
                <Sparkles size={14} color="var(--purple-brand)" />
                <span>Shipping across India via express courier 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
