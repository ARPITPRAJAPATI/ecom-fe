"use client";

import React from "react";
import { CheckCircle, X, ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function OrderConfirmationModal() {
  const { orderModalData, setOrderModalData } = useStore();

  if (!orderModalData) return null;

  const order = orderModalData;

  return (
    <div className="modal-backdrop" onClick={() => setOrderModalData(null)}>
      <div className="order-modal-card" onClick={(e) => e.stopPropagation()} style={{ background: "#FFFFFF", borderRadius: 24 }}>
        <button 
          className="modal-close-btn"
          onClick={() => setOrderModalData(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="order-modal-header text-center">
          <div className="order-success-icon-wrap">
            <CheckCircle size={46} color="#436746" strokeWidth={1.7} />
          </div>
          <span className="order-eyebrow" style={{ color: "var(--fairy-pink)", letterSpacing: "0.15em", fontWeight: 700 }}>
            PARCEL CLAIMED 💘
          </span>
          <h2 className="order-modal-title" style={{ color: "var(--purple-deep)", fontFamily: "var(--font-heading)" }}>
            Thank You, Fae Angel! 🧚‍♀️
          </h2>
          <p className="order-subtext" style={{ color: "var(--purple-muted)" }}>
            Your 1-of-1 vintage treasure has been claimed and is being prepared with sweet stickers and lavender botanicals by @aryaamishraa.
          </p>
        </div>

        {/* Order Meta Box */}
        <div className="order-meta-box" style={{ background: "#F2EDE2" }}>
          <div className="meta-tile">
            <span className="meta-label">CLAIM ID</span>
            <strong className="meta-val" style={{ color: "var(--purple-deep)" }}>{order.orderId}</strong>
          </div>
          <div className="meta-tile">
            <span className="meta-label">ESTIMATED COURIER</span>
            <strong className="meta-val" style={{ color: "var(--purple-deep)" }}>{order.estimatedDelivery}</strong>
          </div>
          <div className="meta-tile">
            <span className="meta-label">PREPAID STATUS</span>
            <strong className="meta-val status-paid" style={{ color: "#436746" }}>
              Paid (₹{order.total.toLocaleString("en-IN")})
            </strong>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="order-items-scroll">
          <span className="order-section-subtitle" style={{ color: "var(--purple-deep)" }}>
            Claimed Vintage Items ({order.items.length})
          </span>
          <div className="order-items-list">
            {order.items.map((item, idx) => (
              <div key={idx} className="order-item-row" style={{ borderColor: "var(--purple-border)" }}>
                <img src={item.image} alt={item.name || item.title} className="order-item-img" style={{ borderColor: "var(--purple-border)" }} />
                <div className="order-item-info">
                  <strong style={{ color: "var(--purple-deep)" }}>{item.name || item.title}</strong>
                  {item.condition && (
                    <span className="item-color-tag" style={{ background: "#E8EFE8", color: "var(--purple-deep)" }}>{item.condition}</span>
                  )}
                  <span className="item-qty-tag">1-of-1 Drop</span>
                </div>
                <span className="order-item-price" style={{ color: "var(--purple-brand)" }}>
                  ₹{(Number(item.price) * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="order-pricing-summary" style={{ borderColor: "var(--purple-border)" }}>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>₹{order.subtotal.toLocaleString("en-IN")}</span>
          </div>
          {order.discount > 0 && (
            <div className="summary-line discount-line" style={{ color: "#436746" }}>
              <span>Promo Discount ({order.promoApplied})</span>
              <span>-₹{order.discount.toLocaleString("en-IN")}</span>
            </div>
          )}
          <div className="summary-line">
            <span>Shipping Across 🇮🇳</span>
            <span>{order.shipping === 0 ? "FREE" : `₹${order.shipping}`}</span>
          </div>
          <div className="summary-line total-line" style={{ color: "var(--purple-deep)" }}>
            <strong>Total Paid</strong>
            <strong>₹{order.total.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        {/* Action */}
        <div className="order-modal-actions">
          <button className="btn-primary full-width" onClick={() => setOrderModalData(null)} style={{ background: "var(--purple-brand)", width: "100%" }}>
            <ShoppingBag size={17} style={{ marginRight: 8 }} />
            <span>CONTINUE EXPLORING RAGS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
