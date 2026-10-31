"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar" style={{ background: "#3D5E40", color: "#FAF7EE" }}>
      <div className="announcement-content">
        <Sparkles size={13} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />
        <span>SHIPPING ACROSS 🇮🇳 • NO COD ❌ • CURATED &amp; HANDPICKED VINTAGE RAGS 🧚‍♀️ • USE CODE <strong>FAEJUNK10</strong> FOR 10% OFF</span>
        <Sparkles size={13} style={{ display: "inline-block", verticalAlign: "middle", marginLeft: 6 }} />
      </div>
      <button 
        className="announcement-close" 
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        style={{ color: "#FAF7EE" }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
