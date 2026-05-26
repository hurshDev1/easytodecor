# Owner's Guide: EasytoDecor

## Add a product in seconds

Open `products.js` and copy-paste one object into the `PRODUCTS` array to add a new product. It will show up on both the homepage listing and the individual product page automatically.

```javascript
// In products.js — add inside the PRODUCTS array:
{
  id: "my-new-product",           // ← used in URL: product.html?id=my-new-product
  category: "resin",             // ← "resin" or "leather"
  subcategory: "Art",
  name: "Product Name",
  tagline: "A one-line tagline",
  price: "₹2,500",
  images: ["https://your-image.jpg"],   // ← add multiple for gallery
  description: "Full description text...",
  details: [
    { label: "Dimensions", value: "30 × 20 cm" },
  ],
  features: ["Feature one", "Feature two"],
  careInstructions: "Care text here.",
  whatsappMessage: "Hi! I want to order...",
}
```

### Key Attributes Explained

- **`id`**: URL-safe slug. Used as `product.html?id=your-id`. No spaces, use dashes.
- **`images`**: Array of image URLs. You can upload photos to your `/images/` folder and use relative paths like `"images/my-table.jpg"`. If you add multiple images, it will automatically render a carousel on the product page.
- **`category`**: Controls the filter tab on the homepage. Must be `"resin"` or `"leather"`.
- **`whatsappMessage`**: The pre-filled message sent via WhatsApp when the customer taps the Order button on the product page.
