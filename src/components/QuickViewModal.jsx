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
      <div className="quickview-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="quickview-grid">
          {/* Left: Product Image */}
          <div className="quickview-img-col">
            <img src={product.image} alt={product.name || product.title} className="quickview-img" />
            {product.badge && (
              <span className="product-badge badge-modal">{product.badge}</span>
            )}
          </div>

          {/* Right: Info */}
          <div className="quickview-info-col">
            <span className="product-category-label">{product.category}</span>
            <h2 className="quickview-title">{product.name || product.title}</h2>

            <div className="quickview-pricing">
              <span className="current-price">${Number(product.price).toFixed(2)} USD</span>
              {product.originalPrice && (
                <span className="original-price">${Number(product.originalPrice).toFixed(2)}</span>
              )}
            </div>

            <div className="product-rating-row modal-rating">
              <div className="stars-cluster">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? "#c5a880" : "none"} 
                    color="#c5a880" 
                  />
                ))}
              </div>
              <span className="review-count">({product.reviewsCount} verified reviews)</span>
            </div>

            <p className="quickview-desc">{product.description}</p>

            {/* Features */}
            {product.features && (
              <ul className="quickview-features-list">
                {product.features.map((feat, i) => (
                  <li key={i}>
                    <Check size={14} color="#8e6c88" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Color variants */}
            {product.colors && product.colors.length > 0 && (
              <div className="quickview-variants">
                <span className="variant-label">Color: <strong>{currentColor}</strong></span>
                <div className="variant-pills-row">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`variant-pill ${currentColor === color ? "is-selected" : ""}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stepper & Actions */}
            <div className="quickview-actions-wrap">
              <div className="quickview-qty-stepper">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="qty-val">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn-primary quickview-add-btn" onClick={handleAdd}>
                <ShoppingBag size={17} />
                <span>ADD TO BAG • ${(Number(product.price) * quantity).toFixed(2)}</span>
              </button>

              <button 
                className={`quickview-wishlist-btn ${wishlisted ? "is-active" : ""}`}
                onClick={() => toggleWishlist(product)}
                title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} fill={wishlisted ? "#8e6c88" : "none"} color={wishlisted ? "#8e6c88" : "#2d2926"} />
              </button>
            </div>

            <div className="quickview-perks">
              <div className="perk-item">
                <ShieldCheck size={14} color="#8e6c88" />
                <span>Complimentary gift box included</span>
              </div>
              <div className="perk-item">
                <Sparkles size={14} color="#8e6c88" />
                <span>30-Day returns & exchanges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
