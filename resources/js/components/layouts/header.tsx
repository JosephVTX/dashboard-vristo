import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "@inertiajs/react";
import Dropdown from "../ui/dropdown";
import { useThemeStore } from "@/store/themeStore";

export default function Header() {

    const { toggleSidebar } = useThemeStore();

    return (
        <header className={`z-40`}>
            <div className="shadow-sm">
                <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                        <Link
                            href="/"
                            className="main-logo flex shrink-0 items-center"
                        >
                            <img
                                className="inline w-8 ltr:-ml-1 rtl:-mr-1"
                                src="/assets/images/logo.svg"
                                alt="logo"
                            />
                            <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                                VRISTO
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                            onClick={toggleSidebar}
                        >
                            
                            <Icon icon="material-symbols:menu" className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="hidden ltr:mr-2 rtl:ml-2 sm:block">
                        <div className="dropdown flex shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${
                                    true ? "bottom-start" : "bottom-end"
                                }`}
                                btnClassName="relative group block"
                                button={
                                    <img
                                        className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                                        src="/assets/images/user-profile.jpeg"
                                        alt="userProfile"
                                    />
                                }
                            >
                                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    <li>
                                        <div className="flex items-center px-4 py-4">
                                            <img
                                                className="h-10 w-10 rounded-md object-cover"
                                                src="/assets/images/user-profile.jpeg"
                                                alt="userProfile"
                                            />
                                            <div className="truncate ltr:pl-4 rtl:pr-4">
                                                <h4 className="text-base">
                                                    John Doe
                                                    <span className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">
                                                        Pro
                                                    </span>
                                                </h4>
                                                <button
                                                    type="button"
                                                    className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                                                >
                                                    johndoe@gmail.com
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link
                                            href="/users/profile"
                                            className="dark:hover:text-white"
                                        >
                                            {/* <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" /> */}
                                            <Icon
                                                icon="bi:person-circle"
                                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                            />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/apps/mailbox"
                                            className="dark:hover:text-white"
                                        >
                                            {/* <IconMail className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" /> */}
                                            <Icon
                                                icon="bi:envelope"
                                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                            />
                                            Inbox
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/auth/boxed-lockscreen"
                                            className="dark:hover:text-white"
                                        >
                                            {/* <IconLockDots className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" /> */}
                                            <Icon
                                                icon="bi:lock-fill"
                                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                            />
                                            Lock Screen
                                        </Link>
                                    </li>
                                    <li className="border-t border-white-light dark:border-white-light/10">
                                        <Link
                                            href="/auth/boxed-signin"
                                            className="!py-3 text-danger"
                                        >
                                            {/* <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" /> */}
                                            <Icon
                                                icon="bi:arrow-right-circle"
                                                className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2"
                                            />
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
