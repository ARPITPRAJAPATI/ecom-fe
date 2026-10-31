"use client";

import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesStrip from "../components/FeaturesStrip";
import AboutSection from "../components/AboutSection";
import BrandTalkSection from "../components/BrandTalkSection";
import ProductGrid from "../components/ProductGrid";
import WelcomeSection from "../components/WelcomeSection";
import VibeSection from "../components/VibeSection";
import BlogSection from "../components/BlogSection";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/Newsletter";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import WishlistDrawer from "../components/WishlistDrawer";
import QuickViewModal from "../components/QuickViewModal";
import OrderConfirmationModal from "../components/OrderConfirmationModal";
import SearchModal from "../components/SearchModal";
import ToastNotification from "../components/ToastNotification";

export default function HomePage() {
  return (
    <div className="site-wrapper">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Header & Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with Arch Frame */}
        <HeroSection />

        {/* 3-Feature Strip */}
        <FeaturesStrip />

        {/* About Us / Our Story */}
        <AboutSection />

        {/* Talk About Your Brand (Candle & Ribbon) */}
        <BrandTalkSection />

        {/* Our Top Picks (Product Grid) */}
        <ProductGrid />

        {/* Welcome To Lollipop Sleek */}
        <WelcomeSection />

        {/* The Vibe Start */}
        <VibeSection />

        {/* Blog Posts */}
        <BlogSection />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Newsletter 15% Discount */}
        <Newsletter />

        {/* Follow On Instagram */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <OrderConfirmationModal />
      <SearchModal />
      <ToastNotification />
    </div>
  );
}
