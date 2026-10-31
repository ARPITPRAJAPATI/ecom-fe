"use client";

import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function BigBanner() {
  const { setActiveCategory } = useStore();

  const handleClick = () => {
    setActiveCategory("living");
    const shopEl = document.getElementById("shop");
    if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="editorial-banner-section">
      <div className="banner-inner-box">
        <div className="banner-img-col">
          <img 
            src="/images/girl-hat-lavender.jpg" 
            alt="Editorial muse wearing lavender hat in soft sunlight"
            className="banner-editorial-img"
            loading="lazy"
          />
        </div>

        <div className="banner-text-col">
          <div className="banner-tag">
            <Flame size={14} color="#8e6c88" />
            <span>SEASON HIGHLIGHT</span>
          </div>

          <h2 className="banner-title">
            Unapologetically Feminine. <br />
            <em>Infinitely Chic.</em>
          </h2>

          <p className="banner-desc">
            Discover our Provence-inspired sanctuary edit. Featuring the Wild Lavender & Madagascar Vanilla hand-poured candle, formulated to restore peace and fragrance to your sanctuary.
          </p>

          <div className="banner-action-wrap">
            <button className="btn-primary" onClick={handleClick}>
              <span>SHOP THE SCENT EDIT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
