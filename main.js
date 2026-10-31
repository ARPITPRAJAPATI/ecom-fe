/* ==========================================================================
   LOLLIPOPS SLEEK — INTERACTIVE UI CONTROLLER
   Wired to Store engine (localStorage backend, Calotes pattern)
   ========================================================================== */

// ──────────────────────────────────────────────
// BOOT: Initialize Lucide Icons
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  initCartUI();
  initWishlistUI();
  initProductCards();
  initSearch();
  initNewsletter();
  initMobileMenu();
  initSmoothScrollNav();
  initCheckout();
  console.log('✅ Lollipop Sleek UI Controller initialized');
});


// ──────────────────────────────────────────────
// DOM ELEMENTS
// ──────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Cart Drawer
const cartToggleBtn     = $('#cartToggleBtn');
const cartCloseBtn      = $('#cartCloseBtn');
const cartDrawer        = $('#cartDrawer');
const cartOverlay       = $('#cartOverlay');
const cartCountBadge    = $('#cartCount');
const cartDrawerCount   = $('#cartDrawerCount');
const cartItemsContainer = $('#cartItemsContainer');
const emptyCartState    = $('#emptyCartState');
const cartSubtotalAmount = $('#cartSubtotalAmount');
const shippingProgressFill = $('#shippingProgressFill');
const shippingProgressText = $('#shippingProgressText');
const cartDrawerFooter  = $('#cartDrawerFooter');
const toastEl           = $('#toastNotification');

// Search
const searchBtn         = $('#searchBtn');
const searchModal       = $('#searchModal');
const searchModalClose  = $('#searchModalClose');
const searchInput       = $('#searchInput');
const searchResults     = $('#searchResults');

// Wishlist
const wishlistBtn       = $('#wishlistBtn');
const wishlistCountBadge = $('.wishlist-count');

// Newsletter
const newsletterForm    = $('#newsletterForm');
const newsletterEmail   = $('#newsletterEmail');
const formFeedback      = $('#formFeedback');


// ──────────────────────────────────────────────
// TOAST NOTIFICATIONS
// ──────────────────────────────────────────────
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}


// ──────────────────────────────────────────────
// CART DRAWER (open / close)
// ──────────────────────────────────────────────
function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initCartUI() {
  cartToggleBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Listen for store events
  window.addEventListener('cart:updated', () => renderCart());

  // Initial render
  renderCart();
}


// ──────────────────────────────────────────────
// RENDER CART (reads from Store.Cart)
// ──────────────────────────────────────────────
function renderCart() {
  const cart = Store.Cart.getCart();
  const count = Store.Cart.getItemCount();
  const subtotal = Store.Cart.getSubtotal();
  const savings = Store.Cart.getSavings();

  // Badge counts
  cartCountBadge.textContent = count;
  cartDrawerCount.textContent = count;

  // Subtotal
  cartSubtotalAmount.textContent = `$${subtotal.toFixed(2)} USD`;

  // Free shipping progress ($50 threshold)
  const FREE_SHIP = 50;
  if (subtotal >= FREE_SHIP) {
    shippingProgressFill.style.width = '100%';
    shippingProgressText.textContent = '🎉 You unlocked FREE Worldwide Shipping!';
  } else {
    const remaining = (FREE_SHIP - subtotal).toFixed(2);
    const pct = Math.min(100, (subtotal / FREE_SHIP) * 100);
    shippingProgressFill.style.width = `${pct}%`;
    shippingProgressText.textContent = `Add $${remaining} more for Free Shipping!`;
  }

  // Show/hide footer
  cartDrawerFooter.style.display = cart.length ? '' : 'none';

  // Render items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <div style="font-size: 3rem; opacity: 0.3; margin-bottom: 16px;">🛍️</div>
        <p>Your bag is currently empty.</p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="closeCart()">
          CONTINUE SHOPPING
        </button>
      </div>`;
    return;
  }

  let savingsHTML = '';
  if (savings > 0) {
    savingsHTML = `<div class="cart-savings-badge">You're saving $${savings.toFixed(2)} on this order! ✨</div>`;
  }

  cartItemsContainer.innerHTML = savingsHTML + cart.map(item => `
    <div class="cart-item-row" data-key="${item.cartKey}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <span class="item-size-tag">${item.size}</span>
        <div class="item-price">$${item.price.toFixed(2)} USD</div>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec" data-key="${item.cartKey}">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-key="${item.cartKey}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-key="${item.cartKey}" aria-label="Remove ${item.name}">✕</button>
    </div>
  `).join('');

  // Wire up qty + remove buttons (event delegation)
  cartItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      const item = cart.find(i => i.cartKey === key);
      if (!item) return;
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      Store.Cart.updateQty(key, item.qty + delta);
    });
  });

  cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.Cart.removeItem(btn.dataset.key);
      showToast('Item removed from bag');
    });
  });
}


// ──────────────────────────────────────────────
// PRODUCT CARDS — Wire Quick Add + Wishlist Heart
// ──────────────────────────────────────────────
function initProductCards() {
  $$('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const card = e.target.closest('.product-card');
      const id = card.dataset.id;
      const product = Store.Products.getById(id);

      if (product) {
        Store.Cart.addItem(product);
        showToast(`Added "${product.name}" to your bag! 🎉`);
        openCart();
      }
    });
  });
}


// ──────────────────────────────────────────────
// WISHLIST
// ──────────────────────────────────────────────
function initWishlistUI() {
  // Wishlist header button (generic)
  wishlistBtn.addEventListener('click', () => {
    showToast('♥ Wishlist feature — hover on products to add favorites!');
  });

  window.addEventListener('wishlist:updated', () => {
    wishlistCountBadge.textContent = Store.Wishlist.getCount();
  });

  // Set initial count
  wishlistCountBadge.textContent = Store.Wishlist.getCount();
}


// ──────────────────────────────────────────────
// SEARCH MODAL
// ──────────────────────────────────────────────
function initSearch() {
  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('open');
    setTimeout(() => searchInput.focus(), 100);
  });

  searchModalClose.addEventListener('click', () => searchModal.classList.remove('open'));
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.classList.remove('open');
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchModal.classList.remove('open');
      closeCart();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (!query) {
      searchResults.innerHTML = `<p class="search-hint">Try: watch, necklace, candle, sunglasses...</p>`;
      return;
    }

    const matches = Store.Products.search(query);

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">
          <p>No products found for "<strong>${query}</strong>"</p>
          <span>Try different keywords like "jewelry" or "candle"</span>
        </div>`;
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-row">
        <div class="search-result-left">
          <img src="${p.images[0]}" alt="${p.name}" class="search-thumb">
          <div>
            <strong class="search-result-name">${p.name}</strong>
            <div class="search-result-meta">
              <span class="search-result-price">$${p.price.toFixed(2)}</span>
              ${p.compareAtPrice > p.price ? `<span class="search-compare-price">$${p.compareAtPrice.toFixed(2)}</span>` : ''}
              <span class="search-result-category">${p.category}</span>
            </div>
          </div>
        </div>
        <button class="btn-primary search-add-btn" data-product-id="${p.id}">ADD</button>
      </div>
    `).join('');

    // Wire add buttons
    searchResults.querySelectorAll('.search-add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = Store.Products.getById(btn.dataset.productId);
        if (product) {
          Store.Cart.addItem(product);
          showToast(`Added "${product.name}" to your bag! 🎉`);
          searchModal.classList.remove('open');
          openCart();
        }
      });
    });
  });
}


// ──────────────────────────────────────────────
// NEWSLETTER
// ──────────────────────────────────────────────
function initNewsletter() {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    if (!email) return;

    // Save subscriber locally
    const subs = Store.Cart.getCart.length; // just show the code
    formFeedback.textContent = `✨ Welcome! Your 15% code is SLEEK15 — use it at checkout!`;
    formFeedback.style.color = '#8C4E97';
    newsletterEmail.value = '';

    // Also save user info
    Store.User.saveUser({ email, subscribedAt: new Date().toISOString() });

    setTimeout(() => { formFeedback.textContent = ''; }, 8000);
  });
}


// ──────────────────────────────────────────────
// CHECKOUT (inside cart drawer)
// ──────────────────────────────────────────────
function initCheckout() {
  const checkoutBtn = $('#checkoutBtn');

  checkoutBtn.addEventListener('click', () => {
    const cart = Store.Cart.getCart();
    if (cart.length === 0) {
      showToast('Your bag is empty — add items first!');
      return;
    }

    const subtotal = Store.Cart.getSubtotal();
    const shipping = subtotal >= 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    // Create order
    const order = Store.Orders.createOrder(cart, {
      name: 'Guest Customer',
      email: Store.User.getUser()?.email || 'guest@example.com'
    });

    closeCart();

    // Show confirmation
    showOrderConfirmation(order);
  });
}

function showOrderConfirmation(order) {
  const modal = document.createElement('div');
  modal.className = 'order-confirm-overlay';
  modal.innerHTML = `
    <div class="order-confirm-card">
      <div class="order-confirm-icon">🎉</div>
      <h2 class="order-confirm-title">Order Confirmed!</h2>
      <p class="order-confirm-id">Order ID: <strong>${order.orderId}</strong></p>
      
      <div class="order-confirm-summary">
        <div class="order-confirm-row">
          <span>Subtotal</span>
          <span>$${order.subtotal.toFixed(2)}</span>
        </div>
        <div class="order-confirm-row">
          <span>Shipping</span>
          <span>${order.shipping === 0 ? 'FREE ✨' : '$' + order.shipping.toFixed(2)}</span>
        </div>
        <div class="order-confirm-row total-row">
          <span>Total Paid</span>
          <span>$${order.total.toFixed(2)} USD</span>
        </div>
      </div>

      <div class="order-items-mini">
        ${order.items.map(i => `
          <div class="order-item-mini">
            <img src="${i.image}" alt="${i.name}">
            <span>${i.name} × ${i.qty}</span>
          </div>
        `).join('')}
      </div>

      <p class="order-confirm-note">A confirmation email has been sent to <strong>${order.customer.email}</strong></p>
      
      <button class="btn-primary" id="orderConfirmClose">CONTINUE SHOPPING</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(() => modal.classList.add('show'));

  modal.querySelector('#orderConfirmClose').addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 400);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
      setTimeout(() => modal.remove(), 400);
    }
  });
}


// ──────────────────────────────────────────────
// MOBILE MENU
// ──────────────────────────────────────────────
function initMobileMenu() {
  const menuBtn = $('#mobileMenuBtn');
  const nav = $('#mainNav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    const isOpen = nav.classList.contains('mobile-open');
    menuBtn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });
}


// ──────────────────────────────────────────────
// SMOOTH SCROLL + ACTIVE NAV HIGHLIGHT
// ──────────────────────────────────────────────
function initSmoothScrollNav() {
  $$('.header-nav a, .footer-links a, [href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const nav = $('#mainNav');
        if (nav.classList.contains('mobile-open')) {
          nav.classList.remove('mobile-open');
        }
      }
    });
  });
}


// ──────────────────────────────────────────────
// MAKE FUNCTIONS GLOBALLY ACCESSIBLE
// ──────────────────────────────────────────────
window.closeCart = closeCart;
window.openCart = openCart;
