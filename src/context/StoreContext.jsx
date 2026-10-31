"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_PRODUCTS, PROMO_CODES } from "../data/products";

const StoreContext = createContext(null);

const STORAGE_KEYS = {
  CART: "lollipop_sleek_cart",
  WISHLIST: "lollipop_sleek_wishlist",
  ORDERS: "lollipop_sleek_orders",
  PROMO: "lollipop_sleek_applied_promo",
  USER: "lollipop_sleek_user_profile"
};

const FREE_SHIPPING_THRESHOLD = 75.00;
const STANDARD_SHIPPING_FEE = 4.99;

export function StoreProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [products] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [userProfile, setUserProfile] = useState({ name: "Elena Laurent", email: "elena@example.com" });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [orderModalData, setOrderModalData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [toastMessage, setToastMessage] = useState(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
      if (savedPromo) setAppliedPromo(JSON.parse(savedPromo));

      const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
      if (savedUser) setUserProfile(JSON.parse(savedUser));
    } catch (e) {
      console.warn("Could not load from localStorage", e);
    }
    setMounted(true);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {}
  }, [cart, mounted]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist, mounted]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch (e) {}
  }, [orders, mounted]);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (appliedPromo) {
        localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem(STORAGE_KEYS.PROMO);
      }
    } catch (e) {}
  }, [appliedPromo, mounted]);

  // Toast notification helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const addToCart = (product, quantity = 1, selectedColor = null) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && (!selectedColor || item.selectedColor === selectedColor)
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            ...product,
            quantity,
            selectedColor: selectedColor || (product.colors ? product.colors[0] : null),
            addedAt: Date.now()
          }
        ];
      }
    });

    showToast(`Added "${product.name || product.title}" to bag!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, selectedColor = null) => {
    setCart((prev) => prev.filter((item) => !(item.id === itemId && (!selectedColor || item.selectedColor === selectedColor))));
    showToast("Item removed from bag");
  };

  const updateCartQty = (itemId, newQty, selectedColor = null) => {
    if (newQty <= 0) {
      removeFromCart(itemId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId && (!selectedColor || item.selectedColor === selectedColor)) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  let discountAmount = 0;
  let isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD;

  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = (cartSubtotal * appliedPromo.discountPercent) / 100;
    } else if (appliedPromo.flatDiscount) {
      discountAmount = Math.min(appliedPromo.flatDiscount, cartSubtotal);
    }
    if (appliedPromo.freeShipping) {
      isFreeShipping = true;
    }
  }

  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const freeShippingProgress = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  // Promo code operations
  const applyPromoCode = (code) => {
    const cleanCode = (code || "").trim().toUpperCase();
    const promo = PROMO_CODES[cleanCode];

    if (!promo) {
      return { success: false, message: "Invalid promo code. Try SLEEK15 or WELCOME10" };
    }

    if (promo.minSpend && cartSubtotal < promo.minSpend) {
      return { success: false, message: `Minimum spend of $${promo.minSpend} required for this code.` };
    }

    setAppliedPromo(promo);
    showToast(`Code "${promo.code}" applied!`);
    return { success: true, message: `Code ${promo.code} applied successfully!` };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast("Promo code removed");
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed "${product.name || product.title}" from wishlist`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added "${product.name || product.title}" to wishlist!`);
    }
  };

  const isWishlisted = (productId) => wishlist.some((item) => item.id === productId);

  // Checkout & Orders
  const checkout = (customerInfo = {}) => {
    if (cart.length === 0) {
      return { success: false, message: "Your bag is empty" };
    }

    const orderId = `LL-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newOrder = {
      orderId,
      date: new Date().toISOString(),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: cartTotal,
      promoApplied: appliedPromo ? appliedPromo.code : null,
      customer: {
        name: customerInfo.name || userProfile.name,
        email: customerInfo.email || userProfile.email,
        address: customerInfo.address || "14 Rue de Rivoli, Paris, France"
      },
      status: "Confirmed",
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };

    setOrders((prev) => [newOrder, ...prev]);
    setOrderModalData(newOrder);
    setCart([]);
    setAppliedPromo(null);
    setIsCartOpen(false);

    return { success: true, order: newOrder };
  };

  // Search filtered products
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <StoreContext.Provider
      value={{
        mounted,
        products,
        filteredProducts,
        activeCategory,
        setActiveCategory,
        // Cart
        cart,
        cartItemCount,
        cartSubtotal,
        discountAmount,
        shippingFee,
        cartTotal,
        freeShippingProgress,
        remainingForFreeShipping,
        FREE_SHIPPING_THRESHOLD,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        // Promo
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        // Wishlist
        wishlist,
        toggleWishlist,
        isWishlisted,
        // Checkout & Orders
        orders,
        checkout,
        orderModalData,
        setOrderModalData,
        // Modals & Drawers
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        quickViewProduct,
        setQuickViewProduct,
        searchQuery,
        setSearchQuery,
        // Toast
        toastMessage,
        showToast,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
