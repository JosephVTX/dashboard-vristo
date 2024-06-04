import ContentAnimation from "@/components/layouts/content-animation";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import MainContainer from "@/components/layouts/main-container";
import Sidebar from "@/components/layouts/sidebar";
import AppLayout from "@/layouts/app-layout";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
    const { navbar, animation } = useThemeStore();
    return (
        <AppLayout>
            <div className="relative">
                <div
                    className={cn(
                        navbar,
                        "main-container text-black dark:text-white-dark min-h-screen"
                    )}
                >
                    <Sidebar />
                    <div className="main-content flex flex-col min-h-screen">
                        <Header />
                        <div className={cn(animation, "p-6 animate__animated")}>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
