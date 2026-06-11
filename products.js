const PRODUCTS = [

  {
    id: "white-and-gold-resin-table",
    category: "resin",
    subcategory: "Tables",
    name: "White and Gold Resin Table",
    tagline: "A stunning piece of elegant resin in your living room",
    price: "₹35,000",
    images: [
      "images/white-and-gold-resin-table/1.jpg",
      "images/white-and-gold-resin-table/2.jpg",
      "images/white-and-gold-resin-table/3.png",
      "images/white-and-gold-resin-table/4.png",
      "images/white-and-gold-resin-table/5.png",
      "images/white-and-gold-resin-table/6.jpeg",
      "images/white-and-gold-resin-table/7.jpeg"
    ],
    description: "Our White and Gold Resin Table brings a mesmerizing aesthetic to your living space. Handcrafted using premium wood and epoxy resin. Each table is unique, capturing a fluid motion frozen in time.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss Polyurethane" }
    ],
    features: ["Scratch resistant surface", "UV protected resin", "Hand-polished finish", "Custom legs included"],
    careInstructions: "Wipe with a soft, damp cloth. Avoid harsh chemicals or abrasive cleaners. Use coasters for hot beverages.",
    whatsappMessage: "Hi! I am interested in the White and Gold Resin Table."
  },
  {
    id: "crystals-clock",
    category: "resin",
    subcategory: "Clocks",
    name: "Geode Style Crystals Clock",
    tagline: "A beautiful geode-style timepiece",
    price: "₹4,500",
    images: [
      "images/crystals-clock/1.png",
      "images/crystals-clock/2.png",
      "images/crystals-clock/3.jpg",
      "images/crystals-clock/4.jpg"
    ],
    description: "Keep track of time with this beautiful Geode Style Crystals Clock. Handcrafted with precision to bring elegance and functionality to your walls.",
    details: [
      { label: "Material", value: "Epoxy Resin & Crystals" },
      { label: "Mechanism", value: "Silent Quartz Movement" }
    ],
    features: ["Unique geode design", "Silent movement", "Easy to wall-mount", "Battery operated"],
    careInstructions: "Wipe gently with a dry microfiber cloth.",
    whatsappMessage: "Hi! I want to order the Geode Style Crystals Clock."
  },
  {
    id: "dream-clock",
    category: "resin",
    subcategory: "Clocks",
    name: "Dream Purple Resin Clock",
    tagline: "A dreamy addition to your wall decor",
    price: "₹4,200",
    images: [
      "images/dream-clock-purple-white-resin/1.jpg",
      "images/dream-clock-purple-white-resin/2.jpg",
      "images/dream-clock-purple-white-resin/3.jpg",
      "images/dream-clock-purple-white-resin/4.jpg",
      "images/dream-clock-purple-white-resin/5.jpg"
    ],
    description: "Add a touch of magic to your room with the Dream Purple Resin Clock. Its swirling purple hues and intricate details make it a perfect centerpiece.",
    details: [
      { label: "Material", value: "Epoxy Resin" },
      { label: "Mechanism", value: "Silent Quartz Movement" }
    ],
    features: ["Beautiful purple swirls", "Silent movement", "Easy to wall-mount", "Battery operated"],
    careInstructions: "Wipe gently with a dry microfiber cloth.",
    whatsappMessage: "Hi! I want to order the Dream Purple Resin Clock."
  },
  {
    id: "dream-mirror",
    category: "resin",
    subcategory: "Mirrors",
    name: "Dream Resin Mirror",
    tagline: "Reflect your style with a resin frame",
    price: "₹8,500",
    images: [
      "images/dream-mirror-white-waves-resin/1.jpg",
      "images/dream-mirror-white-waves-resin/2.jpg",
      "images/dream-mirror-white-waves-resin/3.jpg"
    ],
    description: "The Dream Resin Mirror is more than just a reflection; it's a piece of art. The beautifully crafted resin frame adds a luxurious touch to any room.",
    details: [
      { label: "Material", value: "High-Quality Glass & Epoxy Resin" },
      { label: "Mounting", value: "Wall-mounted" }
    ],
    features: ["Artistic resin frame", "Clear reflection", "Sturdy backing", "Ready to hang"],
    careInstructions: "Clean the glass with standard glass cleaner. Wipe the resin frame with a soft, damp cloth.",
    whatsappMessage: "Hi! I am interested in the Dream Resin Mirror."
  },
  {
    id: "nature-mirror",
    category: "resin",
    subcategory: "Mirrors",
    name: "Nature Resin Mirror",
    tagline: "Bring the outdoors inside",
    price: "₹8,500",
    images: [
      "images/nature-mirror-resin/1.png",
      "images/nature-mirror-resin/2.png",
      "images/nature-mirror-resin/3.png",
      "images/nature-mirror-resin/4.png"
    ],
    description: "Inspired by nature, this mirror features a stunning resin frame that captures organic patterns and earthy tones.",
    details: [
      { label: "Material", value: "High-Quality Glass & Epoxy Resin" },
      { label: "Mounting", value: "Wall-mounted" }
    ],
    features: ["Nature-inspired design", "Clear reflection", "Sturdy backing", "Ready to hang"],
    careInstructions: "Clean the glass with standard glass cleaner. Wipe the resin frame with a soft, damp cloth.",
    whatsappMessage: "Hi! I am interested in the Nature Resin Mirror."
  },
  {
    id: "whiteblue-resin-table",
    category: "resin",
    subcategory: "Tables",
    name: "White & Blue Resin Table",
    tagline: "Elegant and serene dining or coffee table",
    price: "₹32,000",
    images: [
      "images/whiteblue_resinTable/1.png"
    ],
    description: "A gorgeous combination of white and blue resin that evokes a sense of calm and elegance. Perfect for modern and contemporary homes.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss" }
    ],
    features: ["Elegant color mix", "Durable surface", "Easy to clean"],
    careInstructions: "Wipe with a soft, damp cloth. Avoid harsh chemicals.",
    whatsappMessage: "Hi! I am interested in the White & Blue Resin Table."
  },
  {
    id: "black-gold-resin-tv-unit",
    category: "resin",
    subcategory: "Furniture",
    name: "Black Gold Resin TV Unit",
    tagline: "Luxurious black and gold resin TV unit",
    price: "₹45,000",
    images: [
      "images/Black-Gold-Resin-TV-unit/1.jpg"
    ],
    description: "Upgrade your entertainment space with this luxurious Black Gold Resin TV unit. It perfectly balances modern aesthetics with premium craftsmanship.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss" }
    ],
    features: ["Premium resin finish", "Sturdy construction", "Spacious storage"],
    careInstructions: "Wipe with a soft, damp cloth. Avoid harsh chemicals.",
    whatsappMessage: "Hi! I am interested in the Black Gold Resin TV Unit."
  },
  {
    id: "blue-white-gold-flow-resin-table",
    category: "resin",
    subcategory: "Tables",
    name: "Blue White Gold Flow Resin Table",
    tagline: "Captivating flow design in blue, white, and gold",
    price: "₹38,000",
    images: [
      "images/Blue-white-gold-flow-resin-table/1.jpg"
    ],
    description: "A mesmerizing flow of blue, white, and gold resin across a solid wood base. This table serves as a stunning centerpiece for any contemporary space.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss Polyurethane" }
    ],
    features: ["Unique flow design", "Durable surface", "Handcrafted finish"],
    careInstructions: "Wipe with a soft, damp cloth. Avoid harsh chemicals or abrasive cleaners.",
    whatsappMessage: "Hi! I am interested in the Blue White Gold Flow Resin Table."
  },
  {
    id: "burnt-orange-resin-table",
    category: "resin",
    subcategory: "Tables",
    name: "Burnt Orange Resin Table",
    tagline: "Warm and inviting burnt orange resin table",
    price: "₹34,000",
    images: [
      "images/Burnt-Orange-resin-table/1.jpg",
      "images/Burnt-Orange-resin-table/2.png",
      "images/Burnt-Orange-resin-table/3.png"
    ],
    description: "Bring warmth to your home with our Burnt Orange Resin Table. The vibrant yet earthy tones of the resin complement the natural wood grains perfectly.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss" }
    ],
    features: ["Vibrant resin color", "Scratch resistant surface", "Custom legs included"],
    careInstructions: "Wipe with a soft, damp cloth. Use coasters for hot beverages.",
    whatsappMessage: "Hi! I am interested in the Burnt Orange Resin Table."
  },
  {
    id: "brown-and-sky-coffee-table-resin",
    category: "resin",
    subcategory: "Tables",
    name: "Brown and Sky Resin Coffee Table",
    tagline: "Earthy brown mixed with sky blue resin",
    price: "₹28,000",
    images: [
      "images/brown-and-sky-coffee-table-resin/1.jpg",
      "images/brown-and-sky-coffee-table-resin/2.png",
      "images/brown-and-sky-coffee-table-resin/3.png"
    ],
    description: "This coffee table features a beautiful contrast between earthy brown wood and bright sky blue resin, creating a tranquil yet striking piece.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss" }
    ],
    features: ["Striking contrast", "Perfect for living rooms", "Easy to clean"],
    careInstructions: "Wipe with a soft, damp cloth. Avoid harsh chemicals.",
    whatsappMessage: "Hi! I am interested in the Brown and Sky Resin Coffee Table."
  },
  {
    id: "white-blue-resin-coffee-table",
    category: "resin",
    subcategory: "Tables",
    name: "White & Blue Resin Coffee Table",
    tagline: "A delicate touch of white and blue resin",
    price: "₹29,000",
    images: [
      "images/white-blue-resin-coffee-table/1.jpg",
      "images/white-blue-resin-coffee-table/2.png",
      "images/white-blue-resin-coffee-table/3.png",
      "images/white-blue-resin-coffee-table/4.png"
    ],
    description: "A beautifully crafted coffee table that blends clean white and deep blue resin for an elegant, coastal-inspired look.",
    details: [
      { label: "Material", value: "Wood & Epoxy Resin" },
      { label: "Finish", value: "High Gloss" }
    ],
    features: ["Coastal aesthetic", "Smooth finish", "Durable and long-lasting"],
    careInstructions: "Wipe gently with a soft cloth. Use coasters for hot items.",
    whatsappMessage: "Hi! I am interested in the White & Blue Resin Coffee Table."
  },
  {
    id: "wood-waterfall-resin-table",
    category: "resin",
    subcategory: "Tables",
    name: "Wood Waterfall Resin Table",
    tagline: "Spectacular cascading waterfall resin design",
    price: "₹55,000",
    images: [
      "images/wood-waterfall-resin-table/1.jpg",
      "images/wood-waterfall-resin-table/2.png",
      "images/wood-waterfall-resin-table/3.png"
    ],
    description: "The Wood Waterfall Resin Table is a true masterpiece. Featuring a cascading 'waterfall' edge made of clear and tinted resin, blending seamlessly with premium live-edge wood.",
    details: [
      { label: "Material", value: "Live-Edge Wood & Epoxy Resin" },
      { label: "Design", value: "Waterfall Edge" },
      { label: "Finish", value: "High Gloss Polyurethane" }
    ],
    features: ["Cascading waterfall edge", "Live-edge wood", "Hand-polished finish"],
    careInstructions: "Wipe with a soft, damp cloth. Use coasters for hot items and avoid direct sunlight.",
    whatsappMessage: "Hi! I am interested in the Wood Waterfall Resin Table."
  },
  {
    id: "black-leather-pot-cover",
    category: "leather",
    subcategory: "Pot Covers",
    name: "Black Leather Plant Pot Cover",
    tagline: "Enhances the Look of Indoor Plant pots with a Modern, Elegant Design.",
    price: "₹280",
    images: [
      "images/leatherPotCovers/black/black/ChatGPT Image May 18, 2026, 04_52_44 PM.png",
      "images/leatherPotCovers/black/black/ChatGPT Image May 18, 2026, 04_53_44 PM.png",
      "images/leatherPotCovers/black/black/White and Beige Neutral Clean Women Bags Instagram Post (24).png",
      "images/leatherPotCovers/black/black/White and Beige Neutral Clean Women Bags Instagram Post (25).png",
      "images/leatherPotCovers/black/black/White and Beige Neutral Clean Women Bags Instagram Post (26).png",
      "images/leatherPotCovers/black/black/White and Beige Neutral Clean Women Bags Instagram Post (27).png"
    ],
    description: "Our Black Leather Plant Pot Cover is a stylish, decorative sleeve designed to elevate the look of your indoor green spaces. Made from premium, water-resistant leather, it wraps around standard indoor plant pots to introduce a modern, architectural design to your desk, shelves, or windowsills.",
    details: [
      { label: "Color", value: "Black" },
      { label: "Material", value: "Premium Leather with Water-Resistant Lining" },
      { label: "Craft", value: "Hand-finished and burnished edges" },
      { label: "Fits Pots", value: "Standard indoor pots" }
    ],
    features: [
      "Modern minimalist aesthetic",
      "Water-resistant interior protection",
      "Folds flat for storage",
      "Durable, hand-aligned stitching"
    ],
    careInstructions: "Wipe with a soft, damp cloth. Do not submerge in water. Remove plant pot when watering or use an inner saucer.",
    whatsappMessage: "Hi! I am interested in the Black Leather Plant Pot Cover."
  },
  {
    id: "dark-brown-leather-pot-cover",
    category: "leather",
    subcategory: "Pot Covers",
    name: "Dark Brown Leather Plant Pot Cover",
    tagline: "Enhances the Look of Indoor Plant pots with a Modern, Elegant Design.",
    price: "₹280",
    images: [
      "images/leatherPotCovers/dark brown/dark brown/ChatGPT Image May 18, 2026, 04_54_28 PM.png",
      "images/leatherPotCovers/dark brown/dark brown/ChatGPT Image May 18, 2026, 04_55_30 PM.png",
      "images/leatherPotCovers/dark brown/dark brown/ChatGPT Image May 18, 2026, 04_57_27 PM.png",
      "images/leatherPotCovers/dark brown/dark brown/White and Beige Neutral Clean Women Bags Instagram Post (15).png",
      "images/leatherPotCovers/dark brown/dark brown/White and Beige Neutral Clean Women Bags Instagram Post (16).png",
      "images/leatherPotCovers/dark brown/dark brown/White and Beige Neutral Clean Women Bags Instagram Post (17).png",
      "images/leatherPotCovers/dark brown/dark brown/White and Beige Neutral Clean Women Bags Instagram Post (18).png"
    ],
    description: "Our Dark Brown Leather Plant Pot Cover brings a rich, classic aesthetic to your home garden. Expertly crafted from premium materials, this cover wraps around plain pots to create a refined, architectural presentation for your favorite indoor plants.",
    details: [
      { label: "Color", value: "Dark Brown" },
      { label: "Material", value: "Premium Leather with Water-Resistant Lining" },
      { label: "Craft", value: "Hand-finished and burnished edges" },
      { label: "Fits Pots", value: "Standard indoor pots" }
    ],
    features: [
      "Rich dark brown finish",
      "Water-resistant interior lining",
      "Folds flat for space-saving storage",
      "Exquisite hand-stitched detailing"
    ],
    careInstructions: "Wipe clean with a dry or slightly damp microfiber cloth. Keep away from direct excessive water.",
    whatsappMessage: "Hi! I am interested in the Dark Brown Leather Plant Pot Cover."
  },
  {
    id: "golden-brown-leather-pot-cover",
    category: "leather",
    subcategory: "Pot Covers",
    name: "Golden Brown Leather Plant Pot Cover",
    tagline: "Enhances the Look of Indoor Plant pots with a Modern, Elegant Design.",
    price: "₹280",
    images: [
      "images/leatherPotCovers/golden brown/golden brown/ChatGPT Image May 18, 2026, 05_01_14 PM.png",
      "images/leatherPotCovers/golden brown/golden brown/ChatGPT Image May 18, 2026, 05_02_11 PM.png",
      "images/leatherPotCovers/golden brown/golden brown/ChatGPT Image May 18, 2026, 06_48_32 PM.png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (8).png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (10).png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (11).png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (12).png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (13).png",
      "images/leatherPotCovers/golden brown/golden brown/White and Beige Neutral Clean Women Bags Instagram Post (14).png"
    ],
    description: "Conceal boring plastic pots with the warm, welcoming tones of our Golden Brown Leather Plant Pot Cover. Handmade with attention to volumetric balance and material honesty, it's the perfect statement wrap for your tabletop plants.",
    details: [
      { label: "Color", value: "Golden Brown" },
      { label: "Material", value: "Premium Leather with Water-Resistant Lining" },
      { label: "Craft", value: "Hand-finished and burnished edges" },
      { label: "Fits Pots", value: "Standard indoor pots" }
    ],
    features: [
      "Warm golden brown tone",
      "Water-resistant interior protection",
      "Conceals standard utility pots beautifully",
      "Architectural profile"
    ],
    careInstructions: "Clean with a soft damp cloth. Avoid submerging. Use a saucer inside to catch drainage.",
    whatsappMessage: "Hi! I am interested in the Golden Brown Leather Plant Pot Cover."
  },
  {
    id: "light-sandy-beige-leather-pot-cover",
    category: "leather",
    subcategory: "Pot Covers",
    name: "Light Sandy Beige Leather Plant Pot Cover",
    tagline: "Enhances the Look of Indoor Plant pots with a Modern, Elegant Design.",
    price: "₹280",
    images: [
      "images/leatherPotCovers/light sandy beige/light sandy beige/ChatGPT Image May 18, 2026, 04_50_16 PM.png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/ChatGPT Image May 18, 2026, 06_54_41 PM.png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (1).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (2).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (21).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (22).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (23).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post (28).png",
      "images/leatherPotCovers/light sandy beige/light sandy beige/White and Beige Neutral Clean Women Bags Instagram Post.png"
    ],
    description: "Bring a light, coastal, or scandi-minimalist touch to your space with the Light Sandy Beige Leather Plant Pot Cover. Its neutral earthy sand hue blends effortlessly into modern bright interiors while providing durable protection.",
    details: [
      { label: "Color", value: "Light Sandy Beige" },
      { label: "Material", value: "Premium Leather with Water-Resistant Lining" },
      { label: "Craft", value: "Hand-finished and burnished edges" },
      { label: "Fits Pots", value: "Standard indoor pots" }
    ],
    features: [
      "Neutral sandy beige tone",
      "Water-resistant interior",
      "Clean, modern scandi-minimalist aesthetic",
      "Saddle-stitched seams"
    ],
    careInstructions: "Wipe clean with a damp cloth. Use an internal tray to collect runoff water.",
    whatsappMessage: "Hi! I am interested in the Light Sandy Beige Leather Plant Pot Cover."
  },
  {
    id: "reddish-brown-leather-pot-cover",
    category: "leather",
    subcategory: "Pot Covers",
    name: "Reddish Brown Leather Plant Pot Cover",
    tagline: "Enhances the Look of Indoor Plant pots with a Modern, Elegant Design.",
    price: "₹280",
    images: [
      "images/leatherPotCovers/reddish brown/reddish brown/ChatGPT Image May 18, 2026, 04_31_54 PM.png",
      "images/leatherPotCovers/reddish brown/reddish brown/ChatGPT Image May 18, 2026, 05_03_30 PM.png",
      "images/leatherPotCovers/reddish brown/reddish brown/ChatGPT Image May 18, 2026, 05_03_39 PM.png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (3).png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (4).png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (5).png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (6).png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (7).png",
      "images/leatherPotCovers/reddish brown/reddish brown/White and Beige Neutral Clean Women Bags Instagram Post (29).png"
    ],
    description: "The Reddish Brown Leather Plant Pot Cover brings a warm, clay-like, rust or terracotta feel to your foliage. Designed with spatial proportion in mind, this sleeve coordinates beautifully with dark greens and wooden surfaces.",
    details: [
      { label: "Color", value: "Reddish Brown" },
      { label: "Material", value: "Premium Leather with Water-Resistant Lining" },
      { label: "Craft", value: "Hand-finished and burnished edges" },
      { label: "Fits Pots", value: "Standard indoor pots" }
    ],
    features: [
      "Warm reddish brown terracotta tone",
      "Water-resistant interior protection",
      "Adds structure and color contrast to plants",
      "Handcrafted quality"
    ],
    careInstructions: "Wipe clean with a soft microfiber cloth. Do not submerge. Use an inner saucer.",
    whatsappMessage: "Hi! I am interested in the Reddish Brown Leather Plant Pot Cover."
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
