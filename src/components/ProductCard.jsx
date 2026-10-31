"use client";

import React from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useStore();

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-card" data-id={product.id} style={{ borderColor: "var(--purple-border)" }}>
      <div className="product-thumb" style={{ background: "#F5F0E6" }}>
        <img 
          src={product.image} 
          alt={product.name || product.title} 
          className="product-img"
          loading="lazy"
        />

        {product.badge && (
          <span 
            className="pill-tag"
            style={{
              background: product.badge.includes("SOLD") ? "rgba(44, 39, 35, 0.9)" : "rgba(255, 255, 255, 0.95)",
              color: product.badge.includes("SOLD") ? "#FAF7EE" : "var(--purple-brand)",
              fontWeight: 700
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Button floating top-right */}
        <button
          className="wishlist-thumb-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 3
          }}
        >
          <Heart 
            size={16} 
            fill={wishlisted ? "#D48C95" : "none"} 
            color={wishlisted ? "#D48C95" : "#2C2723"} 
          />
        </button>

        {/* Quick Add To Bag Button */}
        <button 
          className="quick-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
          aria-label="Claim item to cart"
          style={{ background: "var(--purple-brand)" }}
        >
          <ShoppingBag size={15} />
          <span>CLAIM TO CART 💘</span>
        </button>
      </div>

      <div 
        className="product-info" 
        onClick={() => setQuickViewProduct(product)}
        style={{ cursor: "pointer", padding: "18px 16px" }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--purple-muted)", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
          {product.category} • 1 of 1
        </span>

        <h3 className="product-title" style={{ fontSize: "1.05rem", color: "var(--purple-deep)", marginBottom: 6 }}>
          {product.name || product.title}
        </h3>

        <div className="product-price" style={{ color: "var(--purple-brand)", fontSize: "1.05rem", fontWeight: 700 }}>
          ₹{Number(product.price).toLocaleString("en-IN")}
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "var(--purple-muted)", marginLeft: 8, fontSize: "0.85rem", fontWeight: 400 }}>
              ₹{Number(product.originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <div className="product-rating" style={{ color: "var(--gold-accent)", marginTop: 4 }}>
          ★★★★★ <span className="rating-count" style={{ color: "var(--purple-muted)" }}>({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
}
