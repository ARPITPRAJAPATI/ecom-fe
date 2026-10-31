export const INITIAL_PRODUCTS = [
  {
    id: "prod_001",
    name: "Hand Watch",
    title: "Hand Watch",
    slug: "hand-watch-rosegold",
    price: 30.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 42,
    category: "Accessories",
    badge: "Sale -33%",
    isNew: false,
    isBestSeller: true,
    image: "/images/product-watch.jpg",
    description: "Minimalist stainless steel timepiece featuring a soft-blush dial, rose-gold accents, and genuine leather wristband. Water-resistant up to 30m.",
    features: ["Rose-gold stainless steel case", "Scratch-resistant sapphire glass", "Italian blush leather strap", "Japanese quartz movement"],
    stock: 14,
    colors: ["Rose Gold", "Silver Blush", "Champagne"]
  },
  {
    id: "prod_002",
    name: "Aura Pearl Pendant",
    title: "Aura Pearl Pendant",
    slug: "aura-pearl-pendant",
    price: 38.00,
    originalPrice: 52.00,
    rating: 5.0,
    reviewsCount: 38,
    category: "Jewellery",
    badge: "Best Seller",
    isNew: false,
    isBestSeller: true,
    image: "/images/product-necklace.jpg",
    description: "18k gold-dipped fine herringbone chain accented with a hand-selected freshwater baroque pearl. Perfect for everyday subtle luxury.",
    features: ["18k gold vermeil", "Natural freshwater baroque pearl", "Adjustable 16\"-18\" length", "Hypoallergenic & nickel-free"],
    stock: 9,
    colors: ["18k Gold", "Sterling Silver"]
  },
  {
    id: "prod_003",
    name: "French Pearl Claw Clip",
    title: "French Pearl Claw Clip",
    slug: "french-pearl-claw-clip",
    price: 18.00,
    originalPrice: 24.00,
    rating: 4.8,
    reviewsCount: 29,
    category: "Hair",
    badge: "Trending",
    isNew: true,
    isBestSeller: false,
    image: "/images/product-hairclip.jpg",
    description: "Handcrafted eco-acetate claw clip adorned with luminous micro-pearl inlays. Built with heavy-duty internal spring for secure hold on all hair textures.",
    features: ["Eco-friendly cellulose acetate", "Hand-set luminous pearls", "Heavy-duty tension spring", "9.5cm length"],
    stock: 22,
    colors: ["Ivory Pearl", "Lilac Mist", "Opal Cream"]
  },
  {
    id: "prod_004",
    name: "Venice Cat-Eye Sunglasses",
    title: "Venice Cat-Eye Sunglasses",
    slug: "venice-cateye-sunglasses",
    price: 42.00,
    originalPrice: 60.00,
    rating: 4.9,
    reviewsCount: 56,
    category: "Eyewear",
    badge: "New",
    isNew: true,
    isBestSeller: false,
    image: "/images/product-sunglasses.jpg",
    description: "Sculpted Italian acetate frames with warm amber-gradient UV400 lenses. Retro Parisian chic reinterpreted for the modern muse.",
    features: ["UV400 Category 3 protection", "Hand-polished Italian acetate", "5-barrel stainless steel hinges", "Includes vegan leather case"],
    stock: 7,
    colors: ["Tortoise Blush", "Milky Lavender", "Classic Black"]
  },
  {
    id: "prod_005",
    name: "Wild Lavender & Vanilla Soy Candle",
    title: "Wild Lavender & Vanilla Soy Candle",
    slug: "lavender-vanilla-candle",
    price: 26.00,
    originalPrice: 32.00,
    rating: 5.0,
    reviewsCount: 84,
    category: "Living",
    badge: "Staff Pick",
    isNew: false,
    isBestSeller: true,
    image: "/images/lavender-candle.jpg",
    description: "100% natural soy wax candle hand-poured in small batches in Provence. Infused with pure French lavender essential oils, Madagascar vanilla, and organic cotton wick.",
    features: ["55-hour clean burn time", "100% soy wax & cotton wick", "Pure French lavender extract", "Frosted violet glass vessel"],
    stock: 18,
    colors: ["Frosted Lilac"]
  },
  {
    id: "prod_006",
    name: "Ceramic Ribbed Fluted Vase",
    title: "Ceramic Ribbed Fluted Vase",
    slug: "ceramic-ribbed-fluted-vase",
    price: 34.00,
    originalPrice: 48.00,
    rating: 4.7,
    reviewsCount: 19,
    category: "Living",
    badge: "Sale -29%",
    isNew: false,
    isBestSeller: false,
    image: "/images/lavender-vase.jpg",
    description: "Sculptural stoneware vase with tactile fluted ribs and a powdery matte lavender finish. Designed to elevate dried florals and fresh peony stems.",
    features: ["Artisan stoneware ceramic", "Matte chalk-lavender glaze", "Water-tight interior", "Height: 22cm, Diameter: 11cm"],
    stock: 11,
    colors: ["Chalk Lavender", "Dusty Rose"]
  }
];

export const PROMO_CODES = {
  SLEEK15: { code: "SLEEK15", discountPercent: 15, minSpend: 0, description: "15% off boutique opening discount" },
  WELCOME10: { code: "WELCOME10", discountPercent: 10, minSpend: 25, description: "10% off for new members" },
  FLAT5: { code: "FLAT5", flatDiscount: 5.00, minSpend: 30, description: "$5 off orders over $30" },
  FREESHIP: { code: "FREESHIP", freeShipping: true, minSpend: 0, description: "Complimentary worldwide shipping" }
};

export const REVIEWS = [
  {
    id: 1,
    author: "Elena Rostova",
    role: "Verified Buyer",
    rating: 5,
    date: "2 days ago",
    content: "The packaging alone felt like opening a luxury Parisian gift box. The Hand Watch and Pearl Necklace are even more stunning in person than on photos!",
    productName: "Hand Watch & Aura Pendant"
  },
  {
    id: 2,
    author: "Camille Laurent",
    role: "Verified Buyer",
    rating: 5,
    date: "1 week ago",
    content: "Obsessed with the lavender aesthetic! The French hair clip has the best grip ever without pulling my hair. Fast delivery and lovely customer support.",
    productName: "French Pearl Claw Clip"
  },
  {
    id: 3,
    author: "Sophia Sterling",
    role: "Verified Buyer",
    rating: 5,
    date: "2 weeks ago",
    content: "The soy candle fills the entire loft with the softest Provence lavender scent. Zero synthetic headache smell. 10/10 quality will buy again!",
    productName: "Wild Lavender Soy Candle"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Spring Edit: The Soft Lavender Palette Taking Over Fashion Week",
    date: "Oct 28, 2026",
    readTime: "4 min read",
    category: "Style Guide",
    image: "/images/blog-comfy-chic.jpg",
    excerpt: "How muted pastel tones and effortless silhouettes are defining modern feminine luxury this season."
  },
  {
    id: 2,
    title: "Curating a Sanctuary: Aesthetic Accents & Calming Scents",
    date: "Oct 20, 2026",
    readTime: "5 min read",
    category: "Interior & Living",
    image: "/images/blog-glamorous.jpg",
    excerpt: "Simple principles to transform your vanity and living space with fluted ceramics and hand-poured soy wax."
  }
];
