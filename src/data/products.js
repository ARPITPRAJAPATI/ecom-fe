export const INITIAL_PRODUCTS = [
  {
    id: "fae_001",
    name: "Vintage Butterfly Halter Cami",
    title: "Vintage Butterfly Halter Cami",
    slug: "vintage-butterfly-halter-cami",
    price: 1299,
    originalPrice: 1800,
    rating: 5.0,
    reviewsCount: 38,
    category: "Tops",
    badge: "Available 💘",
    isNew: true,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    description: "Authentic Y2K vintage butterfly-shaped halter top featuring earthy mauve and dusty rose floral prints, wooden bead neck ties, and backless silhouette. 1-of-1 curated thrift gem.",
    features: [
      "100% Authentic Handpicked Vintage",
      "Adjustable wooden bead halter tie",
      "Fits bust: 32\" - 36\" (Free Size)",
      "Pristine pre-loved vintage condition"
    ],
    stock: 1,
    condition: "Excellent Vintage (10/10)",
    colors: ["Dusty Mauve & Earth"]
  },
  {
    id: "fae_002",
    name: "Ethereal Pleated Fairycore Slip Dress",
    title: "Ethereal Pleated Fairycore Slip Dress",
    slug: "ethereal-pleated-fairycore-slip-dress",
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewsCount: 42,
    category: "Dresses",
    badge: "1 of 1 Drop 💫",
    isNew: true,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    description: "Flowing semi-sheer pleated fairy slip dress with delicate lettuce hemline, plunging V-neckline, and romantic chiffon layering. Pure pixie daydream aesthetic.",
    features: [
      "Rare early 2000s archival slip",
      "Lettuce hem & empire waist",
      "Length: 38 inches, Bust: 34\"-36\"",
      "Dry cleaned & steam sanitized"
    ],
    stock: 1,
    condition: "Near Mint Vintage",
    colors: ["Cloud Ivory"]
  },
  {
    id: "fae_003",
    name: "90s French Lace Corset Bustier",
    title: "90s French Lace Corset Bustier",
    slug: "90s-french-lace-corset-bustier",
    price: 1599,
    originalPrice: 2100,
    rating: 4.9,
    reviewsCount: 29,
    category: "Tops",
    badge: "Available 💘",
    isNew: false,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    description: "Structured vintage lace bustier featuring flexible boning, scalloped floral lace trim, hook-and-eye front closure, and satin ribbon accents.",
    features: [
      "Vintage lingerie revival piece",
      "Flexible shaping boning",
      "Fits 32B / 34B comfortably",
      "Hook-and-eye adjustable closure"
    ],
    stock: 1,
    condition: "Vintage 9.5/10",
    colors: ["Antique Cream"]
  },
  {
    id: "fae_004",
    name: "Vintage Suede Distressed Shoulder Bag",
    title: "Vintage Suede Distressed Shoulder Bag",
    slug: "vintage-suede-distressed-shoulder-bag",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 31,
    category: "Bags",
    badge: "Available 💘",
    isNew: true,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    description: "90s genuine slouchy brown suede shoulder bag with brass buckle hardware, comfortable wide strap, and interior zippered compartments. Perfect everyday grunge purse.",
    features: [
      "100% Genuine Vintage Suede Leather",
      "Aged brass hardware details",
      "Dimensions: 11\" x 7\" x 3.5\"",
      "Includes fairy crystal keychain"
    ],
    stock: 1,
    condition: "Lovely rustic vintage patina",
    colors: ["Warm Espresso Suede"]
  },
  {
    id: "fae_005",
    name: "Forest Fairy Raw Quartz Charm Choker",
    title: "Forest Fairy Raw Quartz Charm Choker",
    slug: "forest-fairy-raw-quartz-charm-choker",
    price: 699,
    originalPrice: 999,
    rating: 5.0,
    reviewsCount: 54,
    category: "Jewellery",
    badge: "Handmade 🎀",
    isNew: true,
    isBestSeller: true,
    image: "/images/product-necklace.jpg",
    description: "Handcrafted choker made with natural untreated raw quartz crystal point, Tibetan silver fairy wings charm, and soft faux-suede adjustable cord.",
    features: [
      "Handmade in small artisan batches",
      "Genuine natural healing raw quartz",
      "Adjustable sliding knot tie (14\" - 20\")",
      "Hypoallergenic & lead-free"
    ],
    stock: 5,
    condition: "Handmade New",
    colors: ["Silver & Raw Crystal"]
  },
  {
    id: "fae_006",
    name: "Asymmetrical Fairy Grunge Ruffled Skirt",
    title: "Asymmetrical Fairy Grunge Ruffled Skirt",
    slug: "asymmetrical-fairy-grunge-ruffled-skirt",
    price: 1399,
    originalPrice: 1899,
    rating: 4.8,
    reviewsCount: 22,
    category: "Dresses",
    badge: "Available 💘",
    isNew: false,
    isBestSeller: false,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    description: "Layered moss olive and cocoa handkerchief skirt with raw distressed edges, tiered ruffle silhouette, and stretchy smocked elastic waistband.",
    features: [
      "Whimsical fairy grunge silhouette",
      "Comfort stretch elastic waistband (26\" - 32\")",
      "Asymmetric handkerchief drape",
      "Lightweight cotton gauze & lace blend"
    ],
    stock: 1,
    condition: "Great vintage condition",
    colors: ["Moss Olive & Bark"]
  }
];

export const PROMO_CODES = {
  FAEJUNK10: { code: "FAEJUNK10", discountPercent: 10, minSpend: 0, description: "10% off your curated thrift order" },
  FAEVIP15: { code: "FAEVIP15", discountPercent: 15, minSpend: 2500, description: "15% off orders above ₹2,500" },
  FAEFREESHIP: { code: "FAEFREESHIP", freeShipping: true, minSpend: 0, description: "Free Courier Delivery Across India" },
  LOVEFAE: { code: "LOVEFAE", flatDiscount: 150, minSpend: 1500, description: "₹150 off on orders above ₹1,500" }
};

export const REVIEWS = [
  {
    id: 1,
    author: "Ananya S.",
    role: "Verified Thrift Buyer",
    rating: 5,
    date: "3 days ago",
    content: "The butterfly halter top is literally my dream fairycore piece!! The packaging had cute dried lavender and stickers. So grateful to Arya for curating such unique gems 🧚‍♀️✨",
    productName: "Vintage Butterfly Halter Cami"
  },
  {
    id: 2,
    author: "Rhea Mukherjee",
    role: "Verified Thrift Buyer",
    rating: 5,
    date: "1 week ago",
    content: "Got the white pleated fairy slip dress and I've never received so many compliments! Fits like a glove. 100% authentic vintage rags, no fast fashion junk. Will camp for the next drop 💘",
    productName: "Ethereal Pleated Fairycore Slip Dress"
  },
  {
    id: 3,
    author: "Diya Kashyap",
    role: "Verified Thrift Buyer",
    rating: 5,
    date: "2 weeks ago",
    content: "Fast delivery to Bangalore! The suede bag is so durable and has that gorgeous vintage feel. Love supporting @faeriesjunk.store 🎀",
    productName: "Vintage Suede Distressed Shoulder Bag"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Style Fairycore & Vintage Rags in 2026",
    date: "Oct 29, 2026",
    readTime: "3 min read",
    category: "Style Archive",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Layering lace camis, raw crystal charms, and distressed leather to achieve the effortless whimsical woodland aesthetic."
  },
  {
    id: 2,
    title: "Why 1-of-1 Thrift Drops Beat Fast Fashion Every Single Time",
    date: "Oct 21, 2026",
    readTime: "4 min read",
    category: "Slow Fashion",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    excerpt: "Behind the scenes with @aryaamishraa: The slow, thoughtful art of scouring flea markets and textile archives across the country."
  }
];
