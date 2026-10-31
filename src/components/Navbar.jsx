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
    <header className="site-header">
      <div className="header-container">
        {/* Left: Search Trigger */}
        <div className="header-left">
          <button 
            className="icon-btn search-btn" 
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search items"
            id="searchToggleBtn"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Center: Brand Script Logo & Navigation */}
        <div className="header-center">
          <div className="header-logo">
            <a href="#hero" className="logo-link">
              <span className="logo-text">Lollipops</span>
              <span className="logo-sub">Sleek</span>
            </a>
          </div>

          <nav className="header-nav">
            <ul>
              <li><a href="#hero" className="active">HOME</a></li>
              <li><a href="#about-us">ABOUT US</a></li>
              <li><a href="#brand-story">OUR BRAND</a></li>
              <li><a href="#top-picks">TOP PICKS</a></li>
              <li><a href="#blog">BLOG</a></li>
              <li><a href="#newsletter">JOIN VIP</a></li>
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
              <span className="badge-count wishlist-count">{wishlist.length}</span>
            )}
          </button>

          <button 
            className="icon-btn cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
            id="cartToggleBtn"
          >
            <ShoppingBag size={20} />
            <span className="badge-count cart-count" id="cartCount">{cartItemCount}</span>
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
          background: "var(--bg-card)",
          borderTop: "1px solid var(--purple-border)",
          boxShadow: "var(--shadow-hover)"
        }}>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
          <a href="#about-us" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a>
          <a href="#brand-story" onClick={() => setIsMobileMenuOpen(false)}>OUR BRAND</a>
          <a href="#top-picks" onClick={() => setIsMobileMenuOpen(false)}>TOP PICKS</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>BLOG</a>
          <a href="#newsletter" onClick={() => setIsMobileMenuOpen(false)}>JOIN VIP (15% OFF)</a>
        </div>
      )}
    </header>
  );
}
