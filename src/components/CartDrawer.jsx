"use client";

import React, { useState } from "react";
import { X, Trash2, ShoppingBag, Plus, Minus, Tag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartItemCount,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    freeShippingProgress,
    remainingForFreeShipping,
    updateCartQty,
    removeFromCart,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    checkout
  } = useStore();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError("");
    const res = applyPromoCode(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoInput("");
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Slide Drawer */}
      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`} aria-label="Shopping Cart Drawer">
        <div className="cart-drawer-header">
          <h3>Your Bag (<span id="cartDrawerCount">{cartItemCount}</span>)</h3>
          <button 
            className="cart-close-btn" 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping progress bar */}
        <div className="free-shipping-bar">
          <p id="shippingProgressText">
            {remainingForFreeShipping <= 0 
              ? "🎉 You've unlocked COMPLIMENTARY SHIPPING!" 
              : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping!`}
          </p>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${freeShippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Items List */}
        <div className="cart-drawer-items" id="cartItemsContainer">
          {cart.length === 0 ? (
            <div className="empty-cart-state" id="emptyCartState">
              <ShoppingBag className="empty-icon" size={48} strokeWidth={1.2} />
              <p>Your bag is currently empty.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: "16px" }}
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("top-picks");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="cart-item-row">
                <img src={item.image} alt={item.name || item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name || item.title}</h4>
                  <div className="item-price">
                    ${(Number(item.price) * item.quantity).toFixed(2)} USD
                  </div>
                  <div className="qty-control">
                    <button 
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: 16, textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#B56576" }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Promo & Checkout */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promo code bar */}
            <div style={{ marginBottom: "16px" }}>
              {appliedPromo ? (
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  background: "var(--bg-soft-lavender)", 
                  padding: "8px 14px", 
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  color: "var(--purple-deep)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Tag size={13} color="var(--purple-brand)" />
                    <span>Promo: <strong>{appliedPromo.code}</strong> (-${discountAmount.toFixed(2)})</span>
                  </div>
                  <button 
                    onClick={removePromoCode}
                    style={{ color: "#B56576", fontWeight: 600, fontSize: "0.75rem", border: "none", background: "none", cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} style={{ display: "flex", gap: "6px" }}>
                  <input
                    type="text"
                    placeholder="Promo code (e.g. SLEEK15)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: "1px solid var(--purple-border)",
                      fontSize: "0.82rem",
                      outline: "none"
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      background: "var(--purple-brand)",
                      color: "#fff",
                      border: "none",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    APPLY
                  </button>
                </form>
              )}
              {promoError && (
                <p style={{ color: "#B56576", fontSize: "0.75rem", marginTop: 4 }}>{promoError}</p>
              )}
            </div>

            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span className="subtotal-amount">${cartTotal.toFixed(2)} USD</span>
            </div>
            <p className="tax-note">
              {shippingFee === 0 ? "✨ Free delivery included" : `+ $${shippingFee.toFixed(2)} standard shipping`}
            </p>
            <button className="btn-primary btn-checkout" onClick={checkout}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
