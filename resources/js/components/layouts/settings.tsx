import { useState } from "react";

import { useThemeStore } from "@/store/themeStore";
import { Icon } from "@iconify/react";

const Setting = () => {
    const {
        theme,
        menu,
        toggleMenu,
        layout,
        toggleLayout,
        animation,
        toggleAnimation,
        navbar,
        toggleNavbar,
        rtlClass,
        toggleRTL,
        toggleTheme,
    } = useThemeStore();

    const [showCustomizer, setShowCustomizer] = useState(false);

    return (
        <div>
            <div
                className={`${
                    (showCustomizer && "!block") || ""
                } fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`}
                onClick={() => setShowCustomizer(false)}
            ></div>

            <nav
                className={`${
                    (showCustomizer && "ltr:!right-0 rtl:!left-0") || ""
                } bg-white fixed ltr:-right-[400px] rtl:-left-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 z-[51] dark:bg-black p-4`}
            >
                <button
                    type="button"
                    className="bg-primary ltr:rounded-tl-full rtl:rounded-tr-full ltr:rounded-bl-full rtl:rounded-br-full absolute ltr:-left-12 rtl:-right-12 top-0 bottom-0 my-auto w-12 h-10 flex justify-center items-center text-white cursor-pointer"
                    onClick={() => setShowCustomizer(!showCustomizer)}
                >
                    <Icon
                        icon="ep:setting"
                        className="animate-[spin_3s_linear_infinite] w-5 h-5"
                    />
                </button>

                <div className="overflow-y-auto overflow-x-hidden perfect-scrollbar h-full">
                    <div className="text-center relative pb-5">
                        <button
                            type="button"
                            className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white"
                            onClick={() => setShowCustomizer(false)}
                        >
                            <Icon icon="akar-icons:x" className="w-5 h-5" />
                        </button>

                        <h4 className="mb-1 dark:text-white">
                            PERSONALIZAR TEMA
                        </h4>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Color
                        </h5>
                        <p className="text-white-dark text-xs">
                            Elige el color de tu tema.
                        </p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <button
                                type="button"
                                className={`${
                                    theme === "light"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() => toggleTheme("light")}
                            >
                                <Icon
                                    icon="akar-icons:sun"
                                    className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2"
                                />
                                Claro
                            </button>

                            <button
                                type="button"
                                className={`${
                                    theme === "dark"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() => toggleTheme("dark")}
                            >
                                <Icon
                                    icon="akar-icons:moon"
                                    className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2"
                                />
                                Oscuro
                            </button>

                            <button
                                type="button"
                                className={`${
                                    theme === "system"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() => toggleTheme("system")}
                            >
                                <Icon
                                    icon="akar-icons:laptop"
                                    className="w-5 h-5 shrink-0 ltr:mr-2 rtl:ml-2"
                                />
                                Sistema
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Navegación
                        </h5>
                        <p className="text-white-dark text-xs">
                            Selecciona la posición de la navegación.
                        </p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <button
                                type="button"
                                className={`${
                                    menu === "horizontal"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() => toggleMenu("horizontal")}
                            >
                                Horizontal
                            </button>

                            <button
                                type="button"
                                className={`${
                                    menu === "vertical"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() => toggleMenu("vertical")}
                            >
                                Vertical
                            </button>

                            <button
                                type="button"
                                className={`${
                                    menu === "collapsible-vertical"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn`}
                                onClick={() =>
                                    toggleMenu("collapsible-vertical")
                                }
                            >
                                Colapsable
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Diseño
                        </h5>
                        <p className="text-white-dark text-xs">
                            Selecciona el estilo de diseño.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <button
                                type="button"
                                className={`${
                                    layout === "boxed-layout"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn flex-auto`}
                                onClick={() => toggleLayout("boxed-layout")}
                            >
                                Caja
                            </button>

                            <button
                                type="button"
                                className={`${
                                    layout === "full"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn flex-auto`}
                                onClick={() => toggleLayout("full")}
                            >
                                Full
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Dirección
                        </h5>
                        <p className="text-white-dark text-xs">
                            Selecciona la dirección.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <button
                                type="button"
                                className={`${
                                    rtlClass === "ltr"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn flex-auto`}
                                onClick={() => toggleRTL("ltr")}
                            >
                                LTR
                            </button>

                            <button
                                type="button"
                                className={`${
                                    rtlClass === "rtl"
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                } btn flex-auto`}
                                onClick={() => toggleRTL("rtl")}
                            >
                                RTL
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Navegación
                        </h5>
                        <p className="text-white-dark text-xs">
                            Posición de la navegación.
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-primary">
                            <label className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === "navbar-sticky"}
                                    value="navbar-sticky"
                                    className="form-radio"
                                    onChange={() =>
                                        toggleNavbar("navbar-sticky")
                                    }
                                />

                                <span>Fijo</span>
                            </label>
                            <label className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === "navbar-floating"}
                                    value="navbar-floating"
                                    className="form-radio"
                                    onChange={() =>
                                        toggleNavbar("navbar-floating")
                                    }
                                />

                                <span>Flotante</span>
                            </label>
                            <label className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === "navbar-static"}
                                    value="navbar-static"
                                    className="form-radio"
                                    onChange={() =>
                                        toggleNavbar("navbar-static")
                                    }
                                />

                                <span>Estático</span>
                            </label>
                        </div>
                    </div>

                    <div className="border border-dashed border-white-light dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">
                            Animación
                        </h5>
                        <p className="text-white-dark text-xs">
                            Animación del contenido principal.
                        </p>
                        <div className="mt-3">
                            <select
                                className="form-select border-primary text-primary"
                                value={animation}
                                onChange={(e) =>
                                    toggleAnimation(e.target.value)
                                }
                            >
                                <option value="">Ninguna</option>
                                <option value="animate__fadeIn">
                                    Aparecer
                                </option>
                                <option value="animate__fadeInDown">
                                    Aparecer Abajo
                                </option>
                                <option value="animate__fadeInUp">
                                    Aparecer Arriba
                                </option>
                                <option value="animate__fadeInLeft">
                                    Aparecer Izquierda
                                </option>
                                <option value="animate__fadeInRight">
                                    Aparecer Derecha
                                </option>
                                <option value="animate__slideInDown">
                                    Deslizar Abajo
                                </option>
                                <option value="animate__slideInLeft">
                                    Deslizar Izquierda
                                </option>
                                <option value="animate__slideInRight">
                                    Deslizar Derecha
                                </option>
                                <option value="animate__zoomIn">Zoom In</option>
                                <option value="animate__zoomInDown">
                                    Zoom In Down
                                </option>
                                <option value="animate__zoomInLeft">
                                    Zoom In Left
                                </option>
                                <option value="animate__zoomInRight">
                                    Zoom In Right
                                </option>
                                <option value="animate__zoomInUp">
                                    Zoom In Up
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Setting;
