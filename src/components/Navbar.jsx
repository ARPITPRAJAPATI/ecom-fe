"use client";

import React from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const {
    cartItemCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useStore();

  return (
    <header className="site-header" style={{ background: "rgba(250, 247, 238, 0.94)", borderBottom: "1px solid var(--purple-border)" }}>
      <div className="header-container" style={{ gridTemplateColumns: "100px 1fr auto" }}>
        {/* Left: Search Trigger */}
        <div className="header-left">
          <button 
            className="icon-btn search-btn" 
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search vintage items"
            id="searchToggleBtn"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Center: Faeries Junk Circular Logo & Navigation */}
        <div className="header-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="header-logo">
            <a href="#hero" className="logo-link" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <img 
                src="/images/faeries-junk-logo.jpg" 
                alt="Faeries Junk Official Logo" 
                style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              />
              <div style={{ textAlign: "left" }}>
                <span className="logo-text" style={{ fontSize: "2.2rem", lineHeight: 1, color: "var(--purple-brand)" }}>
                  Faeries Junk
                </span>
                <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--purple-muted)", marginTop: 2 }}>
                  @FAERIESJUNK.STORE • 🧚‍♀️
                </span>
              </div>
            </a>
          </div>

          <nav className="header-nav" style={{ marginTop: 8 }}>
            <ul style={{ gap: 28 }}>
              <li><a href="#top-picks" className="active">AVAILABLE 💘</a></li>
              <li><a href="#about-us">OUR STORY</a></li>
              <li><a href="#policies">POLICIES 📌</a></li>
              <li><a href="#faq">REVIEWS 🎀</a></li>
              <li><a href="#instagram">INSTAGRAM 📸</a></li>
            </ul>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          <button 
            className="icon-btn wishlist-btn" 
            onClick={() => setIsWishlistOpen(true)}
            aria-label="Wishlist"
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="badge-count wishlist-count" style={{ background: "var(--fairy-pink)" }}>
                {wishlist.length}
              </span>
            )}
          </button>

          <button 
            className="icon-btn cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
            id="cartToggleBtn"
          >
            <ShoppingBag size={20} />
            <span className="badge-count cart-count" id="cartCount" style={{ background: "var(--purple-brand)" }}>
              {cartItemCount}
            </span>
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer" style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "24px",
          background: "var(--bg-primary)",
          borderTop: "1px solid var(--purple-border)",
          boxShadow: "var(--shadow-hover)"
        }}>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>HOME 🧚‍♀️</a>
          <a href="#top-picks" onClick={() => setIsMobileMenuOpen(false)}>AVAILABLE RAGS 💘</a>
          <a href="#about-us" onClick={() => setIsMobileMenuOpen(false)}>OUR STORY (@aryaamishraa)</a>
          <a href="#policies" onClick={() => setIsMobileMenuOpen(false)}>STORE POLICIES 📌</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>CUSTOMER REVIEWS 🎀</a>
          <a href="https://www.instagram.com/faeriesjunk.store/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
            VISIT INSTAGRAM (@faeriesjunk.store) ↗
          </a>
        </div>
      )}
    </header>
  );
}
