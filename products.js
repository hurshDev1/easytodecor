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
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
