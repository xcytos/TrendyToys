export type ToyStatus = "active" | "inactive";

export type ToyAvailability = "inStock" | "outOfStock";

export type ToyProduct = {
  id: string;
  name: string;
  price: number;
  category: string;
  ageRange: string;
  description: string;
  imageUrl: string;
  status: ToyStatus;
  availability: ToyAvailability;
  featured: boolean;
};

export const mockProducts: ToyProduct[] = [
  {
    id: "toy-hero-house",
    name: "Trendy Toy House Playset",
    price: 49,
    category: "Playsets",
    ageRange: "4–8",
    description:
      "A modern pastel toy house with swappable rooms and accessories, designed for endless storytelling.",
    imageUrl: "toy1.png",
    status: "active",
    availability: "inStock",
    featured: true
  },
  {
    id: "toy-neon-racer",
    name: "Neon Racer Car",
    price: 29,
    category: "Vehicles",
    ageRange: "4–6",
    description:
      "A sleek neon car with soft edges and glow details that looks right at home in TrendyToys branding.",
    imageUrl: "toy2.png",
    status: "active",
    availability: "inStock",
    featured: true
  },
  {
    id: "toy-edu-blocks",
    name: "Edu Blocks Starter Kit",
    price: 39,
    category: "Educational",
    ageRange: "7–10",
    description:
      "A curated set of colorful blocks that encourage STEM thinking and creative building.",
    imageUrl: "toy3.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-plush-friend",
    name: "Pastel Plush Friend",
    price: 24,
    category: "Plush",
    ageRange: "0–3",
    description:
      "A super-soft, pastel plush character that matches the TrendyToys hero palette.",
    imageUrl: "toy4.png",
    status: "active",
    availability: "outOfStock",
    featured: false
  },
  {
    id: "toy-stackers",
    name: "Rainbow Stackers Set",
    price: 34,
    category: "Stacking",
    ageRange: "1–4",
    description:
      "Rounded, stackable arches in soft gradients that help with motor skills and color recognition.",
    imageUrl: "toy5.png",
    status: "inactive",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-creative-kit",
    name: "Creative Craft Kit",
    price: 27,
    category: "Craft",
    ageRange: "6–9",
    description:
      "Stickers, shapes, and safe tools packed into a single kit for rainy-day creativity.",
    imageUrl: "toy3.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-city-garage",
    name: "City Garage Playset",
    price: 59,
    category: "Playsets",
    ageRange: "4–8",
    description:
      "Multi-level city garage with ramps, parking spots, and a pastel cityscape backdrop.",
    imageUrl: "toy1.png",
    status: "active",
    availability: "inStock",
    featured: true
  },
  {
    id: "toy-night-rider",
    name: "Night Rider Glow Car",
    price: 31,
    category: "Vehicles",
    ageRange: "4–6",
    description:
      "A glow-in-the-dark racer with soft neon edges, perfect for night-time play sessions.",
    imageUrl: "toy2.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-math-puzzle",
    name: "Math Puzzle Tiles",
    price: 33,
    category: "Educational",
    ageRange: "7–10",
    description:
      "Snap-together tiles with numbers and symbols for playful math challenges.",
    imageUrl: "toy3.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-plush-duo",
    name: "Pastel Plush Duo",
    price: 38,
    category: "Plush",
    ageRange: "0–3",
    description:
      "A pair of matching plush friends designed as a cozy, pastel duo.",
    imageUrl: "toy4.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-arc-stack",
    name: "City Arc Stackers",
    price: 36,
    category: "Stacking",
    ageRange: "1–4",
    description:
      "Stackable arches inspired by city skylines, with soft touch and safe edges.",
    imageUrl: "toy5.png",
    status: "active",
    availability: "inStock",
    featured: false
  },
  {
    id: "toy-sticker-party",
    name: "Sticker Party Pack",
    price: 22,
    category: "Craft",
    ageRange: "6–9",
    description:
      "A big set of colorful, on-brand stickers and shapes for decorating anything.",
    imageUrl: "toy3.png",
    status: "active",
    availability: "inStock",
    featured: false
  }
];
