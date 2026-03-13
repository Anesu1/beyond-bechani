"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const revealVariants = {
    hidden: { y: "30%", opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1] as any,
        }
    }
};

export default function Footer() {
    return (
        <footer id="contact" className="section-padding bg-white grid-background border-t border-black/5">
            <div className="max-w-[1440px] mx-auto container-padding">
                
                {/* Large Branding Header */}
                <div className="mb-24 md:mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <div className="overflow-hidden">
                            <motion.h2 variants={revealVariants} className="h-hero text-black">
                                Beyond Bechani
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden -mt-4">
                            <motion.h2 variants={revealVariants} className="h-hero text-black/20">
                                Product Designer
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
                    <div className="md:col-span-6 flex flex-col gap-6">
                        <span className="label-mono text-black/40">GET IN TOUCH</span>
                        <a href="mailto:hello@beyondbechani.com" className="body-large text-black hover:text-black/60 transition-colors">
                            hello@beyondbechani.com
                        </a>
                        <p className="body-regular text-black/50 max-w-[320px]">
                            Currently accepting new projects for 2025. Let’s create something human.
                        </p>
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-6">
                        <span className="label-mono text-black/40">SOCIAL</span>
                        <div className="flex flex-col gap-3">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="body-regular text-black hover:text-black/60 transition-colors uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-6">
                        <span className="label-mono text-black/40">NAVIGATION</span>
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="body-regular text-black hover:text-black/60 transition-colors uppercase">Home</Link>
                            <Link href="/works" className="body-regular text-black hover:text-black/60 transition-colors uppercase">Works</Link>
                            <Link href="/blog" className="body-regular text-black hover:text-black/60 transition-colors uppercase">Blog</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="label-mono text-black/30">© 2025 BEYOND BECHANI. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="label-mono text-black/30 hover:text-black transition-colors uppercase">Privacy</Link>
                        <Link href="/terms" className="label-mono text-black/30 hover:text-black transition-colors uppercase">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
