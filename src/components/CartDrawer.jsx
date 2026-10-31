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
      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`} aria-label="Shopping Cart Drawer" style={{ background: "#FFFFFF" }}>
        <div className="cart-drawer-header" style={{ borderColor: "var(--purple-border)" }}>
          <h3 style={{ color: "var(--purple-deep)" }}>Your Claimed Rags (<span id="cartDrawerCount">{cartItemCount}</span>) 🧚‍♀️</h3>
          <button 
            className="cart-close-btn" 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            style={{ color: "var(--purple-deep)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping progress bar (INR) */}
        <div className="free-shipping-bar" style={{ background: "#F2EDE2", borderColor: "var(--purple-border)" }}>
          <p id="shippingProgressText" style={{ color: "var(--purple-deep)" }}>
            {remainingForFreeShipping <= 0 
              ? "🎉 You've unlocked FREE EXPRESS COURIER SHIPPING ACROSS INDIA 🇮🇳" 
              : `Add ₹${remainingForFreeShipping.toLocaleString("en-IN")} more for Free Delivery!`}
          </p>
          <div className="progress-track" style={{ background: "#FFFFFF" }}>
            <div 
              className="progress-fill" 
              style={{ width: `${freeShippingProgress}%`, background: "var(--purple-brand)" }}
            ></div>
          </div>
        </div>

        {/* Items List */}
        <div className="cart-drawer-items" id="cartItemsContainer">
          {cart.length === 0 ? (
            <div className="empty-cart-state" id="emptyCartState">
              <ShoppingBag className="empty-icon" size={48} strokeWidth={1.2} style={{ color: "var(--purple-muted)" }} />
              <p style={{ color: "var(--purple-muted)" }}>Your bag is currently empty.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: "16px", background: "var(--purple-brand)" }}
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("top-picks");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                BROWSE AVAILABLE RAGS 💘
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="cart-item-row" style={{ borderColor: "var(--purple-border)" }}>
                <img src={item.image} alt={item.name || item.title} className="cart-item-img" style={{ borderColor: "var(--purple-border)" }} />
                <div className="cart-item-details">
                  <h4 style={{ color: "var(--purple-deep)" }}>{item.name || item.title}</h4>
                  <div className="item-price" style={{ color: "var(--purple-brand)" }}>
                    ₹{(Number(item.price) * item.quantity).toLocaleString("en-IN")}
                  </div>
                  <div className="qty-control">
                    <button 
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      style={{ background: "#F2EDE2" }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: 16, textAlign: "center", color: "var(--purple-deep)" }}>
                      {item.quantity}
                    </span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      style={{ background: "#F2EDE2" }}
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
          <div className="cart-drawer-footer" style={{ borderColor: "var(--purple-border)", background: "#FAF7EE" }}>
            {/* Promo code bar */}
            <div style={{ marginBottom: "16px" }}>
              {appliedPromo ? (
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  background: "#E8EFE8", 
                  padding: "8px 14px", 
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  color: "var(--purple-deep)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Tag size={13} color="var(--purple-brand)" />
                    <span>Promo: <strong>{appliedPromo.code}</strong> (-₹{discountAmount.toLocaleString("en-IN")})</span>
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
                    placeholder="Promo (e.g. FAEJUNK10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: "1px solid var(--purple-border)",
                      fontSize: "0.82rem",
                      outline: "none",
                      background: "#FFFFFF"
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      background: "var(--purple-brand)",
                      color: "#FAF7EE",
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

            <div className="cart-subtotal-row" style={{ color: "var(--purple-deep)" }}>
              <span>Total Amount</span>
              <span className="subtotal-amount" style={{ color: "var(--purple-brand)" }}>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            
            <p className="tax-note" style={{ color: "var(--purple-muted)" }}>
              {shippingFee === 0 ? "✨ Free courier delivery included across India" : `+ ₹${shippingFee} standard shipping`}
            </p>

            <div style={{ background: "#FDE8EA", padding: "6px 12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.76rem", color: "#9E2A2B", fontWeight: 600, textAlign: "center" }}>
              ⚠️ Reminder: No COD ❌ • Strictly Prepaid Orders Only
            </div>

            <button className="btn-primary btn-checkout" onClick={checkout} style={{ background: "var(--purple-brand)", width: "100%" }}>
              PROCEED TO PREPAID CHECKOUT 💘
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
