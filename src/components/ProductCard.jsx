"use client";

import React from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useStore();

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-card" data-id={product.id}>
      <div className="product-thumb">
        <img 
          src={product.image} 
          alt={product.name || product.title} 
          className="product-img"
          loading="lazy"
        />

        {product.badge && (
          <span className="pill-tag">{product.badge}</span>
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
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 3
          }}
        >
          <Heart 
            size={16} 
            fill={wishlisted ? "#8C4E97" : "none"} 
            color={wishlisted ? "#8C4E97" : "#44204F"} 
          />
        </button>

        {/* Quick Add To Bag Button (revealed on card hover) */}
        <button 
          className="quick-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
          aria-label="Add to bag"
        >
          <ShoppingBag size={15} />
          <span>ADD TO BAG</span>
        </button>
      </div>

      <div 
        className="product-info" 
        onClick={() => setQuickViewProduct(product)}
        style={{ cursor: "pointer" }}
      >
        <h3 className="product-title">{product.name || product.title}</h3>
        <div className="product-price">
          ${Number(product.price).toFixed(2)} USD
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "var(--purple-muted)", marginLeft: 8, fontSize: "0.85rem", fontWeight: 400 }}>
              ${Number(product.originalPrice).toFixed(2)}
            </span>
          )}
        </div>
        <div className="product-rating">
          ★★★★★ <span className="rating-count">({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
}
