"use client";

import React from "react";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Left: Text */}
        <div className="welcome-text-col">
          <span className="script-badge">Our Heritage</span>
          <h2 className="welcome-title">WELCOME TO LOLLIPOP SLEEK</h2>
          <p className="welcome-body">
            Welcome to Lollipop Sleek, your ultimate guide to all things related to lollipop candies. We are a team of passionate candy lovers who are dedicated to providing you with the most comprehensive information on lollipop candies, from their history to the latest trends in the industry.
          </p>
          <div className="service-badges">
            <div className="service-pill">
              <Sparkles size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> Hand-Crafted Artistry
            </div>
            <div className="service-pill">
              <ShieldCheck size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> Sustainable Packaging
            </div>
            <div className="service-pill">
              <Truck size={18} color="var(--purple-brand)" style={{ marginRight: 8 }} /> Worldwide Express Shipping
            </div>
          </div>
          <div className="welcome-action">
            <a href="#newsletter" className="btn-primary">JOIN THE INNER CIRCLE</a>
          </div>
        </div>

        {/* Right: Wax Sealed Stationery Flatlay */}
        <div className="welcome-media-col">
          <div className="stationery-card">
            <img 
              src="/images/stationery-letters.jpg" 
              alt="Lavender envelopes with gold wax seals and calligraphy" 
              className="stationery-img" 
            />
            <div className="stationery-overlay-tag">Handwritten with Love</div>
          </div>
        </div>
      </div>
    </section>
  );
}
