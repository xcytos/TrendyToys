import { create } from "zustand";

type ThemeState = {
  pastelMode: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  togglePastelMode: () => void;
  setHeroHeadline: (value: string) => void;
  setHeroSubheadline: (value: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  pastelMode: true,
  heroHeadline: "TrendyToys — a modern toy house for playful minds",
  heroSubheadline:
    "Explore trendy, premium-but-affordable toys with a sleek, joyful interface designed for both kids and parents.",
  togglePastelMode: () =>
    set((state) => ({
      pastelMode: !state.pastelMode
    })),
  setHeroHeadline: (value) =>
    set(() => ({
      heroHeadline: value
    })),
  setHeroSubheadline: (value) =>
    set(() => ({
      heroSubheadline: value
    }))
}));

