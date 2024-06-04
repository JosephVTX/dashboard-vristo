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

    toggleTheme: (payload: string) => void;
    toggleSidebar: () => void;
    toggleMenu: (payload: string) => void;
    toggleLayout: (payload: string) => void;
    toggleAnimation: (payload: string) => void;
    toggleNavbar: (payload: string) => void;
    toggleRTL: (payload: string) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    isDarkMode: false,
    sidebar: false,
    theme: localStorage.getItem("theme") || themeConfig.theme,
    menu: localStorage.getItem("menu") || themeConfig.menu,
    layout: localStorage.getItem("layout") || themeConfig.layout,
    rtlClass: localStorage.getItem("rtlClass") || themeConfig.rtlClass,
    animation: localStorage.getItem("animation") || themeConfig.animation,
    navbar: localStorage.getItem("navbar") || themeConfig.navbar,

    toggleTheme: (payload) =>
        set(() => {
            localStorage.setItem("theme", payload);

            const isDarkMode =
                payload === "dark" ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches &&
                    payload === "system");

            if (isDarkMode) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark", "light");
            }

            return { theme: payload, isDarkMode };
        }),
    toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    toggleMenu: (payload) => {
        localStorage.setItem("menu", payload);
        return set({ menu: payload });
    },
    toggleLayout: (payload) => {
        localStorage.setItem("layout", payload);
        return set({ layout: payload });
    },
    toggleAnimation: (payload) => {
        localStorage.setItem("animation", payload);
        return set({ animation: payload });
    },
    toggleNavbar: (payload) => {
        localStorage.setItem("navbar", payload);
        return set({ navbar: payload });
    },
    toggleRTL: (payload) => {
        localStorage.setItem("rtlClass", payload);
        document.documentElement.dir = payload === "rtl" ? "rtl" : "ltr";
        return set({ rtlClass: payload });
    },
}));
