import GuavaImage from "@/public/products/guava.jpeg";
import GreenLime from "@/public/products/green-lime.jpeg";
import DragonFruit from "@/public/products/dragon-fruit.jpeg";
import GreenApple from "@/public/products/green-apple.jpeg";
import RedApple from "@/public/products/red-apple.jpeg";
import TenderCoconut from "@/public/products/tender-coconut.jpeg";
import Orange from "@/public/products/Orange.jpeg";
import FrozenVeg from "@/public/products/vegetables.jpeg";
import FrenchFries from "@/public/products/french-fries.jpg";
import Eggs from "@/public/products/eggs.jpg";
import Sugar from "@/public/products/sugar.jpeg";
import Rice from "@/public/products/rice.jpg";
import Lentils from "@/public/products/lentils.jpg";
import FrozenChicken from "@/public/products/frozen-chicken.jpeg";
import FrozenPrawns from "@/public/products/prawns.jpeg";

import { StaticImageData } from "next/image";

interface IProductItems {
  title: string;
  description: string;
  imageURL: StaticImageData;
}
export const freshFruits: IProductItems[] = [
  {
    title: "Guava",
    description:
      "Experience the tropical delight of our ripe guavas, bursting with juicy sweetness and vibrant flavor.",
    imageURL: GuavaImage,
  },

  {
    title: "Dragon fruit",
    description:
      "Dragon fruit, with its vibrant color and refreshing taste, is a nutrient-rich superfruit perfect for adding a tropical flair to your dishes.",
    imageURL: DragonFruit,
  },
  {
    title: "Apple",
    description:
      "Our apples are crisp, juicy, and packed with flavor, perfect for a healthy snack or your favorite recipe.",
    imageURL: RedApple,
  },
  {
    title: "Green apple",
    description:
      "Our green apples are crisp, tart, and perfect for a refreshing snack or a flavorful addition to any recipe.",
    imageURL: GreenApple,
  },
  {
    title: "Green lime",
    description:
      "Our green limes are exceptionally juicy, with vibrant flavor and a refreshing zest, perfect for enhancing your dishes and drinks.",
    imageURL: GreenLime,
  },
  {
    title: "Tender Coconut",
    description:
      "Our tender coconuts are refreshingly sweet, packed with natural electrolytes, and perfect for hydration.",
    imageURL: TenderCoconut,
  },
  {
    title: "Citrus Valencia",
    description:
      "Bursting with vibrant flavor, our Valencia oranges are a citrus lover's delight, perfect for adding a zesty twist to your day.",
    imageURL: Orange,
  },
];

export const frozenItems: IProductItems[] = [
  {
    title: "Vegetables",
    description:
      "Our frozen vegetables lock in freshness and nutrients, offering convenient, long-lasting goodness for your culinary creations.",
    imageURL: FrozenVeg,
  },
  {
    title: "Chicken",
    description:
      "Our frozen chicken is sourced from the finest farms, ensuring that you get the highest quality meat every time. Each piece is carefully selected and frozen at peak freshness to lock in the natural flavors and nutrients.",
    imageURL: FrozenChicken,
  },
  {
    title: "Prawns",
    description:
      "Sourced from the best fisheries, our prawns are carefully selected and processed under strict quality standards.",
    imageURL: FrozenPrawns,
  },
  {
    title: "French fries",
    description:
      "Our frozen French fries deliver crispy perfection straight from your oven to your plate, offering convenience without sacrificing taste.",
    imageURL: FrenchFries,
  },
];

export const otherItems: IProductItems[] = [
  {
    title: "Eggs",
    description:
      "Our farm-fresh eggs are packed with flavor and nutrients, perfect for any meal or recipe.",
    imageURL: Eggs,
  },
  {
    title: "Sugar",
    description:
      "Indulge in the sweet delight of our premium sugar, meticulously crafted to elevate your culinary creations to perfection.",
    imageURL: Sugar,
  },
  {
    title: "Rice",
    description:
      "Our premium rice is carefully cultivated to deliver exceptional taste and texture, perfect for elevating any meal.",
    imageURL: Rice,
  },
  {
    title: "Lentils",
    description:
      "Discover the savory goodness of our premium lentils, packed with protein and perfect for hearty meals.",
    imageURL: Lentils,
  },
];
