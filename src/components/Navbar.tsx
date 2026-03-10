"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

const menuVariants: Variants = {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
    exit: {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 0.4, ease: "easeInOut" },
    },
};

const linkVariants: Variants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "Africa/Harare",
                })
            );
        };
        updateTime();
        const id = setInterval(updateTime, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm border-b border-black/5" : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-bold text-xl tracking-[-0.05em] text-black hover:opacity-60 transition-opacity">
                        BEYOND
                    </Link>

                    {/* Center — static content */}
                    <div className="hidden md:flex items-center gap-2 label-mono text-black/40">
                        <span>BASED IN HARARE, ZW</span>
                        <span className="w-1 h-1 rounded-full bg-black/30 inline-block" />
                        <span className="tabular-nums min-w-[68px] text-center">{time}</span>
                        <span className="ml-1 text-black/30">(GMT+2)</span>
                    </div>

                    {/* Burger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 group"
                        aria-label="Open menu"
                    >
                        <span className="label-mono text-black/50 hidden md:block group-hover:text-black transition-colors">Menu</span>
                        <div className="flex flex-col gap-[5px] w-6">
                            <span className="block h-[1.5px] bg-black w-full transition-all group-hover:w-4" />
                            <span className="block h-[1.5px] bg-black w-4 transition-all group-hover:w-full" />
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[60] bg-black text-white flex flex-col justify-between px-6 md:px-10 pt-0 pb-10"
                    >
                        {/* Top bar */}
                        <div className="max-w-[1440px] mx-auto w-full h-[80px] flex items-center justify-between">
                            <Link href="/" className="font-bold text-xl tracking-[-0.05em] text-white" onClick={() => setIsOpen(false)}>
                                BEYOND
                            </Link>
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="hover:opacity-60 transition-opacity">
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        {/* Nav links */}
                        <nav className="max-w-[1440px] mx-auto w-full flex flex-col gap-4 md:gap-6">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        className="h1 hover:text-white/40 transition-colors duration-200 block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Footer row */}
                        <motion.div
                            variants={linkVariants}
                            className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-10 border-t border-white/10"
                        >
                            <p className="label-mono text-white/30">© 2025 Beyond Bechani</p>
                            <p className="label-mono text-white/30">HARARE, ZIMBABWE</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
