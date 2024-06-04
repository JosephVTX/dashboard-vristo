import { themeConfig } from "@/config/theme";
import { create } from "zustand";

interface ThemeStore {
    isDarkMode: boolean;
    sidebar: boolean;
    theme: string;
    menu: string;
    layout: string;
    rtlClass: string;
    animation: string;
    navbar: string;
    semidark: boolean;
    toggleTheme: () => void;
    toggleSidebar: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    isDarkMode: false,
    sidebar: false,
    theme: themeConfig.theme,
    menu: themeConfig.menu,
    layout: themeConfig.layout,
    rtlClass: themeConfig.rtlClass,
    animation: themeConfig.animation,
    navbar: themeConfig.navbar,
    semidark: themeConfig.semidark,

    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));
