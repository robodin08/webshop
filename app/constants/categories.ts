export interface Category {
  id: string;
  label: string;
  icon?: string;
}

export const FILTER_CATEGORIES: Category[] = [
  { id: "audio", label: "Audio" },
  { id: "peripherals", label: "Peripherals" },
  { id: "monitors", label: "Monitors" },
  { id: "streaming", label: "Streaming" },
  { id: "components", label: "Components" },
  { id: "accessories", label: "Accessories" },
  { id: "gaming", label: "Gaming" },
  { id: "popular", label: "Popular" },
  { id: "new", label: "New" },
];

export const HOME_CATEGORIES: Category[] = [
  { id: "audio", label: "Audio", icon: "🎧" },
  { id: "peripherals", label: "Peripherals", icon: "🖱️" },
  { id: "monitors", label: "Monitors", icon: "🖥️" },
  { id: "streaming", label: "Streaming", icon: "🎥" },
  { id: "components", label: "Components", icon: "⚙️" },
  { id: "accessories", label: "Accessories", icon: "🎮" },
];
