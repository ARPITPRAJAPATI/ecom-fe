"use client";

import React from "react";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="welcome-section" style={{ background: "#F2EDE2" }}>
      <div className="welcome-container">
        {/* Left: Text */}
        <div className="welcome-text-col">
          <span className="script-badge" style={{ color: "var(--purple-brand)" }}>Slow Thrift Movement</span>
          <h2 className="welcome-title" style={{ color: "var(--purple-deep)" }}>
            WELCOME TO FAERIES JUNK 🧚‍♀️
          </h2>
          <p className="welcome-body" style={{ color: "var(--purple-text)" }}>
            Welcome to the home of handpicked vintage rags. We believe in cherishing pre-loved clothes that carry soul, intricate craftsmanship, and irreplaceable nostalgia. Each item is individually hunted, examined for quality, steam cleaned, and hand-packaged with love by @aryaamishraa.
          </p>
          <div className="service-badges">
            <div className="service-pill" style={{ color: "var(--purple-deep)" }}>
              <Sparkles size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> 
              100% Curated 1-of-1 Pre-Loved Treasures
            </div>
            <div className="service-pill" style={{ color: "var(--purple-deep)" }}>
              <ShieldCheck size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> 
              Thoroughly Sanitized &amp; Ready to Wear
            </div>
            <div className="service-pill" style={{ color: "var(--purple-deep)" }}>
              <Truck size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> 
              Swift Courier Dispatch Across India 🇮🇳
            </div>
          </div>
          <div className="welcome-action">
            <a href="#newsletter" className="btn-primary" style={{ background: "var(--purple-brand)" }}>
              JOIN VIP DROP NOTIFICATIONS
            </a>
          </div>
        </div>

        {/* Right: Flatlay Showcase */}
        <div className="welcome-media-col">
          <div className="stationery-card" style={{ borderColor: "#FFFFFF" }}>
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" 
              alt="Vintage lace corset flatlay" 
              className="stationery-img" 
            />
            <div className="stationery-overlay-tag" style={{ background: "rgba(255, 255, 255, 0.95)", color: "var(--purple-deep)" }}>
              Handpicked with Love 🎀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
