import type { LanguageStrings } from "~/constants/languages";

export interface ProductBase {
  id: string;
  images: number;
  price: number;
  maxQuantity?: number;
}

export interface RawProduct extends ProductBase {
  name: LanguageStrings;
  description: LanguageStrings;
}

export interface Product extends ProductBase {
  name: string;
  description: string;
}

export const PRODUCTS: RawProduct[] = [
  {
    id: "0",
    name: { en: "Phantom Headset", nl: "Phantom Koptelefoon" },
    description: {
      en: "Immerse yourself in crystal-clear audio with this high-quality over-ear gaming headset. Surround sound makes every battle feel real.",
      nl: "Dompel jezelf onder in kristalhelder geluid met deze hoogwaardige over-ear gamingheadset. Surround sound laat elke strijd levensecht voelen.",
    },
    images: 5,
    price: 99_98,
    maxQuantity: 999,
  },
  {
    id: "1",
    name: { en: "Viper Gaming Mouse", nl: "Viper Gamingmuis" },
    description: {
      en: "Take control of every game with this ergonomic gaming mouse featuring lightning-fast customizable DPI and precision tracking.",
      nl: "Neem de controle over elk spel met deze ergonomische gamingmuis met razendsnelle instelbare DPI en precieze tracking.",
    },
    images: 5,
    price: 45_95,
    maxQuantity: 10,
  },
  {
    id: "2",
    name: { en: "Hawk Eye Monitor", nl: "Hawk Eye Monitor" },
    description: {
      en: "Get every detail in stunning clarity on this 27-inch 144Hz gaming monitor with a 1ms response time. Perfect for pro-level gaming.",
      nl: "Zie elk detail haarscherp op deze 27-inch 144Hz gamingmonitor met 1ms reactietijd. Perfect voor gaming op pro-niveau.",
    },
    images: 5,
    price: 250_25,
    maxQuantity: 999,
  },
  {
    id: "3",
    name: { en: "Expensive Gaming Mouse", nl: "Dure Gamingmuis" },
    description: {
      en: "Dominate your games with this high-end, precision-engineered gaming mouse. Sleek design and ultra-responsive buttons ensure victory at every click.",
      nl: "Overwin je games met deze high-end, precisie-engineered gamingmuis. Strak design en supersnelle knoppen garanderen overwinning bij elke klik.",
    },
    images: 5,
    price: 89_99,
    maxQuantity: 5,
  },
  {
    id: "4",
    name: { en: "Mega Monitor", nl: "Grote Monitor" },
    description: {
      en: "Experience the ultimate viewing experience with this massive monitor. Perfect for gaming, multitasking, or turning your setup into a command center.",
      nl: "Beleef de ultieme kijkervaring met deze gigantische monitor. Perfect voor gamen, multitasken of om van je setup een commandocentrum te maken.",
    },
    images: 5,
    price: 999_99,
    maxQuantity: 999,
  },
];
