import PerfectScrollbar from "react-perfect-scrollbar";
import AnimateHeight from "react-animate-height";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { useThemeStore } from "@/store/themeStore";

const semidark = false;
const currentMenu = "dashboard";
export default function Sidebar() {
    const { toggleSidebar } = useThemeStore();
    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
                    semidark ? "text-white-dark" : ""
                }`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link
                            href="/"
                            className="main-logo flex shrink-0 items-center"
                        >
                            <img
                                className="ml-[5px] w-8 flex-none"
                                src="/assets/images/logo.svg"
                                alt="logo"
                            />
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                                VRISTO
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={toggleSidebar}
                        >
                            <Icon
                                icon="akar-icons:chevron-down"
                                className="h-5 w-5"
                            />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            {/*  <li className="menu nav-item">
                                <button
                                    type="button"
                                    className={`${
                                        currentMenu === "dashboard"
                                            ? "active"
                                            : ""
                                    } nav-link group w-full`}
                                    onClick={() => toggleMenu("dashboard")}
                                >
                                    <div className="flex items-center">
                                        <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                                            {t("dashboard")}
                                        </span>
                                    </div>

                                    <div
                                        className={
                                            currentMenu !== "dashboard"
                                                ? "-rotate-90 rtl:rotate-90"
                                                : ""
                                        }
                                    >
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight
                                    duration={300}
                                    height={
                                        currentMenu === "dashboard" ? "auto" : 0
                                    }
                                >
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <Link href="/">{t("sales")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/analytics">
                                                {t("analytics")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/finance">
                                                {t("finance")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/crypto">
                                                {t("crypto")}
                                            </Link>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li> */}

                            <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                {/* <IconMinus className="hidden h-5 w-4 flex-none" /> */}
                                <Icon
                                    icon="akar-icons:dashboard"
                                    className="h-5 w-5 flex-none"
                                />
                                <span>APPS</span>
                            </h2>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
}
