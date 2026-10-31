/* ==========================================================================
   LOLLIPOPS SLEEK — LOCAL STORE ENGINE
   Calotes-inspired e-commerce logic using localStorage (no DB required)
   ========================================================================== */

// ──────────────────────────────────────────────
// PRODUCT CATALOG (Local Data — mirrors Calotes Product model)
// ──────────────────────────────────────────────
const PRODUCT_CATALOG = [
  {
    id: 'prod_001',
    slug: 'lavender-smartwatch',
    name: 'Lavender Smartwatch',
    description: 'Minimalist pastel lavender smartwatch with soft silicone strap and square touch display. Track your steps, heart rate, and time — all in style.',
    price: 30.00,
    compareAtPrice: 49.99,
    images: ['/images/product-watch.jpg'],
    category: 'watches',
    brand: 'Lollipop Sleek',
    sizes: ['One Size'],
    tags: ['bestseller', 'watch', 'smartwatch', 'accessory'],
    featured: true,
    inStock: true,
    stockQty: 24,
    rating: 4.8,
    reviewCount: 42,
    createdAt: '2026-09-15T10:00:00Z'
  },
  {
    id: 'prod_002',
    slug: 'amethyst-drop-necklace',
    name: 'Amethyst Drop Necklace',
    description: 'Dainty gold chain necklace with a genuine teardrop amethyst crystal pendant. The perfect subtle luxury accent for everyday elegance.',
    price: 30.00,
    compareAtPrice: 45.00,
    images: ['/images/product-necklace.jpg'],
    category: 'jewelry',
    brand: 'Lollipop Sleek',
    sizes: ['One Size'],
    tags: ['trending', 'necklace', 'jewelry', 'amethyst', 'gold'],
    featured: true,
    inStock: true,
    stockQty: 38,
    rating: 4.9,
    reviewCount: 58,
    createdAt: '2026-09-20T10:00:00Z'
  },
  {
    id: 'prod_003',
    slug: 'lilac-flower-hair-clips',
    name: 'Lilac Flower Hair Clips',
    description: 'Delicate purple lilac flower hairpin clips handmade with attention to botanical detail. Set of 3 clips for effortless styling.',
    price: 30.00,
    compareAtPrice: 39.99,
    images: ['/images/product-hairclip.jpg'],
    category: 'accessories',
    brand: 'Lollipop Sleek',
    sizes: ['One Size'],
    tags: ['limited', 'hair clip', 'floral', 'accessory', 'handmade'],
    featured: true,
    inStock: true,
    stockQty: 15,
    rating: 4.7,
    reviewCount: 35,
    createdAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'prod_004',
    slug: 'lavender-gradient-sunglasses',
    name: 'Lavender Gradient Sunglasses',
    description: 'Chic frameless rectangular sunglasses with lavender purple gradient tinted lenses and thin gold arms. UV400 protection meets high fashion.',
    price: 30.00,
    compareAtPrice: 55.00,
    images: ['/images/product-sunglasses.jpg'],
    category: 'accessories',
    brand: 'Lollipop Sleek',
    sizes: ['One Size'],
    tags: ['new', 'sunglasses', 'uv400', 'accessory', 'summer'],
    featured: true,
    inStock: true,
    stockQty: 64,
    rating: 4.9,
    reviewCount: 64,
    createdAt: '2026-10-10T10:00:00Z'
  },
  {
    id: 'prod_005',
    slug: 'lavender-soy-candle',
    name: 'Lavender & Wild Flower Candle',
    description: 'Hand-poured soy candle in a ribbed glass jar with natural French lavender essential oil. Burns for 50+ hours with a calm, dreamy scent.',
    price: 24.00,
    compareAtPrice: 34.99,
    images: ['/images/lavender-candle.jpg'],
    category: 'home',
    brand: 'Lollipop Sleek',
    sizes: ['200g', '400g'],
    tags: ['candle', 'aromatherapy', 'home', 'soy', 'lavender'],
    featured: false,
    inStock: true,
    stockQty: 50,
    rating: 4.8,
    reviewCount: 73,
    createdAt: '2026-08-20T10:00:00Z'
  },
  {
    id: 'prod_006',
    slug: 'wax-seal-stationery-set',
    name: 'Wax Seal Stationery Set',
    description: 'Luxury lavender envelope set with gold wax seals, calligraphy papers, and dried lavender sprigs. Perfect for heartfelt letters and invitations.',
    price: 36.00,
    compareAtPrice: 48.00,
    images: ['/images/stationery-letters.jpg'],
    category: 'stationery',
    brand: 'Lollipop Sleek',
    sizes: ['Set of 6', 'Set of 12'],
    tags: ['stationery', 'wax seal', 'calligraphy', 'gift', 'luxury'],
    featured: false,
    inStock: true,
    stockQty: 22,
    rating: 5.0,
    reviewCount: 19,
    createdAt: '2026-10-05T10:00:00Z'
  }
];

const CATEGORIES = [
  { id: 'cat_1', slug: 'watches', name: 'Watches', productCount: 1 },
  { id: 'cat_2', slug: 'jewelry', name: 'Jewelry', productCount: 1 },
  { id: 'cat_3', slug: 'accessories', name: 'Accessories', productCount: 2 },
  { id: 'cat_4', slug: 'home', name: 'Home & Living', productCount: 1 },
  { id: 'cat_5', slug: 'stationery', name: 'Stationery', productCount: 1 }
];


// ──────────────────────────────────────────────
// LOCAL STORAGE HELPER (safe read/write)
// ──────────────────────────────────────────────
const LS = {
  get(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { console.warn('localStorage full or blocked:', e); }
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch {}
  }
};


// ──────────────────────────────────────────────
// CART SERVICE (Calotes CartContext pattern)
// ──────────────────────────────────────────────
const CART_KEY = 'lollipop_cart';

const CartService = {
  getCart() {
    return LS.get(CART_KEY) || [];
  },

  _save(cart) {
    LS.set(CART_KEY, cart);
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
  },

  addItem(product, qty = 1, selectedSize = 'One Size') {
    const cart = this.getCart();
    const cartKey = `${product.id}_${selectedSize}`;
    const existing = cart.find(i => i.cartKey === cartKey);

    if (existing) {
      existing.qty = Math.min(existing.qty + qty, product.stockQty || 99);
    } else {
      cart.push({
        cartKey,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        image: product.images[0],
        size: selectedSize,
        qty: Math.min(qty, product.stockQty || 99),
        maxQty: product.stockQty || 99
      });
    }

    this._save(cart);
    return cart;
  },

  updateQty(cartKey, newQty) {
    let cart = this.getCart();
    const item = cart.find(i => i.cartKey === cartKey);
    if (!item) return cart;

    if (newQty <= 0) {
      cart = cart.filter(i => i.cartKey !== cartKey);
    } else {
      item.qty = Math.min(newQty, item.maxQty);
    }

    this._save(cart);
    return cart;
  },

  removeItem(cartKey) {
    let cart = this.getCart().filter(i => i.cartKey !== cartKey);
    this._save(cart);
    return cart;
  },

  clearCart() {
    this._save([]);
    return [];
  },

  getItemCount() {
    return this.getCart().reduce((acc, i) => acc + i.qty, 0);
  },

  getSubtotal() {
    return this.getCart().reduce((acc, i) => acc + i.price * i.qty, 0);
  },

  getSavings() {
    return this.getCart().reduce((acc, i) => {
      const compare = i.compareAtPrice || i.price;
      return acc + (compare - i.price) * i.qty;
    }, 0);
  }
};


// ──────────────────────────────────────────────
// WISHLIST SERVICE (Calotes WishlistContext pattern)
// ──────────────────────────────────────────────
const WISHLIST_KEY = 'lollipop_wishlist';

const WishlistService = {
  getWishlist() {
    return LS.get(WISHLIST_KEY) || [];
  },

  _save(list) {
    LS.set(WISHLIST_KEY, list);
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { wishlist: list } }));
  },

  toggle(product) {
    let list = this.getWishlist();
    const exists = list.find(i => i.productId === product.id);

    if (exists) {
      list = list.filter(i => i.productId !== product.id);
    } else {
      list.push({
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        addedAt: new Date().toISOString()
      });
    }

    this._save(list);
    return { wishlisted: !exists, list };
  },

  isWishlisted(productId) {
    return this.getWishlist().some(i => i.productId === productId);
  },

  getCount() {
    return this.getWishlist().length;
  }
};


// ──────────────────────────────────────────────
// ORDER SERVICE (Calotes Order pattern — local)
// ──────────────────────────────────────────────
const ORDERS_KEY = 'lollipop_orders';

const OrderService = {
  getOrders() {
    return LS.get(ORDERS_KEY) || [];
  },

  _save(orders) {
    LS.set(ORDERS_KEY, orders);
  },

  createOrder(cartItems, customerInfo, promoDiscount = 0) {
    const orders = this.getOrders();
    const subtotal = cartItems.reduce((a, i) => a + i.price * i.qty, 0);
    const shipping = subtotal >= 50 ? 0 : 5.99;
    const total = Math.max(0, subtotal - promoDiscount + shipping);

    const order = {
      orderId: `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      items: cartItems.map(i => ({
        productId: i.productId,
        name: i.name,
        price: i.price,
        qty: i.qty,
        size: i.size,
        image: i.image
      })),
      customer: customerInfo,
      subtotal,
      shipping,
      promoDiscount,
      total,
      status: 'confirmed',
      paymentStatus: 'paid',
      createdAt: new Date().toISOString()
    };

    orders.unshift(order);
    this._save(orders);

    // Clear cart after order
    CartService.clearCart();

    return order;
  },

  getOrderById(orderId) {
    return this.getOrders().find(o => o.orderId === orderId) || null;
  }
};


// ──────────────────────────────────────────────
// PRODUCT SERVICE (query, filter, search)
// ──────────────────────────────────────────────
const ProductService = {
  getAll() {
    return [...PRODUCT_CATALOG];
  },

  getById(id) {
    return PRODUCT_CATALOG.find(p => p.id === id) || null;
  },

  getBySlug(slug) {
    return PRODUCT_CATALOG.find(p => p.slug === slug) || null;
  },

  getFeatured() {
    return PRODUCT_CATALOG.filter(p => p.featured);
  },

  getByCategory(categorySlug) {
    return PRODUCT_CATALOG.filter(p => p.category === categorySlug);
  },

  search(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return PRODUCT_CATALOG.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) ||
      p.category.includes(q)
    );
  },

  filter({ category, minPrice, maxPrice, search, sort } = {}) {
    let results = [...PRODUCT_CATALOG];

    if (category) {
      results = results.filter(p => p.category === category);
    }
    if (minPrice !== undefined) {
      results = results.filter(p => p.price >= minPrice);
    }
    if (maxPrice !== undefined) {
      results = results.filter(p => p.price <= maxPrice);
    }
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price); break;
      case 'price-desc':
        results.sort((a, b) => b.price - a.price); break;
      case 'newest':
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating); break;
      default:
        break;
    }

    return results;
  },

  getCategories() {
    return [...CATEGORIES];
  }
};


// ──────────────────────────────────────────────
// PROMO CODE SERVICE (Calotes PromoCode pattern)
// ──────────────────────────────────────────────
const PROMO_CODES = {
  'SLEEK15': { type: 'percent', value: 15, minOrder: 0, description: '15% off your order' },
  'WELCOME10': { type: 'percent', value: 10, minOrder: 0, description: '10% off for new customers' },
  'FLAT5': { type: 'flat', value: 5, minOrder: 25, description: '$5 off orders over $25' },
  'FREESHIP': { type: 'shipping', value: 0, minOrder: 0, description: 'Free shipping on any order' }
};

const PromoService = {
  validate(code, subtotal) {
    const promo = PROMO_CODES[code.toUpperCase()];
    if (!promo) {
      return { valid: false, message: 'Invalid promo code.' };
    }
    if (subtotal < promo.minOrder) {
      return { valid: false, message: `Minimum order of $${promo.minOrder} required.` };
    }

    let discount = 0;
    if (promo.type === 'percent') {
      discount = (subtotal * promo.value) / 100;
    } else if (promo.type === 'flat') {
      discount = promo.value;
    }

    return {
      valid: true,
      discount: Math.round(discount * 100) / 100,
      description: promo.description,
      message: `✨ ${promo.description} applied!`
    };
  }
};


// ──────────────────────────────────────────────
// CUSTOMER / AUTH SERVICE (local user — no real auth)
// ──────────────────────────────────────────────
const USER_KEY = 'lollipop_user';

const UserService = {
  getUser() {
    return LS.get(USER_KEY) || null;
  },

  saveUser(info) {
    const user = {
      ...info,
      id: `usr_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    LS.set(USER_KEY, user);
    return user;
  },

  clearUser() {
    LS.remove(USER_KEY);
  }
};


// ──────────────────────────────────────────────
// RECENTLY VIEWED (track browsing history)
// ──────────────────────────────────────────────
const RECENT_KEY = 'lollipop_recent';
const MAX_RECENT = 8;

const RecentService = {
  getRecent() {
    return LS.get(RECENT_KEY) || [];
  },

  addViewed(productId) {
    let recent = this.getRecent().filter(id => id !== productId);
    recent.unshift(productId);
    if (recent.length > MAX_RECENT) recent = recent.slice(0, MAX_RECENT);
    LS.set(RECENT_KEY, recent);
  },

  getRecentProducts() {
    const ids = this.getRecent();
    return ids.map(id => ProductService.getById(id)).filter(Boolean);
  }
};


// ──────────────────────────────────────────────
// EXPORT TO WINDOW (global access from main.js)
// ──────────────────────────────────────────────
window.Store = {
  Products: ProductService,
  Cart: CartService,
  Wishlist: WishlistService,
  Orders: OrderService,
  Promo: PromoService,
  User: UserService,
  Recent: RecentService,
  Catalog: PRODUCT_CATALOG,
  Categories: CATEGORIES
};

console.log('🛍️ Lollipop Sleek Store Engine loaded — localStorage mode (no DB)');
console.log(`📦 ${PRODUCT_CATALOG.length} products | ${CATEGORIES.length} categories`);
