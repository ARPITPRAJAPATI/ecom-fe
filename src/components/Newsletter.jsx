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

    applyPromoCode("FAEJUNK10");
    setMessage("Merci, Fae! 10% discount code FAEJUNK10 applied to your bag 🧚‍♀️");
    showToast("Code FAEJUNK10 applied to your bag! 🎀");
    setEmail("");
  };

  return (
    <section className="newsletter-section" id="newsletter" style={{ background: "radial-gradient(circle at center, #E8EFE8 0%, #FAF7EE 100%)" }}>
      <div className="newsletter-card" style={{ background: "#FFFFFF", borderColor: "var(--purple-border)", borderRadius: 28 }}>
        <div className="newsletter-icon" style={{ color: "var(--purple-brand)" }}>✦</div>
        <span className="script-hero" style={{ color: "var(--purple-brand)" }}>Fae VIP List 🧚‍♀️</span>
        <h2 className="newsletter-title" style={{ color: "var(--purple-deep)" }}>
          Get Early Access to 1-of-1 Vintage Drops
        </h2>
        <p className="newsletter-desc" style={{ color: "var(--purple-muted)" }}>
          Subscribe to receive secret preview links before drops go live on @faeriesjunk.store Instagram stories. Plus enjoy <strong>10% off</strong> your first curation.
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
              style={{ borderColor: "var(--purple-border)", background: "#FAF7EE" }}
            />
            <button type="submit" className="btn-primary" style={{ background: "var(--purple-brand)" }}>
              CLAIM 10% OFF 🎀
            </button>
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
