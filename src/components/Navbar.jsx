import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="
                fixed top-4 left-1/2 -translate-x-1/2 z-50
                w-[95%] max-w-7xl
                backdrop-blur-lg
                bg-[#014cb1]/20
                border border-[#2a88df]/30
                rounded-2xl
                shadow-[0_8px_30px_rgba(1,76,177,0.25)]
            "
        >
            <div className="relative flex items-center h-16 px-4 md:px-6">

                {/* LEFT: Logo / Icon placeholder */}
                <div className="flex items-center gap-2">
                    <div
                        className="
                            w-9 h-9
                            rounded-xl
                            bg-gradient-to-br from-[#014cb1] to-[#2a88df]
                            flex items-center justify-center
                            text-white text-xs font-semibold
                        "
                    >
                        LOGO
                    </div>
                    <span className="hidden sm:block text-xs text-blue-100/70">
                        (36×36px)
                    </span>
                </div>

                {/* CENTER: Desktop Navigation */}
                <div
                    className="
                        absolute left-1/2 -translate-x-1/2
                        hidden md:flex gap-2
                    "
                >
                    {["Home", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="
                                px-4 py-2 rounded-lg
                                text-blue-100
                                transition-all duration-300
                                hover:text-[#ffca07]
                                hover:bg-white/10
                                focus:outline-none
                                focus:ring-2 focus:ring-[#ffca07]/70
                                active:scale-95
                            "
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* RIGHT: Hamburger (Mobile) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        ml-auto md:hidden
                        w-10 h-10
                        flex items-center justify-center
                        rounded-xl
                        text-blue-100
                        hover:text-[#ffca07]
                        hover:bg-white/10
                        focus:outline-none
                        focus:ring-2 focus:ring-[#ffca07]/70
                        transition
                    "
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 bg-current" />
                        <span className="block w-6 h-0.5 bg-current" />
                        <span className="block w-6 h-0.5 bg-current" />
                    </div>
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`
                    md:hidden
                    overflow-hidden transition-all duration-300
                    ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div
                    className="
                        px-4 pb-4 pt-2
                        flex flex-col gap-2
                        bg-[#014cb1]/30
                        backdrop-blur-md
                        border-t border-[#2a88df]/30
                    "
                >
                    {["Home", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="
                                px-4 py-3 rounded-xl
                                text-blue-100
                                transition-all duration-300
                                hover:text-[#ffca07]
                                hover:bg-white/10
                                focus:outline-none
                                focus:ring-2 focus:ring-[#ffca07]/70
                                active:scale-[0.98]
                            "
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}