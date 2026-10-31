"use client";

import React from "react";

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
      <polygon points="10 15 15 12 10 9 10 15"></polygon>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top-container">
        {/* Col 1: Brand & Logo Badge */}
        <div className="footer-col brand-col">
          <div className="footer-logo-badge">
            <span className="badge-logo-text">Lollipops <small>Sleek</small></span>
          </div>
          <p className="footer-about">
            A dedicated space where pastel nostalgia meets modern luxury. Curating moments of peace, beauty, and refined aesthetics.
          </p>
          <div className="social-links-row">
            <a href="#" aria-label="Twitter"><TwitterIcon size={18} /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon size={18} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={18} /></a>
          </div>
        </div>

        {/* Col 2: Main Menu */}
        <div className="footer-col">
          <h4 className="footer-col-title">MAIN MENU</h4>
          <ul className="footer-links">
            <li><a href="#hero">HOME</a></li>
            <li><a href="#top-picks">SHOP</a></li>
            <li><a href="#about-us">ABOUT</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#footer">CONTACT</a></li>
          </ul>
        </div>

        {/* Col 3: Our Mission */}
        <div className="footer-col mission-col">
          <h4 className="footer-col-title">OUR MISSION</h4>
          <p className="footer-mission-text">
            We have a great team and aim to grow our business more and more. If you have any questions about our products, or if you would like to check the availability of an item, please use the 'Contact Us' page to get in touch.
          </p>
          <div className="contact-email">
            <strong>Concierge:</strong> concierge@lollipopsleek.com
          </div>
        </div>

        {/* Col 4: Favorite Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">FAVORITE LINKS</h4>
          <ul className="footer-links">
            <li><a href="#hero">HOME</a></li>
            <li><a href="#about-us">ABOUT</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#footer">CONTACT</a></li>
            <li><a href="#">SHIPPING &amp; RETURNS</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <div className="shopify-credit">
            <span className="shopify-icon">🛍️</span> Powered by Shopify · © 2026 Lollipop Sleek. All Rights Reserved.
          </div>
          <div className="payment-icons">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
