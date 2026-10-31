"use client";

import React from "react";
import { useStore } from "../context/StoreContext";

export default function ToastNotification() {
  const { toastMessage } = useStore();

  return (
    <div className={`toast-notification ${toastMessage ? "show" : ""}`}>
      {toastMessage || "Item added to your bag!"}
    </div>
  );
}
