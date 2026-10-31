"use client";

import React, { useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function SearchModal() {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    setQuickViewProduct
  } = useStore();

  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleSelectProduct = (product) => {
    setQuickViewProduct(product);
    setIsSearchOpen(false);
  };

  return (
    <div className={`search-modal ${isSearchOpen ? "open" : ""}`} onClick={() => setIsSearchOpen(false)}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()} style={{ background: "#FFFFFF", borderRadius: 24 }}>
        <button 
          className="search-modal-close" 
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
          style={{ color: "var(--purple-deep)" }}
        >
          <X size={20} />
        </button>
        <h3 className="search-title" style={{ color: "var(--purple-deep)", fontFamily: "var(--font-heading)" }}>
          Search Faeries Junk Archive 🧚‍♀️
        </h3>
        
        <div className="search-input-wrap">
          <input
            ref={inputRef}
            type="text"
            id="searchInput"
            placeholder="Search butterfly cami, corset, slip dress, bag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ borderColor: "var(--purple-border)", background: "#FAF7EE" }}
          />
          <Search size={18} className="search-input-icon" style={{ color: "var(--purple-brand)" }} />
        </div>

        <div className="search-results" style={{ marginTop: 20, maxHeight: 320, overflowY: "auto" }}>
          {searchQuery && (
            filteredProducts.length === 0 ? (
              <p style={{ textAlign: "center", color: "var(--purple-muted)", padding: "20px 0" }}>
                No vintage rags found matching &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: 10,
                      borderRadius: 12,
                      background: "#F2EDE2",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: 48, height: 48, borderRadius: 8, objectFit: "cover" }} />
                    <div style={{ flex: 1 }}>
                      <strong style={{ fontSize: "0.9rem", color: "var(--purple-deep)", display: "block" }}>{p.name}</strong>
                      <span style={{ fontSize: "0.8rem", color: "var(--purple-brand)", fontWeight: 700 }}>₹{Number(p.price).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
