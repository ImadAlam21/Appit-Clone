import { useState } from "react";
import "/src/App.css";

export default function Head() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

    const menuItems = [
        { label: "Benefits", id: "benefits" },
        { label: "Features", id: "features" },
        { label: "Pricing", id: "pricing" },
        { label: "Testimonials", id: "testimonials" },
        { label: "FAQ's", id: "faqs" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                <div
                    onClick={() => scrollToTop()}
                    className="header-logo cursor-pointer"
                >
                    <img
                        src="/logo/logo.png"
                        alt="Appit Logo"
                        className="w-10 h-10"
                    />
                </div>

                <div className="hidden xl:flex items-center gap-8 text-gray-300 font-medium">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="hover:text-white transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="hidden xl:block">
                    <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:opacity-70 transition">
                        Join Waitlist
                    </button>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="xl:hidden bg-white text-black p-3 rounded-xl"
                >
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {open && (
                    <div className="xl:hidden absolute right-6 top-[72px] z-50">
                        <div
                            className="w-[260px] bg-black/95 backdrop-blur-md
                            rounded-2xl border border-white/10
                            px-6 py-5
                            flex flex-col gap-5 text-white"
                        >
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left hover:opacity-70 transition"
                                >
                                    {item.label}
                                </button>
                            ))}

                            <button className="mt-3 bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
