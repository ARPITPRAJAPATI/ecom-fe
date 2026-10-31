"use client";

import React from "react";

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="footer" style={{ background: "#E8EFE8", borderTop: "1px solid var(--purple-border)" }}>
      <div className="footer-top-container">
        {/* Col 1: Brand & Logo Badge */}
        <div className="footer-col brand-col">
          <div className="footer-logo-badge" style={{ gap: 10, background: "#FFFFFF", padding: "8px 20px" }}>
            <img 
              src="/images/faeries-junk-logo.jpg" 
              alt="Faeries Junk Logo" 
              style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }}
            />
            <span className="badge-logo-text" style={{ color: "var(--purple-brand)", fontSize: "1.8rem" }}>
              Faeries <small style={{ color: "var(--purple-deep)" }}>Junk 🧚‍♀️</small>
            </span>
          </div>
          <p className="footer-about" style={{ color: "var(--purple-muted)" }}>
            Curated and handpicked vintage rags by <strong>@aryaamishraa</strong>. An intimate haven for 1-of-1 fairycore archives, pre-loved corsets, and timeless slow fashion.
          </p>
          <div className="social-links-row">
            <a 
              href="https://www.instagram.com/faeriesjunk.store/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              style={{ color: "var(--purple-deep)" }}
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: Drops */}
        <div className="footer-col">
          <h4 className="footer-col-title" style={{ color: "var(--purple-deep)" }}>THRIFT DROPS</h4>
          <ul className="footer-links">
            <li><a href="#top-picks">AVAILABLE RAGS 💘</a></li>
            <li><a href="#top-picks">TOPS &amp; CORSETS</a></li>
            <li><a href="#top-picks">SLIP DRESSES</a></li>
            <li><a href="#top-picks">VINTAGE BAGS</a></li>
            <li><a href="#top-picks">HANDMADE CHARMS</a></li>
          </ul>
        </div>

        {/* Col 3: Policies */}
        <div className="footer-col mission-col">
          <h4 className="footer-col-title" style={{ color: "var(--purple-deep)" }}>BOUTIQUE RULES 📌</h4>
          <p className="footer-mission-text" style={{ color: "var(--purple-muted)" }}>
            • <strong>No COD ❌</strong> (Prepaid orders only via UPI/Cards)<br />
            • <strong>No Returns or Cancellations</strong> (All items are delicate 1-of-1 vintage)<br />
            • <strong>Shipping Across 🇮🇳</strong> (Courier dispatch within 48h)<br />
            • Check sizing details carefully before claiming.
          </p>
          <div className="contact-email" style={{ color: "var(--purple-deep)" }}>
            <strong>Direct Enquiries:</strong> DM @faeriesjunk.store
          </div>
        </div>

        {/* Col 4: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title" style={{ color: "var(--purple-deep)" }}>EXPLORE</h4>
          <ul className="footer-links">
            <li><a href="#hero">HOME 🧚‍♀️</a></li>
            <li><a href="#about-us">OUR STORY</a></li>
            <li><a href="#policies">STORE POLICIES</a></li>
            <li><a href="#faq">CUSTOMER REVIEWS 🎀</a></li>
            <li><a href="https://www.instagram.com/faeriesjunk.store/" target="_blank" rel="noopener noreferrer">INSTAGRAM SHOP ↗</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Indian Payment methods */}
      <div className="footer-bottom-bar" style={{ borderColor: "var(--purple-border)" }}>
        <div className="bottom-container">
          <div className="shopify-credit" style={{ color: "var(--purple-muted)" }}>
            <span>🧚‍♀️</span> © 2026 Faeries Junk (@faeriesjunk.store). Handpicked with love in India.
          </div>
          <div className="payment-icons">
            <span style={{ color: "var(--purple-brand)", fontWeight: 800 }}>UPI</span>
            <span>GPAY</span>
            <span>PHONEPE</span>
            <span>PAYTM</span>
            <span>CARDS</span>
            <span>NETBANKING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
