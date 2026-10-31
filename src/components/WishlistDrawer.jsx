"use client";

import React from "react";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart
  } = useStore();

  if (!isWishlistOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsWishlistOpen(false)}>
      <div className="cart-drawer-panel wishlist-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div className="header-title-row">
            <Heart size={20} fill="#8e6c88" color="#8e6c88" />
            <h3 className="cart-drawer-title">Saved Treasures ({wishlist.length})</h3>
          </div>
          <button 
            className="cart-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-items">
          {wishlist.length === 0 ? (
            <div className="cart-empty-view">
              <div className="empty-bag-icon">
                <Heart size={48} strokeWidth={1.2} color="#b8a7b5" />
              </div>
              <h4 className="empty-bag-heading">Your wishlist is empty</h4>
              <p className="empty-bag-sub">Tap the heart icon on any treasure you adore to save it for later.</p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsWishlistOpen(false);
                  const shop = document.getElementById("shop");
                  if (shop) shop.scrollIntoView({ behavior: "smooth" });
                }}
              >
                EXPLORE COLLECTION
              </button>
            </div>
          ) : (
            <div className="cart-items-stack">
              {wishlist.map((item) => (
                <div key={item.id} className="cart-item-row wishlist-row">
                  <div className="cart-item-img-box">
                    <img src={item.image} alt={item.name || item.title} className="cart-item-img" />
                  </div>

                  <div className="cart-item-details">
                    <div className="item-top-line">
                      <h4 className="item-name">{item.name || item.title}</h4>
                      <button 
                        className="item-delete-btn"
                        onClick={() => toggleWishlist(item)}
                        title="Remove from wishlist"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="item-price-line">
                      ${Number(item.price).toFixed(2)} USD
                    </div>

                    <button 
                      className="btn-secondary move-to-cart-btn"
                      onClick={() => {
                        addToCart(item, 1);
                        toggleWishlist(item);
                      }}
                    >
                      <ShoppingBag size={14} />
                      <span>MOVE TO BAG</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
