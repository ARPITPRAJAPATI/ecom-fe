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
    <div className="cart-drawer-overlay open" onClick={() => setIsWishlistOpen(false)}>
      <div className="cart-drawer-panel wishlist-panel" onClick={(e) => e.stopPropagation()} style={{ background: "#FFFFFF", maxWidth: 420 }}>
        <div className="cart-drawer-header" style={{ borderColor: "var(--purple-border)" }}>
          <div className="header-title-row" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Heart size={20} fill="var(--fairy-pink)" color="var(--fairy-pink)" />
            <h3 className="cart-drawer-title" style={{ color: "var(--purple-deep)" }}>
              Saved Vintage Rags ({wishlist.length}) 💘
            </h3>
          </div>
          <button 
            className="cart-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
            style={{ color: "var(--purple-deep)" }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-items">
          {wishlist.length === 0 ? (
            <div className="cart-empty-view" style={{ textAlign: "center", padding: "60px 20px" }}>
              <div className="empty-bag-icon">
                <Heart size={48} strokeWidth={1.2} color="var(--purple-muted)" />
              </div>
              <h4 className="empty-bag-heading" style={{ color: "var(--purple-deep)", marginTop: 16 }}>
                Your saved collection is empty
              </h4>
              <p className="empty-bag-sub" style={{ color: "var(--purple-muted)", fontSize: "0.85rem", marginTop: 6 }}>
                Tap the heart on any 1-of-1 vintage rag you adore to hold onto it before it sells out.
              </p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsWishlistOpen(false);
                  const shop = document.getElementById("top-picks");
                  if (shop) shop.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ background: "var(--purple-brand)", marginTop: 20 }}
              >
                BROWSE AVAILABLE RAGS 💘
              </button>
            </div>
          ) : (
            <div className="cart-items-stack">
              {wishlist.map((item) => (
                <div key={item.id} className="cart-item-row wishlist-row" style={{ borderColor: "var(--purple-border)", display: "grid", gridTemplateColumns: "70px 1fr auto", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--purple-border)" }}>
                  <img src={item.image} alt={item.name || item.title} className="cart-item-img" style={{ width: 70, height: 70, borderRadius: 12, objectFit: "cover" }} />

                  <div className="cart-item-details">
                    <h4 style={{ color: "var(--purple-deep)", fontSize: "0.95rem" }}>{item.name || item.title}</h4>

                    <div className="item-price-line" style={{ color: "var(--purple-brand)", fontWeight: 700, margin: "4px 0" }}>
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </div>

                    <button 
                      className="btn-secondary move-to-cart-btn"
                      onClick={() => {
                        addToCart(item, 1);
                        toggleWishlist(item);
                      }}
                      style={{ fontSize: "0.75rem", padding: "6px 14px", borderColor: "var(--purple-brand)", color: "var(--purple-brand)", marginTop: 6 }}
                    >
                      <ShoppingBag size={13} style={{ marginRight: 4 }} />
                      <span>MOVE TO BAG 💘</span>
                    </button>
                  </div>

                  <button 
                    className="item-delete-btn"
                    onClick={() => toggleWishlist(item)}
                    title="Remove from wishlist"
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#B56576" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
