"use client";

import React from "react";
import { Check, AlertCircle, Truck, RefreshCw } from "lucide-react";

export default function BrandTalkSection() {
  const handleExplore = () => {
    const el = document.getElementById("top-picks");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="brand-talk-section" id="policies" style={{ background: "#F2EDE2" }}>
      <div className="brand-talk-header">
        <h2 className="sub-header-title" style={{ color: "var(--purple-deep)" }}>
          IMPORTANT STORE POLICIES 📌
        </h2>
        <p className="sub-header-desc" style={{ color: "var(--purple-muted)" }}>
          Please review our boutique guidelines before claiming your vintage treasures. As an independent thrift archive, our rules ensure fair and conscious curation for all fairies.
        </p>
      </div>

      <div className="brand-talk-grid">
        {/* Left Card: Policies Visual */}
        <div className="brand-candle-card">
          <div className="candle-image-wrap" style={{ height: 440, borderColor: "#FFFFFF" }}>
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" 
              alt="Vintage suede shoulder bag and accessories flatlay" 
              className="candle-img" 
            />
            <div className="organic-ribbon" style={{ background: "var(--purple-brand)" }}>
              <span>Strictly 1 of 1 drops 💫</span>
            </div>
          </div>
        </div>

        {/* Right Content: Policy Bullet Points */}
        <div className="brand-content-card">
          <h3 className="brand-accent-title" style={{ color: "var(--purple-deep)", fontSize: "2rem" }}>
            The Faeries Junk Code 🧚‍♀️
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "var(--fairy-pink)", borderRadius: "50%", padding: 6, color: "#fff", display: "flex" }}>
                <AlertCircle size={16} />
              </div>
              <div>
                <strong style={{ color: "var(--purple-deep)", fontSize: "0.95rem" }}>NO CASH ON DELIVERY (No COD ❌)</strong>
                <p style={{ color: "var(--purple-muted)", fontSize: "0.85rem", marginTop: 2 }}>
                  All orders are strictly prepaid via secure UPI, Debit/Credit Card, or NetBanking to avoid unaccepted parcels.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "var(--purple-brand)", borderRadius: "50%", padding: 6, color: "#fff", display: "flex" }}>
                <RefreshCw size={16} />
              </div>
              <div>
                <strong style={{ color: "var(--purple-deep)", fontSize: "0.95rem" }}>NO RETURNS OR CANCELLATIONS 📌</strong>
                <p style={{ color: "var(--purple-muted)", fontSize: "0.85rem", marginTop: 2 }}>
                  Because each rag is unique vintage with specified measurements, sales are final. Please review sizing notes carefully.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "var(--purple-brand)", borderRadius: "50%", padding: 6, color: "#fff", display: "flex" }}>
                <Truck size={16} />
              </div>
              <div>
                <strong style={{ color: "var(--purple-deep)", fontSize: "0.95rem" }}>SHIPPING ACROSS INDIA 🇮🇳</strong>
                <p style={{ color: "var(--purple-muted)", fontSize: "0.85rem", marginTop: 2 }}>
                  Orders are dispatched within 48 hours with full tracking details. Free express shipping on orders over ₹1,999!
                </p>
              </div>
            </div>
          </div>

          <div className="brand-cta-row">
            <button className="btn-primary" onClick={handleExplore} style={{ background: "var(--purple-brand)" }}>
              CLAIM AVAILABLE PIECES 💘
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
