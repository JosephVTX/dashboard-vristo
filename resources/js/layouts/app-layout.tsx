import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";

export default function AppLayout({ children }: React.PropsWithChildren) {
    const { sidebar, menu, layout } = useThemeStore();
    return (
        <div
            className={cn(
                sidebar && "toggle-sidebar",
                menu,
                layout,
                "main-section antialiased relative font-nunito text-sm font-normal"
            )}
        >
            {children}
        </div>
    );
}
