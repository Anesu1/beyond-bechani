"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X, ArrowDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Book a call", href: "/#contact" },
];

const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
    exit: {
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
};

const linkVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-8"
                }`}
            >
                <div className="max-w-[1440px] mx-auto container-padding flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-medium text-lg tracking-tight text-black flex items-center gap-2">
                        <span className="w-6 h-6 bg-black rounded-lg flex-shrink-0" />
                        BEYOND BECHANI
                    </Link>

                    {/* Burger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="group flex flex-col gap-1.5 w-8 items-end"
                        aria-label="Open menu"
                    >
                        <span className="block h-px bg-black w-full" />
                        <span className="block h-px bg-black w-2/3 group-hover:w-full transition-all" />
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
                        className="fixed inset-0 z-[60] bg-[#F9F9F9] text-black flex flex-col"
                    >
                        {/* Top bar inside menu */}
                        <div className="max-w-[1440px] mx-auto w-full container-padding h-[100px] flex items-center justify-between">
                            <Link href="/" className="font-medium text-lg tracking-tight" onClick={() => setIsOpen(false)}>
                                BEYOND BECHANI
                            </Link>
                            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="hover:opacity-60 transition-opacity">
                                <X className="w-8 h-8" strokeWidth={1} />
                            </button>
                        </div>

                        {/* Nav Content */}
                        <div className="flex-grow flex flex-col justify-center items-center">
                            <nav className="flex flex-col items-center gap-8 md:gap-12">
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            className="h-section hover:opacity-40 transition-opacity block text-center uppercase"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer row inside menu */}
                        <div className="max-w-[1440px] mx-auto w-full container-padding pb-12 flex flex-col md:flex-row justify-between items-end gap-12">
                            <div className="flex flex-col gap-4">
                                <span className="label-mono text-black/40">GET IN TOUCH</span>
                                <a href="mailto:hello@beyondbechani.com" className="body-large">hello@beyondbechani.com</a>
                            </div>
                            
                            <div className="flex flex-wrap gap-8">
                                {SOCIAL_LINKS.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="label-mono text-black hover:text-black/50 transition-colors uppercase"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
