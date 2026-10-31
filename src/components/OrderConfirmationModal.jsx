"use client";

import React from "react";
import { CheckCircle, X, Package, Truck, Calendar, ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function OrderConfirmationModal() {
  const { orderModalData, setOrderModalData } = useStore();

  if (!orderModalData) return null;

  const order = orderModalData;

  return (
    <div className="modal-backdrop" onClick={() => setOrderModalData(null)}>
      <div className="order-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn"
          onClick={() => setOrderModalData(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="order-modal-header text-center">
          <div className="order-success-icon-wrap">
            <CheckCircle size={46} color="#2e7d32" strokeWidth={1.7} />
          </div>
          <span className="order-eyebrow">ORDER CONFIRMED</span>
          <h2 className="order-modal-title">Merci Beaucoup!</h2>
          <p className="order-subtext">
            Your boutique order has been received and is being prepared in our atelier.
          </p>
        </div>

        {/* Order Meta Box */}
        <div className="order-meta-box">
          <div className="meta-tile">
            <span className="meta-label">ORDER ID</span>
            <strong className="meta-val">{order.orderId}</strong>
          </div>
          <div className="meta-tile">
            <span className="meta-label">ESTIMATED DELIVERY</span>
            <strong className="meta-val">{order.estimatedDelivery}</strong>
          </div>
          <div className="meta-tile">
            <span className="meta-label">PAYMENT STATUS</span>
            <strong className="meta-val status-paid">Paid (${order.total.toFixed(2)})</strong>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="order-items-scroll">
          <span className="order-section-subtitle">Items in This Package ({order.items.length})</span>
          <div className="order-items-list">
            {order.items.map((item, idx) => (
              <div key={idx} className="order-item-row">
                <img src={item.image} alt={item.name || item.title} className="order-item-img" />
                <div className="order-item-info">
                  <strong>{item.name || item.title}</strong>
                  {item.selectedColor && (
                    <span className="item-color-tag">{item.selectedColor}</span>
                  )}
                  <span className="item-qty-tag">Qty: {item.quantity}</span>
                </div>
                <span className="order-item-price">
                  ${(Number(item.price) * item.quantity).toFixed(2)} USD
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="order-pricing-summary">
          <div className="summary-line">
            <span>Subtotal</span>
            <span>${order.subtotal.toFixed(2)} USD</span>
          </div>
          {order.discount > 0 && (
            <div className="summary-line discount-line">
              <span>Promo Discount ({order.promoApplied})</span>
              <span>-${order.discount.toFixed(2)} USD</span>
            </div>
          )}
          <div className="summary-line">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "FREE" : `$${order.shipping.toFixed(2)} USD`}</span>
          </div>
          <div className="summary-line total-line">
            <strong>Total Paid</strong>
            <strong>${order.total.toFixed(2)} USD</strong>
          </div>
        </div>

        {/* Action */}
        <div className="order-modal-actions">
          <button className="btn-primary full-width" onClick={() => setOrderModalData(null)}>
            <ShoppingBag size={17} />
            <span>CONTINUE SHOPPING</span>
          </button>
        </div>
      </div>
    </div>
  );
}
