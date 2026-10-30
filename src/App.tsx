import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { BookingSection } from './components/BookingSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FaqAndLocation } from './components/FaqAndLocation';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { CartDrawer } from './components/CartDrawer';
import { Service, Product, CartItem } from './types';
import { SERVICES } from './data/mockData';

export default function App() {
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedServicePreset, setSelectedServicePreset] = useState<Service | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Booking smooth scroll & preset
  const scrollToBooking = (service?: Service) => {
    if (service) {
      setSelectedServicePreset(service);
    }
    const section = document.getElementById('registro');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to store
  const scrollToStore = () => {
    const section = document.getElementById('productos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#17191C] text-[#E8E1D5] selection:bg-[#A88958] selection:text-[#17191C]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      <main>
        {/* Hero Section with Official Title, Subtitle, and Primary CTAs */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenStore={scrollToStore}
          onOpenFlyer={() => setIsFlyerOpen(true)}
        />

        {/* Spotlight Opening Promotion Corte + Barba $24.000 */}
        <PromoBanner
          onClaimPromo={() => {
            const promo = SERVICES.find((s) => s.id === 'promo-apertura');
            scrollToBooking(promo);
          }}
        />

        {/* Services Showcase */}
        <ServicesSection
          onSelectService={(service) => scrollToBooking(service)}
        />

        {/* Grooming Products & Official Merch */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Interactive Booking & Appointment Flow */}
        <BookingSection
          selectedServicePreset={selectedServicePreset}
          onClearPreset={() => setSelectedServicePreset(null)}
        />

        {/* Salon Experience & Master Barbers */}
        <ExperienceSection />

        {/* Location & FAQs */}
        <FaqAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-res Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
        onOpenBooking={() => scrollToBooking(SERVICES[0])}
      />

      {/* Slide-over Shopping Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
