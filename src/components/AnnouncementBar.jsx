"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Sparkles size={14} className="announcement-sparkle" />
        <span>COMPLIMENTARY WORLDWIDE COURIER DELIVERY ON ALL ORDERS OVER $75 • USE CODE <strong>SLEEK15</strong> FOR 15% OFF</span>
        <Sparkles size={14} className="announcement-sparkle" />
      </div>
      <button 
        className="announcement-close" 
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
