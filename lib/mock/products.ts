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
  }
];
