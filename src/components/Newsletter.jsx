"use client";

import React, { useState } from "react";
import { useStore } from "../context/StoreContext";

export default function Newsletter() {
  const { applyPromoCode, showToast } = useStore();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    applyPromoCode("SLEEK15");
    setMessage("Merci! 15% discount code SLEEK15 applied to your bag!");
    showToast("Code SLEEK15 applied to your bag!");
    setEmail("");
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-card">
        <div className="newsletter-icon">✦</div>
        <span className="script-hero">Sign up Today</span>
        <h2 className="newsletter-title">Receive 15% Off Your First Order</h2>
        <p className="newsletter-desc">
          Subscribe to receive VIP access to limited drops, seasonal gift guides, and exclusive subscriber-only previews.
        </p>
        <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              id="newsletterEmail" 
              placeholder="Enter your email address..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary">SUBSCRIBE</button>
          </div>
          {message && (
            <p className="form-feedback" id="formFeedback" style={{ display: "block", color: "var(--purple-brand)", marginTop: 12, fontWeight: 600 }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
